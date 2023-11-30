import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const SearchButton = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  return (
    <div className="search-container">
      <button className="search-button" onClick={toggleSearch}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon'/>
      </button>
      {isSearchVisible && (
        <div className="search-bar" ref={searchRef}>
          <input type="text" placeholder="Search..." className='search-input'/>
        </div>
      )}
    </div>
  );
};

export default SearchButton;
