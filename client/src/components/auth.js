import React, { useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, get } from 'firebase/database';

import { auth, googleProvider } from "../config/firebase";

export const Auth = ({ user, setUser }) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        setUser(user);

        // Get a reference to the database service
        const db = getDatabase();
        const userRef = ref(db, `users/${user.uid}`);

        // Check if this is a new user
        get(userRef).then((snapshot) => {
            if (!snapshot.exists()) {
                // User data does not exists, save the new user's info
                set(userRef, {
                    displayName: user.displayName,
                    email: user.email,
                });
            }
        });
    } catch (err) {
        console.error(err)
    }
}

  const signOutWithGoogle = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="font-roboto">
      <div id="gSignInWrapper" className="my-2">
        {user ? (
          <div
            id="customBtn"
            className="inline-block bg-white text-gray-400 border border-gray-400 rounded p-2 cursor-pointer shadow text-center transform scale-75"
            onClick={signOutWithGoogle}
          >
            <span className="inline-block px-3 text-lg font-bold">
              Sign Out
            </span>
          </div>
        ) : (
          <div
            id="customBtn"
            className="inline-block bg-white text-gray-700 border border-gray-400 rounded p-2 cursor-pointer shadow text-center transform scale-75"
            onClick={signInWithGoogle}
          >
            <img
              src="https://banner2.cleanpng.com/20190731/uqk/kisspng-google-icon-5d4175d6037a16.4552672815645710940143.jpg"
              alt="Google sign-in"
              className="inline-block align-middle w-10 h-10 mr-2"
            />
            <span className="inline-block align-middle px-3 text-lg font-bold">
              Google Sign in
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
