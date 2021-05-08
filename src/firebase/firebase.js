import * as firebase from "firebase";

const config = {
	apiKey: process.env.FIREBAE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database
// 	.ref("expenses")
// 	.once("value")
// 	.then((snapshot) => {
// 		const expenses = [];

// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val(),
// 			});
// 		});

// 		console.log(expenses);
// 	});

// // CHILD REMOVED
// database.ref("expenses").on("child_removed", (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// // CHILD CHANGED
// database.ref("expenses").on("child_changed", (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// // CHILD ADDED
// database.ref("expenses").on("child_added", (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("value", (snapshot) => {
// 	const expenses = [];

// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val(),
// 		});
// 	});

// 	console.log(expenses);
// });

// database.ref("expenses").push({
// 	description: "Rent",
// 	note: "",
// 	amount: 109500,
// 	createdAt: 976123498763,
// });

//

// database
// 	.ref()
// 	.once("value")
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch((e) => {
// 		console.log("Error fetching data", e);
// 	});

// database
// 	.ref()
// 	.set({
// 		name: "Dermot Rossiter",
// 		age: 21,
// 		stressLevel: 5,
// 		job: {
// 			title: "Software Developer",
// 			company: "Google",
// 		},
// 		location: {
// 			city: "Wexford",
// 			country: "Ireland",
// 		},
// 	})
// 	.then(() => {
// 		console.log("Data is saved");
// 	})
// 	.catch((e) => {
// 		console.log("This failed", e);
// 	});

// database.ref().update({
// 	stressLevel: 9,
// 	"job/company": "Amazon",
// 	"location/city": "Seattle",
// });

// database
// 	.ref("age")
// 	.remove()
// 	.then(() => {
// 		console.log("date was removed");
// 	})
// 	.catch((e) => {
// 		console.log("did not remove data", e);
// 	});
