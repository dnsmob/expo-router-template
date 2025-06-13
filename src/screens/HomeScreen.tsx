import { Link } from 'expo-router'
import { View, Text, StyleSheet } from 'react-native'
import { useModalComponent } from '@/lib/ModalComponentContext'

export default function HomeScreen() {
  const { setComponent } = useModalComponent()

  const handlePress = () => {
    setComponent(<Text>something</Text>)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Link href="/modal" onPress={handlePress}>Open modal</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
  },
})
