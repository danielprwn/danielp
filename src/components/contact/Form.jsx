import React from 'react'

const Form = () => {
  return (
    <form>
      <div className="left_in_form">
        <input type="email" placeholder='e-mail adress' required />
      </div>
      <div className='right_in_form'><button className='btn red_btn'>Contact Us!</button></div>
    </form>
  )
}

export default Form
