import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import logo from '../assets/cura-pet-logo.png';

const Register = () => {
  const formik = useFormik({
    initialValues: { name: '', mobile: '', password: '', confirmPassword: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      mobile: Yup.string().matches(/^\d{10}$/, 'Must be 10 digits').required('Required'),
      password: Yup.string().min(6, 'Min 6 char').required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Required'),
    }),
    onSubmit: async values => {
      const { confirmPassword, ...payload } = values;
      const res = await fetch('http://localhost:5050/api/auth/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) alert(data.message || 'Registration failed');
      else alert('Registered!');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <img src={logo} alt="Logo"/>
      <input name="name" {...formik.getFieldProps('name')} placeholder="Name"/>
      {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
      <input name="mobile" {...formik.getFieldProps('mobile')} placeholder="Mobile"/>
      {formik.touched.mobile && formik.errors.mobile && <div>{formik.errors.mobile}</div>}
      <input type="password" name="password" {...formik.getFieldProps('password')} placeholder="Password" />
      {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}
      <input type="password" name="confirmPassword" {...formik.getFieldProps('confirmPassword')} placeholder="Confirm Password" />
      {formik.touched.confirmPassword && formik.errors.confirmPassword && <div>{formik.errors.confirmPassword}</div>}
      <button type="submit">Register</button>
      <Link to="/login">Login</Link>
    </form>
  );
};

export default Register;
