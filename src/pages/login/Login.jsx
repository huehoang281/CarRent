import React from 'react';
import "./login.css";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email!")
    .required("Please enter your email"),
  password: yup
    .string()
    .min(6, "Password at least 6 characters")
    .required("Please enter your password"),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema),
  })

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data)
    navigate("/home")
  }
  return (
    <div className="login">
    <div className='container'>
    <div className="img-img">
        <img src="https://i.9mobi.vn/cf/Images/np/2022/11/11/anh-nen-dep-8.jpg"
          />
    </div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Log in</h2>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className={classNames("form-control", {
            "border border-danger": errors.email?.message,
          })} id="exampleInputEmail1" aria-describedby="emailHelp" name="email" {...register("email")} />
          {errors.email?.message && (
            <p className="text-danger">{errors.email?.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className={classNames("form-control", {
            "border border-danger": errors.password?.message,
          })} id="exampleInputPassword1" name="password" {...register("password")} />
          {errors.password?.message && (
            <p className="text-danger">{errors.password?.message}</p>
          )}
        </div>

        
        <div className="buttom">
        <button type="submit" className="  btn btn-danger submit-color">Login</button>
        <Link to="/register"><button type="submit" className="btn btn-info button-sigup">Sign Up</button></Link>

        </div>
      </form>

    </div>
    </div>
  )
}
