import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password, name, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password,name,photoURL);
        // console.log(result)
        // const user = result.user;
        // return await updateProfile(user, {
        //     displayName: name,
        //     photoURL: photoURL,
        // });
    };

    const loginUser  = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
      };

      const logOut = () => {
        return signOut(auth);
      };


    const userInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
