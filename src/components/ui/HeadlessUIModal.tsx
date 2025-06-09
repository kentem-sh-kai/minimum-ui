import { Dialog, DialogPanel, DialogTitle, Description } from '@headlessui/react'
import { css } from '@emotion/react'

const overlayStyle = css`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(0,0,0,0.2);
`

const panelStyle = css`
  max-width: 32rem;
  border: 1px solid #eee;
  background: #fff;
  padding: 3rem;
  border-radius: 1.2rem;
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const titleStyle = css`
  font-weight: bold;
  font-size: 1.3rem;
`

const btnRowStyle = css`
  display: flex;
  gap: 1rem;
`

const buttonStyle = css`
  background: #ececec;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 0.7rem;
  font-size: 1rem;
  font-weight: 600;
  transition: background 0.15s;
  cursor: pointer;

  &:hover {
    background: #ffdbe0;
  }
`

type Props = {
  open: boolean
  onClose: () => void
  onDeactivate: () => void
}

const HeadlessUIModal = ({ open, onClose, onDeactivate }: Props) => (
  <Dialog open={open} onClose={onClose}>
    <div css={overlayStyle}>
      <DialogPanel css={panelStyle}>
        <DialogTitle css={titleStyle}>アカウントの削除</DialogTitle>
        <Description>
          この操作はアカウントを完全に削除します。
        </Description>
        <p>
          本当にアカウントを削除してもよろしいですか？<br />
          すべてのデータが完全に消去され、元に戻せません。
        </p>
        <div css={btnRowStyle}>
          <button css={buttonStyle} onClick={onClose}>
            キャンセル
          </button>
          <button css={buttonStyle} onClick={onDeactivate}>
            削除する
          </button>
        </div>
      </DialogPanel>
    </div>
  </Dialog>
)


export default HeadlessUIModal
