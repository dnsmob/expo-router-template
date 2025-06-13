import { useModalComponent } from '@/lib/ModalComponentContext'

export default function ModalScreen() {
  const { component } = useModalComponent()
  return <>{component}</>
}
