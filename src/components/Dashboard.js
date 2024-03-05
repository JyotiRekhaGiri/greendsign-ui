import React, { useState } from 'react';
import './Dashboard.css';
import { FaUser, FaHome } from 'react-icons/fa';
import logo2 from "../images/moptrologo@2x.png";
import Userlogo from "../images/Group46.png";

const Dashboard = () => {
  const [searchProductivity, setSearchProductivity] = useState('');

  const handleSearchChange = (event) => {
    setSearchProductivity(event.target.value);
  };

  const links = [
    { id:1, link:"/dashboard", icon: <FaHome/>},
    { id:2, link:"/employee", icon: <FaUser/>}
  ];

  const productivityData = [
    { day: 'Monday', productivity: "4%" },
    { day: 'Tuesday', productivity: "92%" },
    { day: 'Wednesday', productivity: "122%" },
    { day: 'Thursday', productivity: "93%" },
    { day: 'Friday', productivity: "89%" },
    { day: 'Saturday', productivity: "98%" },
  ];

  const filteredProductivity = productivityData.filter((item) => {
    return item.day.toLowerCase().includes(searchProductivity.toLowerCase());
  });

  return (
    <div className='container d-flex justify-content-center align-item-center'>
      <div style={{display: "flex"}}>
        <img src={Userlogo} alt='user'/>
      </div>
      <div style={{margin: "1rem"}}>
        <img src={logo2} alt='logo2'/>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Employee Productivity Dashboard"
          value={searchProductivity}
          onChange={handleSearchChange}
        />
      
      <div className="productivity-container">
        {filteredProductivity.map((item, index) => (
          <div className="productivity-item" key={index}>
            <div style={{justifyContent: "space-between"}}className='productivity-info'>
            <p>Productivity on {item.day}</p>
            <p style={{color: "#36A546"}}>{item.productivity}</p>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${item.productivity}%` }}></div>
            </div>
          </div>
        ))}
      </div>
      <div className='navigation'>
      {window.innerWidth <= 986 && (
        <ul className="navigation-links">
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.link} className='icon'>{link.icon}</a>
            </li>
          ))}
        </ul>
      )}
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
