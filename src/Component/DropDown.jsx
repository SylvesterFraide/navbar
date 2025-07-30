import React from 'react'
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import './DropDown.css'


const DropDown = () => {
  return (
    <div className="dropdown">
      <ul className="dropdown-menu">
        {MenuItems.map((item, index) => (
          <li key={index} className={item.cname}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
  )
}

export default DropDown;