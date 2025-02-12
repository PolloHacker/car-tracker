import { Stack } from 'expo-router/stack';
import AuthProvider from '@/context/authProvider';
import { ThemeProvider } from '@/context/themeProvider';

export default function Layout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="(auth)/(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="(public)/login"
            options={{ headerShown: false }}
          />
        </Stack>
      </AuthProvider>
    </ThemeProvider>
  );
}
