import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

import{
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAOPDRVBYK4v387aLb62OMsPgmWnnqJV5E",
    authDomain: "aidoo-store-db.firebaseapp.com",
    projectId: "aidoo-store-db",
    storageBucket: "aidoo-store-db.appspot.com",
    messagingSenderId: "333508418543",
    appId: "1:333508418543:web:24c74c5c72c706df52b41a",
    measurementId: "G-EHB3EPXVPG"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account", //ensures that user is asked to select a google account
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid); //Create a document reference. The doc function takes three arguments; 1.database instance, 2. Collection name, 3. Unique identifier for the collection
    // we use the uid obtained from the google auth response for the collection identifier.
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef); //read the document from this doc reference. The getDoc method also has a function (.exists()) that helps us check if the reference exists.
    console.log(userSnapshot.exists());

    //if user data (reference) does not exist, create (set) the doc using data from userAuth
    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const CreatedAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                CreatedAt
            }); //setDoc takes two arguments: 1.The document reference you want to create and 2.The data (objects) you want to create inside.
        } catch (error) {
            console.log("Error creating user", error.message);
        }
    }

    //else if the user data exists
    return userDocRef;
}