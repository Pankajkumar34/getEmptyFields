
/**
 * Function to get empty fields from an input object
 * @param {object} inputsNames - Object with input field names as keys and their values
 * @returns {Array<string>} - Array of keys that have empty values
 */
const getEmptyFields = (inputsNames) => {
    // store empty key in emptyFields array
    const emptyFields = [];
    // Convert object keys to an array
    const keyValues = Object.keys(inputsNames);

    for (const field of keyValues) {
      if (!inputsNames[field]) {
        emptyFields.push(field);
      }
    }
    return emptyFields;
    };

export {getEmptyFields}

