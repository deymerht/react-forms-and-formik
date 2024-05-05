import { Form, Formik, FormikHelpers, FormikValues } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components/MyTextInput';
import '../assets/styles/styles.css';

export const RegisterFormikPage = () => {

  return (
    <div>
      <h2>Register formik page</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          repeatPassword: ''
        }}
        onSubmit={(values, formikHelpers: FormikHelpers<FormikValues>): void | Promise<any> => {
          console.log(values);
          console.log(formikHelpers);
        }}
        validationSchema={
          Yup.object({
            name: Yup.string()
              .max(15, 'Debe tener maximo 15 caracteres.')
              .required('El nombre es requerido')
              .min(2, 'Debe tener minimo dos caracteres'),
            email: Yup.string()
              .email('El correo no es válido')
              .required('El correo es requerido'),
            password: Yup.string()
              .min(8, 'Password must be 8 characters long')
              .matches(/[0-9]/, 'Password requires a number')
              .matches(/[a-z]/, 'Password requires a lowercase letter')
              .matches(/[A-Z]/, 'Password requires an uppercase letter')
              .matches(/[^\w]/, 'Password requires a symbol'),
            repeatPassword: Yup.string()
              .required('Este campo es requerido')
              .oneOf([Yup.ref('password'), ''], 'Must match "password" field value'),
          })
        }
      >
        {
          ({ isValid, handleReset }) => (
            <Form>
              <MyTextInput label='Name' name='name' placeholder='Deymer' />
              <MyTextInput type='email' label='Email' name='email' placeholder='Email' />
              <MyTextInput type='password' label='Password' name='password' placeholder='********' />
              <MyTextInput type='password' label='Repeat password' name='repeatPassword' placeholder='********' />
              <button disabled={!isValid} type="submit">Create</button>
              <button type='button' onClick={handleReset}>Reset</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}
