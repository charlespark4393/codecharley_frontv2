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

  return (
    <React.Fragment>
      <div className="ras-contact-content sec-spacer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Input Key='search' title='Search' value={query} onChange={(v) => setQuery(v)} />
            </div>

            <PlainTable header={['No', 'Name', 'Type', 'Landload', 'Area', 'Unit', 'Bedroom', 'RentalPrice', 'LeaseStart', 'Email', 'Phone', 'Action']}
              data={data.map((item, index) => [
                index + 1,
                `${item.firstName} ${item.lastName}`,
                item.type,
                item.landlord,
                item.area,
                item.unit,
                item.bedroom,
                item.rentalPrice,
                item.leaseStart,
                item.email,
                item.phone,
                <>
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
