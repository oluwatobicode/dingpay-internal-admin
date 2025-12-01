import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface UniqueCode {
  password: string;
}

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<UniqueCode>();

  const onSubmit: SubmitHandler<UniqueCode> = (data) => {
    console.log("Form Data:", data);
    navigate("/home");
  };

  return (
    <div className="max-w-[401px] w-full flex flex-col bg-white items-center justify-center h-[502px] rounded-xl border border-[#EFEFEF]">
      <div className="flex items-center justify-center mb-12">
        <img src="/Logo.svg" alt="TicketsByDingpay" />
      </div>

      <div className="text-center mb-12">
        <h1 className="text-[32px] leading-7 font-semibold text-[#1E1E1E] mb-2">
          Welcome back!
        </h1>
        <p className="text-[16px] text-[#6C7788] tracking-normal leading-7 font-regular">
          Continue with the unique code
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-[353px]">
        <div className="flex flex-col mb-12">
          <label
            htmlFor="password"
            className="text-[14px] font-regular leading-4 tracking-normal mb-2 text-[#1E1E1E]"
          >
            Unique code <span className="text-red-600">*</span>
          </label>

          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className={`w-full h-12 text-[14px] rounded-lg border px-4 font-regular leading-4 tracking-normal outline-none focus:ring-2 focus:ring-blue-100 transition-all
                ${errors.password ? "border-red-500" : "border-[#D4DAE3]"}
              `}
              placeholder="Enter your password here"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Code must be at least 6 characters",
                },
              })}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {errors.password && (
            <span className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </span>
          )}

          <div className="text-right mt-3">
            <button className="text-[#1884F6] cursor-pointer font-regular text-[14px] leading-4 tracking-normal">
              Forgot Code?
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full h-12 cursor-pointer rounded-lg transition-colors font-semibold text-[14px] leading-4 tracking-normal
            ${
              isSubmitting
                ? "bg-gray-200 text-black cursor-not-allowed"
                : "bg-[#D4DAE3] text-[#A0A7B4] hover:bg-gray-300"
            }
          `}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
