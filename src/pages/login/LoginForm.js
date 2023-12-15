import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import * as _ from 'lodash'
import { RenderInput } from '../../components/Core';
import { signInUser } from '../../services'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { AUTH_TOKEN_SET } from '../../actions';

const inputs = () => ({
  email: {
    title: 'Email',
    inputType: 'text',
    type: 'email',
    error: '',
    required: true,
  },
  password: {
    title: 'Password',
    inputType: 'text',
    type: 'password',
    error: '',
    required: true,
  },
})

const LoginForm = (props) => {
  const [fields, setFields] = useState(inputs())

  const dispatch = useDispatch()
  const navigate = useHistory()

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

    signInUser(data).then(({ token, user }) => {
      dispatch({ type: AUTH_TOKEN_SET, token, user })
      navigate.push('/dashboard')
    })
  }

  return (
    <div className="ras-contact-form">
      <Fade right>
        <h2>Sign In</h2>
        <form id="contact-form" onSubmit={sendEmail}>

          {Object.keys(fields).map((key) => (
            <RenderInput input={{ ...fields[key] }} Key={key} onChange={onChange} />)
          )}

          <div className="form-group mb-0">
            <button className="btn btn-primary btn-large">Sign In</button>
          </div>
        </form>
      </Fade>
    </div>
  );

}

export default LoginForm;