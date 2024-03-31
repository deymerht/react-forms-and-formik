import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components/MySelect';
import '../assets/styles/styles.css';
import { MyChecbox } from '../components/MyCheckbox';

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>FormikAbstraction</h1>
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
            jobType: Yup.string().notOneOf(['it-jr'], 'Esa opción no es permitida').required('Requerido')
          })
        }
      >
        {(formik) => (
          <Form>
            <MyTextInput label='First Name' name='firstName' placeholder='Deymer' />
            <MyTextInput label='Last Name' name='lastName' placeholder='Hernándnez' />
            <MyTextInput label='Email' name='email' placeholder='deymer@deymer.com' />

            <MySelect name='jobType' label='Job Type'>
              <option value=''>Pink someting</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>It Senior</option>
              <option value='it-jr'>It Jr</option>
            </MySelect>
            <MyChecbox label={'Terms & conditions'} name={'terms'} />
            <button type="submit">Create</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
