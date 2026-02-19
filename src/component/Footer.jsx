import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h2 className="text-2xl font-bold">MyBrand</h2>
            <p className="mt-3 text-gray-400">
              Building modern and responsive websites for businesses.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <p className="text-gray-400">ocpaschal@gmail.com</p>
            <p className="text-gray-400">08012345678</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
          © 2026 MyBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
