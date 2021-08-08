import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
//import "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASEUREMENT_ID
};  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  const database = firebase.database()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider().setCustomParameters({'prompt':'select_account'})
  const githubAuthProvider = new firebase.auth.GithubAuthProvider().setCustomParameters({'prompt':'select_account'})
  export {firebase,googleAuthProvider, githubAuthProvider, database as default}
  // database.ref('notes/-Mez3kOEXd2X4m7oNDQE').remove()

    //child_remove

    // database.ref('expenses').on('child_removed',(snapshot)=>{
    //   console.log(snapshot.key, snapshot.val())
    // })
    // //child changed
    // database.ref('expenses').on("child_changed", (snapshot)=>{
    //   console.log(snapshot.key,snapshot.val())
    // })
    // //child_added
    // database.ref('expenses').on("child_added", (snapshot)=>{
    //   console.log(snapshot.key,snapshot.val())
    // })
  
  // database.ref('expenses').on('value',(snapshot)=>{
  //   const expenses =[]
  //   snapshot.forEach((childSnapshot)=>{
  //       expenses.push({
  //         id:childSnapshot.key,
  //         ...childSnapshot.val()
  //       })
  //   })
  //   console.log(expenses)
  // })


  // database.ref('expenses').push({
  //   description:'Credit card',
  //   note:'this is a credit',
  //   amount: 200,
  //   createdAt:0
  // })
  



  // database.ref('notes').push({
  //   title: 'Course',
  //   body: 'React naive, angular, python'
  // })



  //  database.ref().on('value', (snapshot)=>{
  //    const name = snapshot.val().name
  //    const job = snapshot.val().job.title
  //    const company = snapshot.val().job.company
  //    console.log(`${name} is a ${job} at ${company}`)
  //  },(e)=>{
  //    console.log('Error fetching data', e)
  //  })

  // const onValueChange = database.ref().on('value', (snapshot)=>{
  // console.log(snapshot.val())
  // },(e)=>{
  //   console.log('Error with data fetching', e)
  // })    
  // setTimeout(()=>{
  //   database.ref('age').set(28)
  // }, 3500)

  // setTimeout(()=>{
  //   database.ref().off(onValueChange)
  // }, 7000)
  // setTimeout(()=>{
  //   database.ref('age').set(30)
  // }, 10000)
//   database.ref('location/city').once('value')
//   .then((snapshot)=>{
//    const val = snapshot.val()
//    console.log(val)
//   }).catch((e)=>{
//     console.log('error fetching data',e)
//   })
//   database.ref().set({
//       name:'Balogun jamiu',
//       age:22,
//       job:'software developer',
//       stressLevel: 6 ,
//       job: {
//           title: 'software developer',
//           company: 'Google'
//       }, 
//       isSingle:false,
//       location: {
//           city:'Ogun state', 
//           country: "united States"
//       }
//   }).then(()=>{
//       console.log('data is saved!')
//   }).catch((e)=>{
//         console.log(`this failed`,e)
//   })
//   database.ref().update({
//       stressLevel: 9,
//       'job/company': 'Amazon',
//       'location/city': 'seattle'
//   })
  //database.ref('isSingle').set(null)
// database.ref().remove().then(()=>{
//     console.log('remove successful')
// }).catch((e)=>{
//     console.log('error', e)
// })

