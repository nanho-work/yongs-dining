export default function Footer() {
  return (
    <footer className="w-full h-20 bg-white flex items-center justify-center text-sm text-gray-500 px-4">
      ⓒ {new Date().getFullYear()} Yongs Dining. Website by{" "}
      <a
        href="https://laoncode.com"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-1 underline hover:text-gray-700 font-medium"
      >
        LaonCode
      </a>
    </footer>
  );
}