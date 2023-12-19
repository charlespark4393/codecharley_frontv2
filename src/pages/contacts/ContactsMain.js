import React, { useEffect, useState } from "react"
import { getContacts } from "../../services"
import { PlainTable } from "../../components/Core"

const ContactsMain = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    update()
  }, [])

  const update = () => {
    getContacts().then(data =>
      setData(data)
    )
  }

  return (
    <React.Fragment>
      <div className="ras-contact-content sec-spacer">
        <div className="container">
          <div className="row">
            <PlainTable header={['No', 'Name', 'Phone Number', 'Email', 'Message']}
              data={data.map((item, index) => [
                index + 1,
                item.name,
                item.phoneNumber,
                item.email,
                item.message,
              ])}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ContactsMain
