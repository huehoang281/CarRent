import React from 'react';
import "./register.css";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

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

export default function Register() {
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
    navigate("/")
  }
  return (
    <div className="login">
    <div className='container'>
    <div className="img-imgsinup">
        <img src="https://media.muanhatructuyen.vn/post/221/27/3/hinh-nen-canh-dong-co-voi-dom-dom.jpg" />
    </div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="singup-btn" ><h2>Sign Up</h2></div>

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

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Repeat your password</label>
          <input type="password" className={classNames("form-control", {
            "border border-danger": errors.password?.message,
          })} id="exampleInputPassword1" name="password" {...register("password")} />
          {errors.password?.message && (
            <p className="text-danger">{errors.password?.message}</p>
          )}
        </div>
        <div className="buttom">
      
        <button type="submit" className="  btn btn-info ">Sign up</button>
        <div> <p>Have already an account? <a href="/">Login here</a> </p>
        </div>

        </div>
      </form>

    </div>
    </div>
  )
}

