import Link from "next/link";



export default function Form() {
  return (
    <>
      <div className="flex flex-col  items-center justify-center  ">
        <div className="flex  flex-col justify-center p-6 lg:px-4 border-4 rounded-xl">
          <div className="text-3xl">Login</div>

          <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-2" action="#" method="POST">
              {/* <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input id="email" name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}

              <div className="bg-white p-4 rounded-lg">
                <div className="relative bg-inherit">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="peer bg-transparent h-10 w-64 rounded-lg  placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                    placeholder="Enter Email Address"
                  />
                  <label
                    htmlFor="username"
                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Email address
                  </label>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <div className="relative bg-inherit">
                  <input
                    type="password"
                    id="username"
                    name="username"
                    className="peer bg-transparent h-10 w-64 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                    placeholder="Enter Password"
                  />
                  <label
                    htmlFor="username"
                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Password
                  </label>
                </div>
              </div>



              {/* 
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}

              <div className="flex justify-between items-center flex-row px-4 mb-5">
                <Link href='/'>
                  <button
                    type="submit"
                    className="text-lg flex w-fit justify-center rounded-md bg-indigo-600 px-4 py-1.5  font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </Link>
                <div className="text-sm justify-end flex ">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="flex flow-col-2 gap-1 pt-3 ">
                <div className=" text-center">
                  Already have an not account?
                </div>
                <Link href={`/register`} className="text-blue-500">Register</Link>
              </div>
            </form>
          </div>
        </div>
      </div>




    </>
  );
}
