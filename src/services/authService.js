import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';
import { auth } from '../config/firebase';

const mapUser = (firebaseUser) => ({
  id: firebaseUser.uid,
  email: firebaseUser.email,
  name: firebaseUser.displayName || firebaseUser.email.split('@')[0],
  avatar: firebaseUser.photoURL || `https://ui-avatars.com/api/?name=${firebaseUser.email}&background=random`,
  role: 'user', // Default role
});

const authService = {
  login: async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();
    return {
      user: mapUser(userCredential.user),
      token,
    };
  },
  register: async (data) => {
    const { email, password, name } = data;
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    if (name) {
      await updateProfile(userCredential.user, { displayName: name });
    }
    
    const token = await userCredential.user.getIdToken();
    return {
      user: mapUser(userCredential.user),
      token,
    };
  },
  logout: async () => {
    await signOut(auth);
    return true;
  },
  getCurrentUser: async () => {
    const user = auth.currentUser;
    if (user) {
      return mapUser(user);
    }
    return null;
  },
  forgotPassword: async (email) => {
    await sendPasswordResetEmail(auth, email);
    return true;
  },
  verifyEmail: async (token) => {
    // Firebase handles email verification differently, usually via a link sent to email
    // This might need adjustment based on specific requirements, but for now keeping placeholder or removing
    return true; 
  },
};

export default authService;
