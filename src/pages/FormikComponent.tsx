import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../assets/styles/styles.css';

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik components</h1>
      <Formik initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        terms: false,
        jobType: ''
      }}
        onSubmit={(values) => { console.log(values) }}
        validationSchema={
          Yup.object({
            firstName: Yup.string().max(15, 'Debe tener maximo 15 caracteres.').required('Requerido'),
            lastName: Yup.string().max(10, 'Debe tener  maximo 10 caracteres.').required('Requerido'),
            email: Yup.string().email('El correo no es válido').required('El correo es requerido'),
            terms: Yup.boolean().oneOf([true], 'Debe aceptar las condiciones'),
            jobType: Yup.string().notOneOf(['it-jr'], 'Valor no permitido').required('Requerido')
          })
        }
      >
        {(formik) => (
          <Form noValidate>
            <label htmlFor="firstName">First Name</label>
            <Field name='firstName' type='text' />
            <ErrorMessage name='firstName' component='span' />
            <label htmlFor="lastName">Last Name</label>
            <Field name='lastName' type='text' />
            <ErrorMessage name='lastName' component='span' />
            <label htmlFor="email">Email</label>
            <Field name='email' type='email' />
            <ErrorMessage name='email' component='span' />

            <label htmlFor="jobType">Job Type</label>
            <Field name='jobType' as='select' >
              <option value=''>Pink someting</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>It Senior</option>
              <option value='it-jr'>It Jr</option>
            </Field>
            <ErrorMessage name='jobType' component='span' />

            <label>
              <Field name='terms' type='checkbox' />
              Terms and conditions
            </label>
            <ErrorMessage name='terms' component='span' />
            <button type="submit">Create</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
