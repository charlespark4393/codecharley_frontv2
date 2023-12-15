import { CheckBox } from "./CheckBox"
import { Input } from "./Input"
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
    default:
      return null
  }
}