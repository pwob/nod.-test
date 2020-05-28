import React, { useState, useEffect, useRef } from 'react';
import Field from './components';
import './AppStyles.js';
import {AppContainer, FormContainer, SaveButton} from './AppStyles'

import ProgressBar from './common/ProgressBar'
import toCsv from './lib/jsonToCsv';
import { saveAs } from 'file-saver';

function App({ source }) {
  const AppRef = useRef(true);
  const [validFields, setValidFields] = useState([]);
  const [fields, setFields] = useState([]);

  useEffect(() => {
    const handleFieldInput = ({ value, error, id }) => {
      let toSet = validFields;
      const [existing] = validFields.filter(field => field.id === id);

      if (existing) {
        if (!error) {
          toSet = validFields.map(field => {
            if (field.id === id) {
              field.value = value
            }

            return field
          })
        } else {
          toSet = validFields.filter(field => field.id !== id)
        }
      } else {
        toSet.push({ id, value })
      }

      setValidFields(toSet);
    }

    // Render fields once, prevent unnecessary rerender
    if (AppRef.current) {
      const populateDate = () => {
        const list = Array.isArray(source) ? source : [];
        return list.map((field, index) => {
          return <Field key={field.id} {...field} eventHandlers={{ onData: handleFieldInput }} />
        })
      }

      setFields(populateDate())
      AppRef.current = false;
    }
  }, [source, validFields])

  const progress = (validFields.length / source.length) * 100

  const handleSave = () => {
    if (progress < 100) return;

    const flatten = {}
    
    validFields.forEach(({id,value}) => {
      let _value = value;
      if (Array.isArray(value)) _value = value.join(',');

      flatten[id] = _value
    })

    const csv = toCsv([flatten])
    const filename = 'submissions'

    const fileToSave = new Blob([csv], {
      type: 'text/csv',
      name: filename,
    });

    saveAs(fileToSave, filename);
  }

  return (
    <AppContainer>
      <FormContainer>
        <ProgressBar progress={progress} />
        {fields}
        <SaveButton disabled={progress < 100} onClick={handleSave}>Save</SaveButton>
      </FormContainer>
    </AppContainer>
  );
}

App.defaultProps = {
  source: []
}

export default App;
