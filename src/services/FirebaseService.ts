import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

export const firebaseService = {
  emailAuth: async (email: string, password: string) => {
    return await auth().signInWithEmailAndPassword(email, password);
  },

  createUserByEmail: async (email: string, password: string) => {
    return await auth().createUserWithEmailAndPassword(email, password);
  },

  resetEmailPassword: async (email: string) => {
    return await auth().sendPasswordResetEmail(email);
  },

  phoneAuth: async (phoneNumber: string) => {
    return await auth().signInWithPhoneNumber(phoneNumber);
  },

  googleAuth: async () => {
    await GoogleSignin.configure({
      webClientId: '876157661008-oblgqc20njbg70u2j4f51pbo3vfqit0h.apps.googleusercontent.com',
    });

    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return await auth().signInWithCredential(googleCredential);
  },

  logout: async () => {
    return await auth().signOut();
  },
};
