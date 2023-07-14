import React, { useState } from 'react';
import './App.css';
import Navbar from './components/nav';
import ObjectCardMapper from './components/cards';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Navbar      
        user={user} 
        setUser={setUser}
      />
      <ObjectCardMapper
        user={user} 
      />
    </div>
  );
}

export default App;
