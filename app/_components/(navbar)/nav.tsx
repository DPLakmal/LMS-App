import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <div className="border-b-2 p-3 ">
      <div className="flex flex-row h-8 justify-between mx-10">
        <div className="relative w-64">
          <input
            type="search"
            className="block w-64 p-2 ps-4 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500    dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-0 py-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 p-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
        <Link href="/login">
          <Image
            width={40}
            height={40}
            className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src=""
            alt="Bordered avatar"
          />
        </Link>
      </div>
    </div>
  )
}
