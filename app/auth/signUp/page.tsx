import Link from "next/link";



export default function Register() {
  return (
    <div className="">
      <div className="shadow-sm border-2 rounded-xl  w-fit  p-6 h-fit">

        <div className="text-3xl font-bold">Create an account</div>


        <form className="max-w-sm mx-auto">
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
                Repeat Password
              </label>
            </div>
          </div>

          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
        </form>

        <div className="mt-4">

          Already have an account? <Link href={`/login`} className="text-blue-500">Login</Link>
        </div>

      </div>

    </div >
  )
}