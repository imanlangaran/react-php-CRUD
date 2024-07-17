import React, { useState } from 'react'

function CreateUser() {

  const [inputs, setInputs] = useState({

  })

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:  </label>
        <input type='text' name='name' onChange={handleChange} />
        <br />
        <label>Email: </label>
        <input type='email' name='email' onChange={handleChange}/>
        <br />
        <label>Phone: </label>
        <input type="tel" name='phone' onChange={handleChange}/>
        <br />
        <button>Save</button>
      </form>
    </div>
  )
}

export default CreateUser