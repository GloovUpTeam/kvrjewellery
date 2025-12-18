import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Gem, Eye, EyeOff, Loader2 } from 'lucide-react';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const { user, isAdmin, isLoading } = useAuth();
    const navigate = useNavigate();
    const { toast } = useToast();

    // Removed auto-redirect to prevent race conditions. 
    // Users will manually sign in which is safer and clearer.

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Requirement 4: setLoading(true) only at submit start
        setLoading(true);
        console.log('Login flows started: Auth -> Role Verification');

        try {
            // Requirement 1: Authentication
            // Use supabase.auth.signInWithPassword() and await fully
            const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if (authError) {
                console.error('Authentication failed:', authError.message);
                toast({
                    title: 'Login Failed',
                    description: authError.message,
                    variant: 'destructive',
                });
                return; // Goes to finally
            }

            if (!authData.user) {
                console.error('Authentication succeeded but no user returned');
                toast({
                    title: 'Login Error',
                    description: 'No user data returned from authentication provider.',
                    variant: 'destructive',
                });
                return; // Goes to finally
            }

            console.log('Authentication successful. User ID:', authData.user.id);

            // Requirement 2: Database User Role Fetch
            // Fetch role using maybeSingle()
            const { data: roleData, error: roleError } = await supabase
                .from('user_roles')
                .select('role')
                .eq('user_id', authData.user.id)
                .eq('role', 'admin') // Optimization: Filter by admin directly
                .maybeSingle();

            if (roleError) {
                console.error('Role fetch error:', roleError);
                // Requirement 2c: Handle role fetch error -> Sign out and Error
                await supabase.auth.signOut();
                toast({
                    title: 'Verification Error',
                    description: 'Failed to verify user permissions. Please try again.',
                    variant: 'destructive',
                });
                return; // Goes to finally
            }

            // Requirement 3: Role Validation Logic
            // Handle cases: role exists vs role is null
            const isAdmin = roleData?.role === 'admin';

            if (!isAdmin) {
                console.warn('User is not an admin. Role data:', roleData);
                // Requirement 3: Sign out, show access denied, stop loading, logic ends.
                await supabase.auth.signOut();
                toast({
                    title: 'Access Denied',
                    description: 'You do not have administrative privileges.',
                    variant: 'destructive',
                });
                return; // Goes to finally
            }

            // Requirement 6: Navigation
            // Redirect ONLY after Auth success + Role fetch success + Role === 'admin'
            console.log('Role verified. Redirecting to dashboard...');
            toast({
                title: 'Success',
                description: 'Logging in...',
            });
            navigate('/admin/dashboard');

        } catch (error) {
            // Requirement 7: Error Visibility
            console.error('Unexpected error in login flow:', error);
            toast({
                title: 'System Error',
                description: 'An unexpected error occurred. Please check console for details.',
                variant: 'destructive',
            });
        } finally {
            // Requirement 4: setLoading(false) MUST run in finally block
            // Requirement 5: No blocking logic preventing this
            console.log('Login flow finished. Resetting loader.');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center">
                            <Gem className="h-8 w-8 text-primary-foreground" />
                        </div>
                    </div>
                    <CardTitle className="text-2xl font-serif">Admin Login</CardTitle>
                    <CardDescription>
                        Enter your credentials to access the dashboard
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <Label>Password</Label>
                            <div className="relative">
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-0 top-0 h-full"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff /> : <Eye />}
                                </Button>
                            </div>
                        </div>

                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                'Sign In'
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default AdminLogin;