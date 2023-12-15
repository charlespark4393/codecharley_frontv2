import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import * as _ from 'lodash'
import { RenderInput } from '../../components/Core';

const inputs = () => ({
  name: {
    title: 'Name',
    inputType: 'text',
    type: 'text',
    error: '',
    required: true,
  },
  phoneNumber: {
    title: 'Phone Number',
    inputType: 'text',
    type: 'tel',
    error: '',
    required: true,
  },
  email: {
    title: 'Email',
    inputType: 'text',
    type: 'email',
    error: '',
    required: true,
  },
  message: {
    title: 'Message',
    inputType: 'textarea',
    rows: 4,
    error: '',
    required: true,
  },
})

const ContactForm = (props) => {
  const [fields, setFields] = useState(inputs())

  const onChange = async (key, v) => {
    let temp = _.cloneDeep(fields)
    temp[key].value = v
    setFields(temp)
  }

  function sendEmail(e) {
    e.preventDefault();

    let data = {}

    Object.keys(fields).forEach((key) => {
      data[key] = fields[key].value
    })
    
    // e.target.reset()
    console.log(data)
  }

  return (
    <div className="ras-contact-form">
      <Fade right>
        <h2>Book an Appointments</h2>
        <form id="contact-form" onSubmit={sendEmail}>

          {Object.keys(fields).map((key) => (
            <RenderInput input={{ ...fields[key] }} Key={key} onChange={onChange} />)
          )}

          <div className="form-group mb-0">
            <button className="btn btn-primary btn-large">Send Message</button>
          </div>
        </form>
      </Fade>
    </div>
  );

}

export default ContactForm;