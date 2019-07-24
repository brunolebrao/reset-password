import React from 'react';
import { withFormik, Field } from 'formik';
import {Grid, Button, Form} from 'semantic-ui-react';
import { InputText } from '../InputText'
import { validationSchema } from './validationForm';
  
  const ResetPassword = props => {
    const {
      handleSubmit,
    } = props;
    return (
      <Form onSubmit={handleSubmit}>
        <Grid columns={4} textAlign='center'>
          <Grid.Row>
            <Grid.Column textAlign='left'>
              <Form.Field>
                <label>Senha atual</label>
                <Field 
                  fluid 
                  name="oldPassword"
                  type='password'
                  component={InputText} 
                  placeholder='Insira sua senha antiga'/>
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign='left'>
              <Form.Field>
                <label>Nova senha</label>
                <Field 
                  fluid 
                  name="newPassword"
                  type='password'
                  component={InputText} 
                  placeholder='Insira sua nova senha'/>
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>  
            <Grid.Column textAlign='left'>
              <Form.Field>
                <label>Confirme a nova senha</label>
                <Field 
                  fluid 
                  name="passwordConfirmation"
                  type='password'
                  component={InputText} 
                  placeholder='Confirme sua nova senha'/>
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button type="submit">Alterar Senha</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    );
  };
  
  const MyEnhancedForm = withFormik({
    mapPropsToValues: () => ({ oldPassword: '', newPassword: '', passwordConfirmation: '' }),
    validationSchema,
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
  })
  
  export default MyEnhancedForm (ResetPassword);