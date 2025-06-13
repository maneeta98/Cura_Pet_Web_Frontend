import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/cura-pet-logo.png';

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      mobile: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      mobile: Yup.string()
        .matches(/^\d{10}$/, 'Enter a valid 10-digit mobile number')
        .required('Mobile is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: async values => {
      try {
        const res = await fetch('http://localhost:5050/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: values.name,
            mobile: values.mobile,
            password: values.password,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          alert(data.message || 'Registration failed');
        } else {
          alert('Registration Successful!');
          navigate('/login'); // redirect to login page
        }
      } catch (err) {
        alert('Error: ' + err.message);
      }
    },
  });

  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-teal-100 flex flex-col items-center justify-center p-10">
        <img src={logo} alt="Cura Pet Logo" className="w-32 mb-6" />
        <h1 className="text-3xl font-bold text-teal-800">Welcome to Cura Pet</h1>
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-white flex items-center justify-center p-10">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-teal-700">Create Account</h2>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              {...formik.getFieldProps('name')}
              className={`w-full px-4 py-2 border rounded ${
                formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            )}

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

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              {...formik.getFieldProps('confirmPassword')}
              className={`w-full px-4 py-2 border rounded ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
            )}

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition"
            >
              Register
            </button>

            <p className="text-sm mt-2">
              Already have an account?{' '}
              <Link to="/login" className="text-teal-600 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
