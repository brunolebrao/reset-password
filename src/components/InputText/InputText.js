import React from 'react';
import { Input } from 'semantic-ui-react';
import { TextError } from '../TextError'

export const InputText = ({
  field,
  form: { touched, errors },
  ...props
}) => (
  <div>
    <Input error={touched[field.name]} {...field} {...props} />
    { touched[field.name] &&
      errors[field.name] && 
      <TextError error={errors[field.name]}/>
    }
  </div>
);

