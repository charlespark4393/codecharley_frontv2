import { useEffect, useState } from 'react'
import { confirmable, createConfirmation } from 'react-confirm'
import { ConfirmModal } from './ConfirmModal'

const ConfirmDialog = ({ show, proceed, confirmation, options }) => {
  const [lastUpdatedAt, setLastUpdatedAt] = useState(Date.now())
  useEffect(() => {
    setLastUpdatedAt(Date.now())
  }, [show])

  return (
    <ConfirmModal
      isOpen={show}
      onOk={() => proceed(true)}
      onCancel={() => proceed(false)}
      lastUpdatedAt={lastUpdatedAt}
      content={confirmation}
      options={options}
    />
  )
}

const confirmDlg = confirmable(ConfirmDialog)

const createConfirm = createConfirmation(confirmDlg)

export const confirm = (content, options = {}) =>
  createConfirm({ confirmation: content, options })
