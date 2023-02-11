
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars } from '@fortawesome/free-solid-svg-icons'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button
        className="dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
       
        <FontAwesomeIcon  icon={ faBars} />
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          Add dropdown content here
        </div>
      )}
    </div>
  );
};

export default Dropdown;