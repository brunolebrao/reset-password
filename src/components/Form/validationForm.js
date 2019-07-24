import * as Yup from 'yup'

export const validationSchema =  Yup.object({
  oldPassword: Yup.string().required('Senha atual é obrigatório'),
  newPassword: Yup.string().required('Nova senha é obrigatório'),
  passwordConfirmation: Yup.string()
     .oneOf([Yup.ref('newPassword'), null], 'Senha nova não corresponde')


  })