import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../assets/styles/styles.css';

export const FormikYumPage = () => {

  const { errors, touched, handleSubmit, getFieldProps } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'Debe tener maximo 15 caracteres.').required('Requerido'),
      lastName: Yup.string().max(10, 'Debe tener  maximo 10 caracteres.').required('Requerido'),
      email: Yup.string().email('El correo no es válido').required('El correo es requerido')
    })
  });
  return (
    <div>
      <h1>Register Yup page</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          placeholder="Firs name"
          {...getFieldProps('firstName')}
        />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          placeholder="last name"
          {...getFieldProps('lastName')}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          {...getFieldProps('email')}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type="submit">Create</button>
      </form>
    </div>
  )
}
