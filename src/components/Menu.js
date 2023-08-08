import React from "react";
import Link from "next/link";

export const Menu = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/">
              <p className="nav-link">Home</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/speakers">
              <p className="nav-link">Speakers</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
