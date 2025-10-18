import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-4xl mx-auto px-6 py-8 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm">
              © {currentYear} Gautham Kishore. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Built with React, Vite, and Tailwind CSS
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:gauthk6@gmail.com"
              className="text-sm hover:text-primary-400 transition-colors duration-200"
            >
              Email
            </a>
            <a
              href="https://github.com/gauthk6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-primary-400 transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gauthk6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-primary-400 transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://scholar.google.com/citations?user=H1P1W_cAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-primary-400 transition-colors duration-200"
            >
              Scholar
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
