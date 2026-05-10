

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-darker py-8 border-t border-glassBorder mt-20 relative z-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400 font-mono text-sm">
          &copy; {currentYear} Mazen Ayman. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs mt-2 font-mono">
          Designed with <span className="text-primary">&hearts;</span> & built with React & Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
