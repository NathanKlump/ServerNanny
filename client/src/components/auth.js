import React, { useEffect } from 'react';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

import { auth, googleProvider } from "../config/firebase";

export const Auth = ({user, setUser}) => {

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {setUser(user);});
        return () => unsubscribe();
    }, []);

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err)
        }
    }
    const signOutWithGoogle = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <div id="gSignInWrapper" style={styles.signInWrapper}>
                {user ? (
                    <div id="customBtn" style={styles.customBtn} onClick={signOutWithGoogle}>
                        <span style={styles.buttonText}>Sign Out</span>
                    </div>
                ) : (
                    <div id="customBtn" style={styles.customBtn} onClick={signInWithGoogle}>
                        <img src="https://banner2.cleanpng.com/20190731/uqk/kisspng-google-icon-5d4175d6037a16.4552672815645710940143.jpg" alt="Google sign-in" style={styles.icon}/> 
                        <span style={styles.buttonText}>Google Sign in</span>
                    </div>
                )}
            </div>
        </div>
    );
}

// styles object remains the same...

const styles = {
    signInWrapper: {
        fontFamily: 'Roboto, sans-serif'
    },
    label: {
        fontSize: '16px',
        color: '#404040',
    },
    customBtn: {
        display: 'inline-block',
        background: 'white',
        color: '#444',
        width: '190px',
        border: 'thin solid #888',
        boxShadow: '1px 1px 1px grey',
        whiteSpace: 'nowrap',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center',
        cursor: 'pointer',
        marginTop: '10px'
    },
    icon: {
        background: `url('/identity/sign-in/g-normal.png') transparent 5px 50% no-repeat`,
        display: 'inline-block',
        verticalAlign: 'middle',
        width: '42px',
        height: '42px',
    },
    buttonText: {
        display: 'inline-block',
        verticalAlign: 'middle',
        padding: '0 15px',
        fontSize: '18px',
        fontWeight: 'bold'
    }
}
