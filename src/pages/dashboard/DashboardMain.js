import React, { useEffect, useState } from "react"
import { deletePerson, getPerson } from "../../services"
import { Input, PlainTable } from "../../components/Core"
import { useHistory } from "react-router-dom"

const DashboardMain = () => {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')
  const navigate = useHistory()


  useEffect(() => {
    const timeOutId = setTimeout(() => update(query), 700)
    return () => clearTimeout(timeOutId)
  }, [query])

  const update = (query) => {
    getPerson(query).then(data => {
      setData(data)
    })
  }

  const onCreate = () => {
    navigate.push('/dashboard/0')
  }

  const onDelete = async (id) => {
    const result = window.confirm('Do you want to remove this item?')
    if (!result) return

    await deletePerson(id)
    await update()
  }

  const formatPhoneNumber = (phoneNumber) => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]} - ${match[3]}`;
    }
    return phoneNumber;
  };

  return (
    <React.Fragment>
      <div className="ras-contact-content sec-spacer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Input Key='search' title='Search' value={query} onChange={(v) => setQuery(v)} />
            </div>

            <PlainTable className="text-center " header={['ID', 'Name', 'Type', 'Landload', '[Area/Unit/Bedroom/Rent]', 'LeaseStart','[Income/Credit]', 'Email', 'Phone', 'Action']}
              data={data.slice().reverse().map((item, index) => [
                item.id, // Displaying the index in reverse order
                `${item.firstName} ${item.lastName}`,
                <>
                  <div style={{ whiteSpace: 'nowrap' }}>{item.type}</div>
                </>,
                item.landlord,
                <>
                  <div style={{ whiteSpace: 'nowrap' }}>
                    <div>
                      {item.area} / {item.unit} 
                    </div>
                    <div>
                    {item.bedroom} / {item.rentalPrice !== null ? `$${item.rentalPrice.toLocaleString()}` : 'N/A'}
                    </div>
                  </div>
                </>,
                <>
                  <div style={{ whiteSpace: 'nowrap' }}>{item.leaseStart}</div>
                </>,
                <>
                  <div style={{ whiteSpace: 'nowrap' }}>
                  <div>
                    ${item.income1.toLocaleString()} {item.income2 && item.income1 !== item.income2 ? `- ${item.income2.toLocaleString()}` : ''}
                  </div>
                    <div>
                      {item.creditScore}
                    </div>
                  </div>
                </>,
                <>
                  <div style={{ whiteSpace: 'nowrap' }}>{item.email}</div>
                </>,
                <>
                  <div style={{ whiteSpace: 'nowrap' }}>{formatPhoneNumber(item.phone)}</div>
                </>,
                <>
                  <div style={{ whiteSpace: 'nowrap' }}>
                    <button
                      className="btn btn-primary"
                      onClick={() => navigate.push(`/dashboard/${item.id}`)}
                    >
                      <i class="icofont-pencil-alt-5"></i>
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => onDelete(item.id)}
                    >
                      <i class="icofont-trash"></i>
                    </button>
                  </div>
                </>
              ])}
            />
            <div className="form-group mb-0 mt-10">
              <button className="btn btn-primary btn-large" onClick={onCreate}>Create</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default DashboardMain
