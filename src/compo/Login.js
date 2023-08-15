import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const Login = () => {
  return (
    <div className="max-w[480px]">
      <h1 className="flex  align-middle justify-center text-3xl font-bold text-red-700">
        Gir artık !
      </h1>
      <form>
        <label className="flex flex-col gap-2 py-2">
          <span>E-Mail</span>
          <input
            className="flex-[2] p-2 round rounded-lg boorder border-red-600  "
            placeholder="mailini gir"
            type="e-mail"
          />
        </label>
        <label className="flex flex-col gap-2 py-2">
          <span>Şifre</span>
          <input
            className="flex-[2] p-2 round rounded-lg "
            placeholder="kodunu gir"
            type="password"
          />
        </label>
        <label className="flex flex-col gap-2 py-2  ">
          <button
            type="submit"
            className="bg-pink-700 rounded-lg flex-[2] p-2 text-white "
          >
            Buradan girebilirsin !
          </button>
        </label>
      </form>
    </div>
  );
};

export default Login;
