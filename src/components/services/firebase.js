import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDzEzzjq9wTAv5zeK4OnARAGIHXGD5apuw',
	authDomain: 'nomads-pal.firebaseapp.com',
	databaseURL: 'https://nomads-pal.firebaseio.com',
	projectId: 'nomads-pal',
	storageBucket: 'nomads-pal.appspot.com',
	messagingSenderId: '45263941842',
	appId: '1:45263941842:web:47d99339b786c2eb1dbd0b',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;
