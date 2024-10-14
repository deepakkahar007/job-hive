import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="my-4 text-3xl">Login</h1>
      <div className="mt-10 flex w-full flex-col rounded-lg bg-gray-800 bg-opacity-50 p-8 md:mt-0 md:w-1/2 lg:w-2/6">
        <h2 className="title-font mb-5 text-lg font-medium text-white">
          Sign Up
        </h2>
        <div className="relative mb-4">
          <label className="text-sm leading-7 text-gray-400">Email</label>
          <input
            type="email"
            name="email"
            className="w-full rounded border border-gray-600 bg-gray-600 bg-opacity-20 px-3 py-1 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-900"
          />
        </div>
        <div className="relative mb-4">
          <label className="text-sm leading-7 text-gray-400">Password</label>
          <input
            type="password"
            name="password"
            className="w-full rounded border border-gray-600 bg-gray-600 bg-opacity-20 px-3 py-1 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-900"
          />
        </div>
        <Button className="rounded border-0 bg-primary px-8 py-2 text-lg text-white hover:bg-blue-600 focus:outline-none">
          Log in
        </Button>
      </div>
    </div>
  );
};

export default Login;
