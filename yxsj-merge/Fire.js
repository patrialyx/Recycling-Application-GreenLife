const firebase = require("firebase");
// const admin = require('firebase-admin')
// const firestore = require('firebase-firestore')

class Fire {
  constructor() {
    this.init();
    this.onAuthStateChanged();
  }

  init = async () => {
    // to set up firestore database
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyBxbq62DHxygKLYk17-OJFR4dz0oxF5TPc",
        authDomain: "cz2006-8ccbd.firebaseapp.com",
        databaseURL: "https://cz2006-8ccbd.firebaseio.com",
        projectId: "cz2006-8ccbd",
        storageBucket: "cz2006-8ccbd.appspot.com",
        messagingSenderId: "1059030544895",
        appId: "1:1059030544895:web:756d2e63cc3337d92877ca",
        measurementId: "G-JXLZMW9DZD",
      });
    }
    this.db = firebase.firestore();
    this.fieldvalue = firebase.firestore.FieldValue;
    console.log("Database linked");
  };

  // auth stuff
  handleRegister = async (email, password, name) => {
    console.log("creating account");
    try {
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const user = firebase.auth().currentUser;
      await user.updateProfile({
        displayName: name,
      });
      user.sendEmailVerification();
      this.db.doc(`users/${this.user.uid}`).set({
        history: [],
        total_points: 0,
      });
      console.log("account created");
      return true;
    } catch (e) {
      console.log(e.message);
      // TODO
      return false;
      // invalid email
    }
  };

  handleLogin = async (email, password) => {
    console.log("logging in");
    try {
      const res = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log("user", this.user);
      console.log("res", res);
      console.log("logged in ");
      return true;
    } catch (e) {
      console.log("failed to login with error", e.message);
      // TODO
      // invalid email
      return false;
    }
  };

  handleLogout = async () => {
    console.log("signing out");
    try {
      await firebase.auth().signOut();
      console.log("signed out");
    } catch (e) {
      console.log("failed to logout with error ", e.message);
      // TODO
      // invalid email
    }
  };

  handlePasswordReset = async (email) => {
    console.log("resetting password");
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      return true;
    } catch (e) {
      console.log("failed to reset password with error", e.message);
      // TODO
      return false;
      // user not found
      // invalid email
    }
  };

  get user() {
    return firebase.auth().currentUser;
  }

  onAuthStateChanged = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
      } else {
        console.log("user is signed out");
      }
    });
  };

  // db stuff
  submitItem = async (type, weight, points) => {
    console.log("in ge points");
    // const points = 100
    const entry = {
      type,
      weight,
      time: firebase.firestore.Timestamp.now(),
      points,
    };
    try {
      console.log("sending to db");
      const res = await this.db.doc(`users/${this.user.uid}`).update({
        history: this.fieldvalue.arrayUnion(entry),
        total_points: this.fieldvalue.increment(points),
      });
      console.log("res", res);
    } catch (e) {
      console.log("error", e.message);
    }
  };

  getTotalPoints = async () => {
    console.log("in get toal points");
    const doc = await this.db.doc(`users/${this.user.uid}`).get();
    if (doc && doc.exists) {
      const data = doc.data();
      return data.total_points;
    }
  };

  getPointHistory = async () => {
    console.log("in get history");
    try {
      const doc = await this.db.doc(`users/${this.user.uid}`).get();
      if (doc && doc.exists) {
        const data = doc.data();
        return data.total_points;
      }
    } catch (e) {
      console.log("error: ", e.message);
    }
  };

  getSearchResults = async () => {
    console.log("getting search results");
    try {
      const doc = await this.db.doc("searchResults/recyclables").get();
      // console.log(doc.data());
      return doc.data().recyclables;
    } catch (e) {
      console.log("error", e.message);
    }
  };

  // observeAuth = () => firebase.auth().onAuthStateChanged(this.anonSign);

  // anonSign = (user) => {
  //   try {
  //     firebase.auth().signInAnonymously();
  //   } catch ({ message }) {
  //     alert(message);
  //   }
  // };

  // get ref() {
  //   return firebase.database().ref('messages');
  // }

  // get formref() {
  //   return firebase.database().ref('form');
  // }

  // get uid() {
  //   return (firebase.auth().currentUser || {}).uid;
  // }

  // get timestamp() {
  //   return firebase.database.ServerValue.TIMESTAMP;
  // }

  // onMsg = (callback) =>
  //   this.ref
  //     .limitToLast(20)
  //     .on('child_added', (snapshot) => callback(this.parse(snapshot)));

  // onForm = (callback) =>
  //   this.formref.on('child_added', (snapshot) =>
  //     callback(this.parseForm(snapshot))
  //   );

  // send = (messages) => {
  //   for (let i = 0; i < messages.length; i++) {
  //     const { text, user } = messages[i];
  //     const message = {
  //       text,
  //       user,
  //       timestamp: this.timestamp,
  //     };
  //     this.append(message);
  //   }
  // };

  // sendForm = (form) => {
  //   const { name, thumbnail, descrp, goals, topics, commt } = form;
  //   const formSend = {
  //     name,
  //     thumbnail,
  //     descrp,
  //     goals,
  //     topics,
  //     commt,
  //   };
  //   this.formref.push(form);
  // };

  // append = (message) => this.ref.push(message);

  // off() {
  //   this.ref.off();
  // }

  // offForm() {
  //   this.formref.off();
  // }

  // parse = (snapshot) => {
  //   const { timestamp: numberStamp, text, user } = snapshot.val();
  //   const { key: _id } = snapshot;

  //   const timestamp = new Date(numberStamp);

  //   const message = {
  //     _id,
  //     timestamp,
  //     text,
  //     user,
  //   };
  //   return message;
  // };

  // parseForm = (snapshot) => {
  //   const { name, thumbnail, descrp, goals, topics, commt } = snapshot.val();
  //   const { key: _id } = snapshot;

  //   const form = {
  //     _id,
  //     name,
  //     thumbnail,
  //     descrp,
  //     goals,
  //     topics,
  //     commt,
  //   };
  //   return form;
  // };
}

Fire.shared = new Fire();
export default Fire;
