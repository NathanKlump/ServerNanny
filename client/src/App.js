import React, { useEffect, useState } from 'react';
import './App.css';
import { databaseRef } from './config/firebase';
import Navbar from './components/nav';

function App() {
  const [user, setUser] = useState(null);

  /*
  useEffect(() => {
    const userId = user?.uid;
    if (userId) {
      const userRef = databaseRef.child(`users/${userId}`);
      userRef.on('value', (snapshot) => {
        setUser(snapshot.val());
      });
  
      return () => {
        userRef.off();
      };
    }
  }, [user?.uid]);
  */
  return (
    <div className="App">
      <Navbar      
        user={user} 
        setUser={setUser}
      />
    </div>
  );
}

export default App;
