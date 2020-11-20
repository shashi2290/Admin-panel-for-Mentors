import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Mentor from './components/mentors';
import Header from './components/header';

function App() {
  const [mentors, setMentors] = useState([]);
  
  const getMentors = async () => {
    const result = await axios.get('http://localhost:5000/mentor');
    setMentors(result.data);
    
  };

  useEffect(() => {
    getMentors();
  });

  
  return (
    
    <div>
      <Header />
      {mentors.map((mentor) => {        
        return <Mentor  data={mentor}   />
      })}
      
    </div>
  );
}

export default App;
