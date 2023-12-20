export const Select = ({
  color = 'sky',
  disabled = false,
  readOnly = false,
  id = '',
  title = '',
  name = '',
  value = '',
  error = '',
  options = [],
  className = '',
  size = 4,
  required = false,
  hasDefaultOption = false,
  defaultOptionText = '- Select -',
  history = false,
  onChange = () => { },
  onBlur = () => { },
  showHistory = () => { },
  ...props
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id} className="">{title}</label>
      <select
        id={id}
        className="form-control"
        name={name}
        value={value}
        disabled={disabled || readOnly}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onBlur}
        required={required}
        {...props}
        style={{ appearance: 'auto' }}
      >
        {hasDefaultOption && <option value="">{defaultOptionText}</option>}
        {Array.isArray(options) &&
          options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}

        {!Array.isArray(options) &&
          Object.keys(options).map((key) => (
            <option key={key} value={key}>
              {options[key]}
            </option>
          ))}
      </select>
    </div>
  )
}