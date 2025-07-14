import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/cura-pet-logo.png';

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      mobile: '',
      password: '',
    },
    validationSchema: Yup.object({
      mobile: Yup.string()
        .matches(/^\d{10}$/, 'Must be 10 digits')
        .required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async values => {
      const res = await fetch('http://localhost:5050/api/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        alert(data.message || 'Login failed');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <img src={logo} alt="Logo" />
      <input name="mobile" {...formik.getFieldProps('mobile')} placeholder="Mobile"/>
      {formik.touched.mobile && formik.errors.mobile && <div>{formik.errors.mobile}</div>}
      <input type="password" name="password" {...formik.getFieldProps('password')} placeholder="Password" />
      {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}
      <button type="submit">Login</button>
      <Link to="/register">Register</Link>
    </form>
  );
};

export default Login;
