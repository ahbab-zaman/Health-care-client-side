import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggler = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <label className="flex items-center cursor-pointer space-x-3">
      <input
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        className="sr-only"
      />
      <div
        className={`w-14 h-8 flex items-center rounded-full p-1 duration-300 ${
          darkMode ? "bg-gray-700" : "bg-yellow-400"
        }`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ${
            darkMode ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </div>
      {darkMode ? (
        <FaMoon className="text-blue-300 text-xl" />
      ) : (
        <FaSun className="text-yellow-500 text-xl" />
      )}
    </label>
  );
};

export default ThemeToggler;
