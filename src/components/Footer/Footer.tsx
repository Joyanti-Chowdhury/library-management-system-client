

// import logo from "../../assets/logo.jpg";

const Footer = () => {
  return (
   <footer className="bg-blue-950 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {/* Branding */}
          <div>
            <h2 className="text-xl font-bold mb-2">📘 LibrarySys</h2>
            <p className="text-gray-400">
              Manage your books, members, and lending records with ease. A digital solution for modern libraries.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:underline">Dashboard</a></li>
              <li><a href="/books" className="hover:underline">Books</a></li>
              <li><a href="/members" className="hover:underline">Members</a></li>
              <li><a href="/categories" className="hover:underline">Categories</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/faq" className="hover:underline">FAQs</a></li>
              <li><a href="/support" className="hover:underline">Support</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-gray-300">Email: support@librarysys.com</p>
            <p className="text-gray-300">Phone: +123 456 7890</p>
            <p className="text-gray-300">Address: 123 Book Lane, Knowledge City</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} LibrarySys. All rights reserved.
        </div>
      </div>
    </footer>
  );
}



;

export default Footer;
