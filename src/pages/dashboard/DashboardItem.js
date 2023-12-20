import React, { useEffect, useState } from "react"
import { Fade } from "react-reveal"
import * as _ from 'lodash'
import { createPerson, getPersonById, updatePerson } from "../../services"
import { inputs } from "./constants"
import { RenderInput } from "../../components/Core"
import { useHistory } from "react-router-dom"

const DashboardItem = ({ id }) => {
  const [isLoading, setLoading] = useState(false)
  const [fields, setFields] = useState(inputs())
  const navigate = useHistory()

  const onChange = async (key, v) => {
    let temp = _.cloneDeep(fields)
    temp[key].value = v
    setFields(temp)
  }

  useEffect(() => {
    if (id === 0) return
    getPersonById(id).then(data => {
      let temp = _.cloneDeep(fields)
      Object.keys(fields).forEach((key) => {
        temp[key].value = data[key]
      })
      setFields(temp)
    })
    // eslint-disable-next-line
  }, [id])

  const onSubmit = (e) => {
    e.preventDefault();

    let data = {}

    Object.keys(fields).forEach((key) => {
      data[key] = fields[key].value
    })

    // e.target.reset()
    setLoading(true)
    if (id === 0)
      createPerson(data).then(() => navigate.push('/dashboard')).finally(() => setLoading(false))
    else
      updatePerson(id, data).then(() => navigate.push('/dashboard')).finally(() => setLoading(false))
  }

  return (
    <React.Fragment>
      <div className="ras-contact-content sec-spacer">
        <div className="container">
          <div className="row"></div>
          <div className="ras-contact-form">
            <Fade right>
              <h2>Person Information</h2>
              <form id="contact-form" onSubmit={onSubmit}>

                <div className="row">
                  {Object.keys(fields).map((key) => (
                    <div className={`${fields[key].span ? 'col-lg-12' : 'col-lg-4'} ${fields[key].inputType === 'checkbox' ? ' flex items-center' : ''}`}>
                      <RenderInput input={{ ...fields[key] }} Key={key} onChange={onChange} />
                    </div>)
                  )}</div>

                <div className="form-group mb-0">
                  <button className="btn btn-primary btn-large mr-10" disabled={isLoading}>Submit</button>
                  <button className="btn btn-secondary btn-large" disabled={isLoading} onClick={() => navigate.push('/dashboard')}>Cancel</button>
                </div>
              </form>
            </Fade>
          </div>
        </div>
      </div>
    </React.Fragment>)
}

export default DashboardItem
