import {   useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import UserOne from '../../../Assets/user.png';
import ArrowDownSVG from '../NavParts/ArrowDownSVG';
import NavName from '../NavParts/NavName';
import NavUserImage from '../NavParts/NavUserImage';
import PeopleSVG from './../NavParts/PeopleSVG';
import SettingSVG from '../NavParts/SettingSVG';
import LogoutSVG from '../NavParts/LogoutSVG';

const DropdownUser = () => {   
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const trigger = useRef(null);
    const dropdown = useRef(null);
  
    // Continue with the rest of your component logic
  
  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <NavName name="Nisharga Kabir" />  
        <NavUserImage imageLink={UserOne}/> 
        <ArrowDownSVG dropdownOpen={dropdownOpen}/>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-5 dark:border-strokedark z-20">
          <li>
            <Link
              to="/profile"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <PeopleSVG/>
              My Profile
            </Link>
          </li>  
          <li>
            <Link
              to="/settings"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <SettingSVG/>
              Account Settings
            </Link>
          </li>
        </ul>
        <button className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
          <LogoutSVG/>
          Log Out
        </button>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;
