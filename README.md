
# getEmptyFields

`getEmptyFields` is a simple utility function designed to handle multiple empty input fields for validation purposes. It accepts an object (input names) as a parameter and returns an array of input names that have empty values.


Git repository
```bash
  https://github.com/Pankajkumar34/getEmptyFields.git
```

## usage
   ` const emptyFields = getEmptyFields(fields); // <==== getEmptyFields function for get empty inputs fields`

```bash
const submitData = (e) => {
    e.preventDefault()
    const emptyFields = getEmptyFields(fields); // <==== getEmptyFieldsfunction for get empty inputs fields
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
```






