export const Input = (props) => {
  const { type = 'text', title, placeholder, key, onChange, value, required } = props

  return (
    <div className="form-group">
      <label htmlFor={key} className="">{title}</label>
      <input
        type={type}
        name={key}
        className="form-control"
        id={key}
        placeholder={placeholder || title}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)} />
    </div>)
}