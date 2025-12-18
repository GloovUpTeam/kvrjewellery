
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://fhutpplxfoknpwcvkkeo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZodXRwcGx4Zm9rbnB3Y3Zra2VvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU1NTM3MDYsImV4cCI6MjA4MTEyOTcwNn0.HNdb6M8lJc35yxZOHT67mu57fKbSsBe5tOL7nFOKzus';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function testConnection() {
    console.log("Testing Supabase connection...");
    try {
        const start = Date.now();
        const { data, error } = await supabase.from('unknown_table').select('*').limit(1);
        const duration = Date.now() - start;

        console.log(`Request took ${duration}ms`);

        if (error) {
            console.log("Response received (expected error for unknown table):");
            console.log("Code:", error.code);
            console.log("Message:", error.message);
        } else {
            console.log("Unexpected success:", data);
        }

        console.log("--- Connection Test Passed (Network is reachable) ---");

    } catch (err) {
        console.error("Connection Failed:", err);
    }
}

async function testAuthPing() {
    console.log("\nTesting Auth Heartbeat...");
    try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
            console.log("Auth Session Error:", error);
        } else {
            console.log("Auth Session Check: Success (No session)");
        }
    } catch (err) {
        console.error("Auth Check Failed:", err);
    }
}

async function testLoginProbe() {
    console.log("\nTesting Login Endpoint (Probe)...");
    try {
        const start = Date.now();
        // Respond with 400 Invalid login credentials
        const { data, error } = await supabase.auth.signInWithPassword({
            email: 'probe@example.com',
            password: 'wrongpassword123'
        });
        const duration = Date.now() - start;
        console.log(`Login Probe took ${duration}ms`);

        if (error) {
            console.log("Login Probe Response (Expected Failure):");
            console.log("Status:", error.status); // Should be 400
            console.log("Message:", error.message);
        } else {
            console.log("Login Probe Unexpected Success?");
        }
    } catch (err) {
        console.error("Login Probe Exception:", err);
    }
}

async function run() {
    await testConnection();
    await testAuthPing();
    await testLoginProbe();
}

run();
