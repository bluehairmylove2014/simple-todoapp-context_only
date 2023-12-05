"use client";

import { useNotification } from "../atoms/Notification";
import CustomButton from "../atoms/CustomButton";

function LoginForm() {
  const { showSuccess, showError, showReactHookFormError } = useNotification();

  return (
    <form className="py-8 px-5 max-w-full overflow-hidden" noValidate>
      <div className="leading-4 mb-8">
        <p className="text-center font-extrabold">Welcome to</p>
        <h4 className="text-center font-extrabold">DATDEPTRAI APPLICATION</h4>
      </div>
      <div className="mb-3 w-full h-fit grid grid-rows-2 gap-4">
        <div className="relative bg-zinc-100 rounded shadow-lg h-10 w-full">
          <label
            className="text-xs absolute top-1/2 left-5 -translate-y-1/2 font-semibold opacity-50 flex flex-row items-center justify-start"
            htmlFor={"email"}
          >
            <i className="fi fi-rr-envelope pr-2"></i>
          </label>
          <input
            className="text-xs border-none outline-none bg-transparent px-10 w-full h-full"
            type="email"
            id="email"
            autoComplete="off"
            placeholder="Email"
          />
        </div>
        <div className="relative bg-zinc-100 rounded shadow-lg h-10 w-full">
          <label
            className="text-xs absolute top-1/2 left-5 -translate-y-1/2 font-semibold opacity-50 flex flex-row items-center justify-start"
            htmlFor={"password"}
          >
            <i className="fi fi-rr-envelope pr-2"></i>
          </label>
          <input
            className="text-xs border-none outline-none bg-transparent px-10 w-full h-full"
            type="password"
            id="password"
            autoComplete="off"
            placeholder="Password"
          />
        </div>
      </div>
      <CustomButton style="fill-primary" type="submit">
        Sign in
      </CustomButton>
    </form>
  );
}

export default LoginForm;
