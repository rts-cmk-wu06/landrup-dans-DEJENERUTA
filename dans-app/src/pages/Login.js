import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import img from "../assets/splash-image.jpg";
import { userContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = ({ redirectPathAfterLogin }) => {
  const navigate = useNavigate();
  const { setUserData } = useContext(userContext);

  const schema = yup.object({
    brugernavn: yup.string().required("brugernavn er påvirker"),
    adgangskode: yup
      .string()
      .required("adgangskode er påvirker")
      .min(4, "adgangskode skal være på mindst 4 tegn")
      .max(20, "adgangskode må højst være på 20 tegn"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    fetch("http://localhost:4000/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.brugernavn,
        password: data.adgangskode,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        navigate(redirectPathAfterLogin || "/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="skew absolute inset-0 bg-gray origin-center rotate-45 max-h-80 opacity-1"></div>
      <h1 className="absolute bottom-1/2 pl-16 text-white font-bold text-2xl mb-2">
        Log ind
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <div className="absolute top-1/2 left-0 w-full h-full gap-4 m-auto column justify-center items-center text-center ">
          {errors.brugernavn?.message}
          <input
            type="text"
            placeholder="brugernavn"
            className="bg-white w-64 h-12 mt-4 placeholder:p-6 border-none outline-none"
            {...register("brugernavn")}
          />
          {errors.adgangskode?.message}
          <input
            type="password"
            placeholder="adgangskode"
            className="bg-white  w-64 h-12  mt-4 placeholder:p-6 border-none outline-none"
            {...register("adgangskode")}
          />
        </div>

        <button className="absolute bottom-28 w-48 m-auto mt-4 rounded-xl h-12 flex justify-center p-6 items-center text-center right-0 left-0 text-white text-xl pb-8 bg-purple">
          Log ind
        </button>
      </form>
    </div>
  );
};

export default Login;
