import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';

import { supabase } from '@/integrations/supabase/client';
interface AuthContextType {
    user: User | null;
    session: Session | null;
    isAdmin: boolean;
    isLoading: boolean;
    signIn: (
        email: string,
        password: string
    ) => Promise<{ data: { user: User | null; session: Session | null }; error: Error | null }>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const checkAdminRole = async (userId: string): Promise<boolean> => {
        const { data, error } = await supabase
            .from('user_roles')
            .select('role')
            .eq('user_id', userId)
            .eq('role', 'admin')
            .maybeSingle();

        if (error || !data) return false;
        return data.role === 'admin';
    };

    useEffect(() => {
        const init = async () => {
            const { data } = await supabase.auth.getSession();

            setSession(data.session);
            setUser(data.session?.user ?? null);

            if (data.session?.user) {
                const admin = await checkAdminRole(data.session.user.id);
                setIsAdmin(admin);
            } else {
                setIsAdmin(false);
            }

            setIsLoading(false);
        };

        init();

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange(async (_event, session) => {
            setIsLoading(true); // Start loading while we verify role

            setSession(session);
            setUser(session?.user ?? null);

            if (session?.user) {
                const admin = await checkAdminRole(session.user.id);
                setIsAdmin(admin);
            } else {
                setIsAdmin(false);
            }

            setIsLoading(false); // Done
        });

        return () => subscription.unsubscribe();
    }, []);

    const signIn = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        return { data, error };
    };

    const signOut = async () => {
        await supabase.auth.signOut();
        setIsAdmin(false);
    };

    return (
        <AuthContext.Provider
            value={{ user, session, isAdmin, isLoading, signIn, signOut }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
};