import { Form, Formik } from 'formik';
import formJson from '../data/custom-form.json';
import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components/MySelect';
import * as Yup from 'yup';
import '../assets/styles/styles.css';

const initialValues: { [key: string]: any } = {};
const fieldsWithRequired: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('This is field is required');
    }

    if (rule.type === 'minLength') {
      schema = schema.min((rule as any).value ?? 2, `Minimo ${rule.value ?? 2} caracteres`);
    }

    if (rule.type === 'email') {
      schema = schema.email(`The email is required`);
    }
  }
  fieldsWithRequired[input.name] = schema;
}

const validationSchema = Yup.object({ ...fieldsWithRequired });

export const DynamicForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      {
        ({ isValid, handleReset }) => (
          <Form noValidate>
            <h2>Dynamic form</h2>
            {
              formJson.map(({ label, name, placeholder, type, options }) => {
                if (type === 'select') {
                  return (
                    <MySelect
                      key={name}
                      label={label}
                      name={name}
                    >
                      <option value="">Select an option</option>
                      {options?.map((option) => (<option key={option.id} value={option.id} >{option.label}</option>))}
                    </MySelect>
                  )
                }
                return (
                  <MyTextInput
                    key={name}
                    label={label}
                    name={name}
                    type={(type as any)}
                    placeholder={placeholder}
                  />
                )
              })
            }
            <button disabled={!isValid} type="submit">Create</button>
            <button type="button" onClick={handleReset} >Reset form</button>
          </Form>
        )
      }
    </Formik>
  )
}
