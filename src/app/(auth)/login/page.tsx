import { login } from "./actions";

export default function LoginPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  console.log(searchParams);
  return (
    <div className="h-[calc(100vh-200px)] flex flex-col items-center justify-center">
        {searchParams?.error === "login-failed" && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <strong className="font-bold">Login failed!</strong>
            <span className="block sm:inline">
              {" "}
              Please check your email and password.
            </span>
          </div>
        )}
      <form className="flex flex-col items-center mt-4">
        <div className="mb-4 flex flex-col">
          <label htmlFor="email" className="text-gray-800">
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="border-2 w-[300px] border-gray-500 rounded-md px-3 py-1"
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="password" className="text-gray-800">
            Password:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="border-2 w-[300px] border-gray-500 rounded-md px-3 py-1"
          />
        </div>
        <button
          formAction={login}
          className="bg-gray-500 w-[300px] hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Log in
        </button>
      </form>
    </div>
  );
}
