export default function NotFound() {
  return (
    <div className="flex flex-col items-center text-center justify-center h-[calc(100vh-70px)]">
      <svg
        className="text-red-500 w-24 h-24 mb-4"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
          fill="currentColor"
        />
      </svg>
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
