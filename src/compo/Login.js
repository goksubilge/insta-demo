import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="max-w-[280px] mx-auto">
      <h1 className="flex  align-middle justify-center text-3xl font-bold text-stone-500">
        Gir artık !
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="flex flex-col gap-2 py-2">
          <span className="flex justify-between items-baseline">
            E-Mail
            {errors.email && (
              <span className="text-red-500 text-xs ">
                {" "}
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
                {" "}
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
