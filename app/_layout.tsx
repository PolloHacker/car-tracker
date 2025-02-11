import { Stack } from 'expo-router/stack';
import AuthProvider from '@/context/authProvider';

export default function Layout() {
  return (
    <AuthProvider>
    <Stack>
      <Stack.Screen name="(auth)/(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
            name="(public)/login"
            options={{ headerShown: false }}
          />
    </Stack>
    </AuthProvider>
  );
}
