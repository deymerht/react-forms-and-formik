import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.tsx'
// import { RegisterPage } from './pages/RegisterPage.tsx';

// import { FormikYupPage } from './pages/FormikYupPage';
// import { FormikBasicPage } from './pages/FormikBasicPage';
// import { FormikComponents } from './pages/FormikComponent';
// import { FormikAbstraction } from './pages/FormikAbstraction';
// import { RegisterFormikPage } from './pages/RegisterFormikPage';
import { DynamicForm } from './pages/DynamicForm';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <RegisterPage /> */}
    {/* <FormikBasicPage /> */}
    {/* <FormikYupPage /> */}
    {/* <FormikComponents /> */}
    {/* <FormikAbstraction /> */}
    {/* <RegisterFormikPage /> */}
    <DynamicForm />
  </React.StrictMode>,
)
