import React, { useEffect, useState } from "react"
import { deletePerson, getPerson } from "../../services"
import { PlainTable } from "../../components/Core"
import { useHistory } from "react-router-dom"

const DashboardMain = () => {
  const [data, setData] = useState([])
  const navigate = useHistory()

  useEffect(() => {
    update()
  }, [])

  const update = () => {
    getPerson().then(data => {
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
            <PlainTable header={['No', 'First Name', 'Last Name', 'Email', 'Phone', 'Type', 'Action']}
              data={data.map((item, index) => [
                index + 1,
                item.firstName,
                item.lastName,
                item.email,
                item.phone,
                item.type,
                <div>
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
