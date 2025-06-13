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
        .matches(/^\d{10}$/, 'Mobile number must be 10 digits')
        .required('Mobile number is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async values => {
      try {
        const res = await fetch('http://localhost:5050/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            mobile: values.mobile,
            password: values.password,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          alert(data.message || 'Login failed');
        } else {
          // // Save token in localStorage
          // localStorage.setItem('token', data.token);
          // alert('Login successful!');
          // navigate('/dashboard');
        }
      } catch (err) {
        alert('Error: ' + err.message);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Logo" className="w-20" />
          <h2 className="text-2xl font-semibold mt-4 text-teal-600">Login to Cura Pet</h2>
        </div>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            {...formik.getFieldProps('mobile')}
            className={`w-full px-4 py-2 border rounded ${
              formik.touched.mobile && formik.errors.mobile ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {formik.touched.mobile && formik.errors.mobile && (
            <div className="text-red-500 text-sm">{formik.errors.mobile}</div>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            {...formik.getFieldProps('password')}
            className={`w-full px-4 py-2 border rounded ${
              formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}

          <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition">
            Login
          </button>

          <p className="text-sm mt-2 text-center">
            Don’t have an account?{' '}
            <Link to="/" className="text-teal-600 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
