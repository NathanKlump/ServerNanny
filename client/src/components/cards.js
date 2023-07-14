import React, { useState } from 'react';
import { getDatabase, ref, set, get, update, child, push } from 'firebase/database';

const AddURLButton = ({ user }) => {
  const [url, setUrl] = useState('');

  function addURL() {
    const userRef = ref(getDatabase(), `users/${user.uid}/data`);

    // Check if this is a new user
    get(userRef).then((snapshot) => {
        set(userRef, {
          URL: url,
        });
    });

    // Reset the URL input
    setUrl('');
  }

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Add your URL here"
      />
      <button onClick={addURL}>Submit</button>
    </div>
  );
};

export default AddURLButton;
