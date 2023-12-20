import { CheckBox } from "./CheckBox"
import { Input } from "./Input"
import { Select } from "./Select"
import { Textarea } from "./Textarea"

export const RenderInput = (props) => {
  const { input, onChange, Key } = props

  switch (input.inputType) {
    case 'text':
      return <Input key={Key} Key={Key} onChange={(v) => onChange(Key, v)} {...input} />
    case 'textarea':
      return <Textarea key={Key} Key={Key} onChange={(v) => onChange(Key, v)} {...input} />
    case 'checkbox':
      return <CheckBox key={Key} Key={Key} onChange={(v) => onChange(Key, v)} {...input} />
    case 'select':
      return <Select key={Key} Key={Key} onChange={(v) => onChange(Key, v)} {...input} />
    case 'section':
      return (
        <div className={`border-b-2 border-shade-blue w-full italic mb-10`} style={{ borderBottomWidth: 2, borderBottomColor: '#aaa', borderBottomStyle: 'solid', fontStyle: 'italic' }}>
          <span>- {input.title}</span>
        </div>
      )
    default:
      return null
  }
}