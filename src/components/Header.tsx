import React from "react";

interface Props {}

const Header = ({}: Props) => {
  return (
    <header className="w-full px-[5%] flex justify-between items-center py-5 z-10 fixed top-0 left-0">
      <h3 className="text-2xl">Jaipoun</h3>
      <nav>
        <ul className="list-none flex items-center gap-10">
          <li>
            <a href="">Japan</a>
          </li>
          <li>
            <a href="">Attractions</a>
          </li>
          <li>
            <a href="">Events</a>
          </li>
          <li>
            <a href="">Restaurants</a>
          </li>
          <li>
            <a href="">Sign up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
