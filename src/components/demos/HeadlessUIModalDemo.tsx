import { useState } from 'react'
import HeadlessUIModal from '../ui/HeadlessUIModal'

export default function App() {
  const [open, setOpen] = useState(false)

  // コールバック関数でsetStateの正体は隠す
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleDeactivate = () => {
    // ここに処理を書くだけ。
    alert('アカウントは削除されました')
    setOpen(false)
  }

  return (
    <>
      <button onClick={handleOpen}>
        Open dialog
      </button>
      <HeadlessUIModal
        open={open}
        onClose={handleClose}
        onDeactivate={handleDeactivate}
      />
    </>
  )
}
