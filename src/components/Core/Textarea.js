export const Textarea = (props) => {
  const { title, placeholder, key, onChange, value, required, rows } = props

  return (<div className="form-group">
    <label htmlFor={key} className="sr-only">{title}</label>
    <textarea className="form-control" id={key} rows={rows}
      placeholder={placeholder || title}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}></textarea>
  </div>
  )
}