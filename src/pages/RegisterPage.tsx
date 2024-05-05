import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

import '../assets/styles/styles.css';

export const RegisterPage = () => {

  const { formData, name, email, password, repeatPassword, onChange, resetForm, isValidEmail } = useForm({
    name: '',
    email: 'deymerh@hotmail.com',
    password: '123456',
    repeatPassword: '123456'
  });

  const saveDataForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ formData });
  }

  return (
    <div>
      <h1>Register page</h1>
      <form noValidate onSubmit={saveDataForm}>
        <input
          name='name'
          onChange={onChange}
          value={name}
          type="text"
          placeholder="Name"
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>Es nombre es necesario</span>}
        <input
          name='email'
          onChange={onChange}
          value={email}
          type="email"
          placeholder="Email"
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>El email no es válido</span>}
        <input
          name='password'
          onChange={onChange}
          value={password}
          type="password"
          placeholder="Password"
        />
        <input
          name='repeatPassword'
          onChange={onChange}
          value={repeatPassword}
          type="password"
          placeholder="Repeat password"
        />
        <button type="submit">Create</button>
        <button type='button' onClick={resetForm}>Reset</button>
      </form>
    </div>
  )
}
