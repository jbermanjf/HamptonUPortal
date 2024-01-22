// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxUCHbqoiZnkHh5k9ehKyPCFw83cg5KZA",
  authDomain: "hamptonu-backend.firebaseapp.com",
  projectId: "hamptonu-backend",
  storageBucket: "hamptonu-backend.appspot.com",
  messagingSenderId: "570774152091",
  appId: "1:570774152091:web:2098406e0ba1ceee29f73e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export interface UserData {
    id: string,
    email: string,
    lastPlayed: string,
    lastDate: string
}

export async function getAllUsers() {
    const querySnapshot = await getDocs(collection(db, "users"));
    const users : UserData[] = []
    querySnapshot.forEach((user) => {
      const data = user.data();
      let newUser : UserData = {
        id: user.id,
        email: data.email,
        lastPlayed: data.last_game_played,
        lastDate: data.last_time_played
    }
      users.push(newUser);
    })

    return users;
}


export async function getData(userId : string) {

    return []
}