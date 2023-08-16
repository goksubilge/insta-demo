import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const reqSendSubmit = (data) => {
    // request => https://wit-courses.onrender.com/login
    axios
      .post("https://wit-courses.onrender.com/login", data)
      .then((response) => {
        localStorage.setItem("insta", response.data.token);
        toast.success("Giriş başarılı", { autoClose: 1000 });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="max-w-[280px] mx-auto">
      <h1
        /* onClick={() => toast.success("Giriş başarısı", { autoClose: 1000 })} */ // bu click test yalnızca, axiostakinden bağımsız
        className="flex  align-middle justify-center text-3xl font-bold text-stone-500"
      >
        Gir artık !
      </h1>
      <form onSubmit={handleSubmit(reqSendSubmit)}>
        <label className="flex flex-col gap-2 py-2">
          <span className="flex justify-between items-baseline">
            E-Mail
            {errors.email && (
              <span className="text-red-500 text-xs ">
                *Warning! This field is required
              </span>
            )}
          </span>
          <input
            className=" p-2 round rounded-lg boorder border-red-600  "
            placeholder="mailini gir"
            type="email"
            {...register("email", { required: true })}
          />
        </label>
        <label className="flex flex-col gap-2 py-2">
          <span className="flex justify-between items-baseline">
            Şifre
            {errors.password && (
              <span className="text-red-500 text-xs ">
                *Warning! This field is required
              </span>
            )}
          </span>
          <input
            className=" p-2 round rounded-lg "
            placeholder="kodunu gir"
            type="password"
            {...register("password", { required: true })}
          />
        </label>
        <div className=" text-center gap-2 py-2  ">
          <button
            type="submit"
            className="bg-pink-700 rounded-lg flex-[2] p-2 text-white "
          >
            Buradan girebilirsin !
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
