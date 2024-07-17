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
        <table cellSpacing="10px">
          <tr>
            <th>
              <label>Name:  </label>

            </th>
            <th>
              <input type='text' name='name' onChange={handleChange} />

            </th>
          </tr>
          <tr>
            <th>

              <label>Email: </label>
            </th>
            <th>

              <input type='email' name='email' onChange={handleChange} />
            </th>
          </tr>
          <tr>
            <th>
              <label>Phone: </label>

            </th>
            <th>
              <input type="tel" name='phone' onChange={handleChange} />
            </th>
          </tr>
        <button>Save</button>
        </table>
        
      </form>
    </div>
  )
}

export default CreateUser