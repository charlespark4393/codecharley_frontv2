export const CheckBox = (props) => {
  const { title, placeholder, Key, onChange, value, required } = props

  return (
    <div className="form-group flex">
      <input
        type='checkbox'
        name={Key}
        className=""
        id={Key}
        placeholder={placeholder || title}
        checked={value}
        required={required}
        onChange={(e) => onChange(e.target.checked)} />
      <label htmlFor={Key} className="">{title}</label>
    </div>)
}