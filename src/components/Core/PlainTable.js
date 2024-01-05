export const PlainTable = ({
  header = [],
  data = [],
  classNames = [],
  widthClass = 'w-full',
  tdClass = 'px-6 py-1 whitespace-nowrap',
  trClasses = {},
}) => {
  return (
    <div className="overflow-auto mb-6 shadow-md rounded">
      <table className={`${widthClass} text-sm text-left text-gray-900 dark:text-gray-400 pl-6`}>
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {header.map((item, index) => (
              <th scope="col" className={`px-6 py-3 ${classNames[index]} text-center`} key={item}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-[14.5px] text-gray-900">
          {data.map((row, index) => (
            <tr key={index} className={`${trClasses[index]} ${index % 2 ? 'bg-gray-50' : ''}`} style={{borderBottom: '1px solid #ccc'}}>
              {row &&
                row.map((item, rIndex) => (
                  <td
                    className={`${tdClass} ${rIndex === 0 && 'font-medium text-gray-900 dark:text-white'}`}
                    key={rIndex}
                  >
                    {item}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
