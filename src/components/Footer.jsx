import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white shadow-md mt-10 px-6 py-4 rounded-xl">
      
      <div className="flex justify-between items-center flex-wrap gap-3">

        {/* Left side */}
        <p className="text-gray-500 text-sm">
          © 2026 Finance Dashboard. All rights reserved.
        </p>

        {/* Right side links */}
        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-orange-500 transition">
            Privacy
          </a>

          <a href="#" className="hover:text-orange-500 transition">
            Terms
          </a>

          <a href="#" className="hover:text-orange-500 transition">
            Support
          </a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;