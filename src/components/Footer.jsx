import Logo from "./Logo.jsx";

function Footer() {
  return (
    <footer className="bg-white border-t mt-12 py-8 text-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Brand/Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <Logo />
        </div>
        {/* Links */}
        <nav className="flex flex-wrap gap-6 text-sm">
          <a href="#" className="hover:text-black transition-colors">About</a>
          <a href="#" className="hover:text-black transition-colors">Contact</a>
          <a href="#" className="hover:text-black transition-colors">Support</a>
          <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
        </nav>
      </div>
      <div className="container mx-auto text-center text-xs text-gray-400 mt-4">
        &copy; {new Date().getFullYear()} Amen&amp;Louay FASHION. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;
