import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function CreateUser() {

  const navigate = useNavigate()

  const [inputs, setInputs] = useState([])

  const {id} = useParams();

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    axios.get(`http://localhost/react-php/api/user/${id}`).then(function(response) {
      console.log(response.data);
      setInputs(response.data);
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put(`http://localhost/react-php/api/user/${id}/edit`, inputs).then(function(response){
      console.log(response.data);
      navigate('/');
    })
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing="10px">
          <tr>
            <th>
              <label>Name:  </label>

            </th>
            <th>
              <input value={inputs.name} type='text' name='name' onChange={handleChange} />

            </th>
          </tr>
          <tr>
            <th>

              <label>Email: </label>
            </th>
            <th>

              <input value={inputs.email} type='email' name='email' onChange={handleChange} />
            </th>
          </tr>
          <tr>
            <th>
              <label>Phone: </label>

            </th>
            <th>
              <input value={inputs.mobile} type="tel" name='phone' onChange={handleChange} />
            </th>
          </tr>
        <button>Save</button>
        </table>
        
      </form>
    </div>
  )
}

export default CreateUser