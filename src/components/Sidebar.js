import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className='flex flex-col w-48 p-5 shadow-lg'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="shorts">Shorts</Link></li>
        <li>Videos</li>
        <li>Live</li>
        <li>
          <Link to="history">
            <FontAwesomeIcon icon={faHistory} className="mr-2" />History
          </Link>
        </li>
      </ul>
      
      <h1 className='text-2xl font-bold'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className='text-2xl font-bold pt-7'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
