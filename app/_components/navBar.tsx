export default function NavBar() {
  return (
    <div className="md:ml-64 p-6 border-b  flex items-center justify-between">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="md:hidden"
      >
        <line x1="21" x2="3" y1="6" y2="6"></line>
        <line x1="15" x2="3" y1="12" y2="12"></line>
        <line x1="17" x2="3" y1="18" y2="18"></line>
      </svg>
      <div className="flex gap-3 text-[14px] items-center border p-2 rounded-md bg-gray-50 text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-search"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
        <input
          placeholder="Search Course"
          className="bg-transparent outline-none"
          type="text"
        />
      </div>
      <button>Login</button>
    </div>
  );
}
