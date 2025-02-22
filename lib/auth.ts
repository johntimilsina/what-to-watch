import { auth } from "./firebase";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    User,
} from "firebase/auth";

// Google Authentication
export const signInWithGoogle = async (): Promise<User | null> => {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        return result.user;
    } catch (error) {
        console.error("Google Sign-In Error:", error);
        return null;
    }
};

// Email & Password Authentication
export const signUpWithEmail = async (email: string, password: string): Promise<User | null> => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Sign-Up Error:", error);
        return null;
    }
};

export const signInWithEmail = async (email: string, password: string): Promise<User | null> => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Sign-In Error:", error);
        return null;
    }
};

// Sign Out Function
export const signOutUser = async (): Promise<void> => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Sign-Out Error:", error);
    }
};
