import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-ucsd-navy text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="#home" legacyBehavior>
            <a>My Portfolio</a>
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="#home" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="#about" legacyBehavior>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="#projects" legacyBehavior>
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="#research" legacyBehavior>
              <a>Research</a>
            </Link>
          </li>
          <li>
            <Link href="#interests" legacyBehavior>
              <a>Interests</a>
            </Link>
          </li>
          <li>
            <Link href="#contact" legacyBehavior>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
