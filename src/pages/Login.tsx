import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  return (
    <main className="bg-[#FAFAFA] flex flex-col items-center min-h-screen justify-center">
      <LoginForm />
      <div className="mt-6">
        <p className="font-regular leading-[24px] tracking-normal text-[16px] text-[#6C7788]">
          INTERNAL ADMIN PORTAL
        </p>
      </div>
    </main>
  );
};

export default Login;
