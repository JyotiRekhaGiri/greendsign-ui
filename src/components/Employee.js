import React, { useState } from 'react';
import employeeData from './employee.json';
import './Employee.css';
import './Dashboard.css';
import { FaUser, FaHome } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo2 from "../images/moptrologo@2x.png";
import Userlogo from "../images/Group46.png";

const Employee = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const links = [
    { id:1, link:"/dashboard", icon: <FaHome/>},
    { id:2, link:"/employee", icon: <FaUser/>}
  ];

  const filteredEmployees = employeeData.filter((employee) => {
    const { NAME, ROLL, DOB } = employee;
    const searchString = `${NAME.toLowerCase()} ${ROLL.toLowerCase()} ${DOB}`;
    return searchString.includes(searchTerm.toLowerCase());
  });

  return (
    <div className='container d-flex justify-content-center align-item-center'>
      <div style={{display: "flex"}}>
        <img src={Userlogo} alt='user'/>
      </div>
      <div style={{margin: "1rem"}}>
        <img src={logo2} alt='logo2'/>
      </div>
      <div className="search-container-one">
        <input
          type="text"
          placeholder="Search with name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <div className="employee-container">
        {filteredEmployees.map((employee) => (
          <div className="card employee-card" key={employee['EMP ID']}>
            <h2>{employee.NAME}</h2>
            <p>Employee ID: {employee['EMP ID']}</p>
            <p>Date of Birth: <span style={{color:'orange'}}>{employee.DOB}</span></p>
            <p>Role:<span style={{color:'#36A546'}}> {employee.ROLL}</span></p>
          </div>
        ))}
      </div>
      <div className='d-flex justify-content-center align-item-center'>
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
  );
};

export default Employee;
