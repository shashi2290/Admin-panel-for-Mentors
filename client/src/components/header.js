import axios from 'axios';
import React, { useState } from 'react';
import './header.css'

function Header() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const [form, setForm] = useState({
    fullName:"Enter Name", 
    age: "Enter Age",
    email:"Enter Email",
    currentProfile:"Enter Profile",
    company:"Enter company",
    phone: "Enter Contact No." 
});

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const addMentor = (e) => {
      e.preventDefault();
      axios.post('http://localhost:5000/mentor', form);
      setIsClicked(!isClicked);
  }

  return (
    <div className='header'>
      <h1>Mentor Admin </h1>
      <button onClick={handleClick} type="submit" className='btn btn-primary' >
        Add New Mentor
      </button>
      {isClicked ? (
        <div>
          <form className='newMentor' action="">
            <label htmlFor="">
              Name:
              <input
                onChange={handleChange}
                name="fullName"
                type="text"
                value={form.fullName}
              />
            </label>
            <span>
              <label htmlFor="">
                Age:
                <input
                  onChange={handleChange}
                  name="age"
                  type="text"
                  value={form.age}
                />
              </label>{' '}
            </span>
            <span>
              <label htmlFor="">
                EmailID:
                <input
                  onChange={handleChange}
                  name="email"
                  type="text"
                  value={form.email}
                />
              </label>{' '}
            </span>
            <span>
              <label htmlFor="">
                Profile:
                <input
                  onChange={handleChange}
                  name="currentProfile"
                  type="text"
                  value={form.currentProfile}
                />
              </label>{' '}
            </span>
            <span>
              <label htmlFor="">
                Company:
                <input
                  onChange={handleChange}
                  name="company"
                  type="text"
                  value={form.company}
                />
              </label>{' '}
            </span>
            <span>
              <label htmlFor="">
                Phone:
                <input
                  onChange={handleChange}
                  name="phone"
                  type="text"
                  value={form.phone}
                />
              </label>{' '}
            </span>
            <button className='btn btn-light' onClick={addMentor} type="submit">
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Header;
