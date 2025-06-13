import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { ModalComponentProvider } from '../src/lib/ModalComponentContext'

export default function RootLayout() {
  return (
    <ModalComponentProvider>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </ModalComponentProvider>
  )
}
