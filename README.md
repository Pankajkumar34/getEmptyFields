# getEmptyFields

`getEmptyFields` is a simple utility function designed to handle multiple empty input fields for validation purposes. It accepts an object (input names) as a parameter and returns an array of input names that have empty values.




Git repository
```bash
  https://github.com/Pankajkumar34/getEmptyFields.git
```

## usage
   ` const emptyFields = getEmptyFields(fields); // <==== getEmptyFields function for get empty inputs fields`


## Installation

Install getEmptyFields  use npm

```bash
  npm install getEmptyFields 
  
```
## import
    import { getEmptyFields } from get_input_empty_fields;
    
## function 
`const emptyFields = getEmptyFields(fields); // <==== getEmptyFields function for get empty inputs fields`




## Usage/Examples

```javascript
import React from "react"
import { getEmptyFields } from 'get_input_empty_fields';

function App() {
  const [errors, setErrors] = useState({})
  const [fields, setFields] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    phoneNumber: "",
    confirmPassword: ""
  })


  // handleChange 
  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    setErrors({})
  }


  // handleSubmit
  const submitData = (e) => {
    e.preventDefault();

   const emptyFields = getEmptyFields(fields); // <==== getEmptyFields function for get empty inputs fields
    // here check emptyFields length 
    if (emptyFields.length > 0) {
      emptyFields.forEach(field => {
        setErrors((prev) => ({ ...prev, [field]: `${field} is required` })); // setErrors fields 
      });
      alert(JSON.stringify(emptyFields))
    } else {
      console.log("All fields filled:", fields);
      // Add further logic for data submission or API calls here
    }
  };


  return (
  <div>
  <form onSubmit={submitData} style={{ width: '50%', margin: 'auto', maxWidth: '600px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '24px' }}>
          <div style={{ flex: '1 1 50%', padding: '0 12px', marginBottom: '24px' }}>
            <label htmlFor="fname" style={{ display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#4a4a4a', fontSize: '12px', fontWeight: 'bold', marginBottom: '8px' }}>
              First Name
            </label>
            <input
              value={fields.fname}
              name="fname"
              onChange={handleChange}
              style={{ width: '100%', backgroundColor: '#f0f0f0', color: '#4a4a4a', border: '1px solid #ddd', borderRadius: '4px', padding: '12px', marginBottom: '8px' }}
              type="text"
              placeholder="Jane"
            />
            {errors.fname && <p style={{ color: '#e74c3c', fontSize: '12px', fontStyle: 'italic' }}>{errors.fname}.</p>}
          </div>
          <div style={{ flex: '1 1 50%', padding: '0 12px' }}>
            <label htmlFor="lname" style={{ display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#4a4a4a', fontSize: '12px', fontWeight: 'bold', marginBottom: '8px' }}>
              Last Name
            </label>
            <input
              value={fields.lname}
              name="lname"
              onChange={handleChange}
              style={{ width: '100%', backgroundColor: '#f0f0f0', color: '#4a4a4a', border: '1px solid #ddd', borderRadius: '4px', padding: '12px', marginBottom: '8px' }}
              type="text"
              placeholder="Doe"
            />
            {errors.lname && <p style={{ color: '#e74c3c', fontSize: '12px', fontStyle: 'italic' }}>{errors.lname}.</p>}
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '24px' }}>
          <div style={{ flex: '1 1 50%', padding: '0 12px', marginBottom: '24px' }}>
            <label htmlFor="email" style={{ display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#4a4a4a', fontSize: '12px', fontWeight: 'bold', marginBottom: '8px' }}>
              Email
            </label>
            <input
              value={fields.email}
              name="email"
              onChange={handleChange}
              style={{ width: '100%', backgroundColor: '#f0f0f0', color: '#4a4a4a', border: '1px solid #ddd', borderRadius: '4px', padding: '12px', marginBottom: '8px' }}
              type="text"
              placeholder="Email.."
            />
            {errors.email && <p style={{ color: '#e74c3c', fontSize: '12px', fontStyle: 'italic' }}>{errors.email}.</p>}
          </div>
          <div style={{ flex: '1 1 50%', padding: '0 12px' }}>
            <label htmlFor="phoneNumber" style={{ display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#4a4a4a', fontSize: '12px', fontWeight: 'bold', marginBottom: '8px' }}>
              Phone Number
            </label>
            <input
              value={fields.phoneNumber}
              name="phoneNumber"
              onChange={handleChange}
              style={{ width: '100%', backgroundColor: '#f0f0f0', color: '#4a4a4a', border: '1px solid #ddd', borderRadius: '4px', padding: '12px', marginBottom: '8px' }}
              type="text"
              placeholder="Phone Number"
            />
            {errors.phoneNumber && <p style={{ color: '#e74c3c', fontSize: '12px', fontStyle: 'italic' }}>{errors.phoneNumber}.</p>}
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '24px' }}>
          <div style={{ width: '100%', padding: '0 12px' }}>
            <label htmlFor="password" style={{ display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#4a4a4a', fontSize: '12px', fontWeight: 'bold', marginBottom: '8px' }}>
              Password
            </label>
            <input
              value={fields.password}
              name="password"
              onChange={handleChange}
              style={{ width: '100%', backgroundColor: '#f0f0f0', color: '#4a4a4a', border: '1px solid #ddd', borderRadius: '4px', padding: '12px', marginBottom: '8px' }}
              type="password"
              placeholder="******************"
            />
            {errors.password && <p style={{ color: '#e74c3c', fontSize: '12px', fontStyle: 'italic' }}>{errors.password}.</p>}
          </div>
          <div style={{ width: '100%', padding: '0 12px' }}>
            <label htmlFor="confirmPassword" style={{ display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#4a4a4a', fontSize: '12px', fontWeight: 'bold', marginBottom: '8px' }}>
              Confirm Password
            </label>
            <input
              value={fields.confirmPassword}
              name="confirmPassword"
              onChange={handleChange}
              style={{ width: '100%', backgroundColor: '#f0f0f0', color: '#4a4a4a', border: '1px solid #ddd', borderRadius: '4px', padding: '12px', marginBottom: '8px' }}
              type="password"
              placeholder="******************"
            />
            {errors.confirmPassword && <p style={{ color: '#e74c3c', fontSize: '12px', fontStyle: 'italic' }}>{errors.confirmPassword}.</p>}
          </div>
        </div>
        <input
          type="submit"
          style={{ display: 'block', width: '100%', textAlign: 'center', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', fontWeight: 'bold', padding: '12px', border: '1px solid #007bff', borderRadius: '4px' }}
          value="Submit"
        />
      </form>
    </div>

  );
}
export default App;
```

