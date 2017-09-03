import React from 'react'

const RegisterForm = (props) => (
  <form>
    <div>{props.error}</div>
    <label htmlFor='username'>Username</label>
    <input
      type='username'
      name='username'
      placeholder='Username'
      value={props.user.username}
      onChange={props.onChange} />
    <br />
    <label htmlFor='password'>Password</label>
    <input
      type='password'
      name='password'
      placeholder='Password'
      value={props.user.password}
      onChange={props.onChange} />
    <br />
    <label htmlFor='confirmPassword'>Confirm Password</label>
    <input
      type='password'
      name='confirmPassword'
      placeholder='Confirm Password'
      value={props.user.confirmPassword}
      onChange={props.onChange} />
    <br />
    <input type='submit' onClick={props.onSave} />
  </form>
)

export default RegisterForm
