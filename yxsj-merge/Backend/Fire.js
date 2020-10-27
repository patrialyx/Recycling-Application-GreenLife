const firebase = require('firebase')
// const admin = require('firebase-admin')
// const firestore = require('firebase-firestore')
require ("firebase/firestore")

class Fire {
  constructor() {
    this.init();
    this.onAuthStateChanged()
    this.getAllBins()
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
    measurementId: "G-JXLZMW9DZD"
      });
    }
    this.db = firebase.firestore()
    this.fieldvalue = firebase.firestore.FieldValue


    console.log('Database linked')
  };


  // auth stuff
  handleRegister = async (email, password, name) => {
    console.log("creating account")
    try {
      const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
      const user = firebase.auth().currentUser
      await user.updateProfile({
        displayName: name
      })
      user.sendEmailVerification()
      this.db.doc(`users/${this.user.uid}`).set({
        history: [], 
        total_points: 0
      })
      console.log("account created")
      return true
    } catch (e) {
      console.log(e.message)
      alert(e.message)
      // TODO
      return false
      // invalid email
    }
  }


  //============ SJ and pat stuff =============
  handleLogin = async (email, password) => {
    console.log("logging in")
    try {
      const res = await firebase.auth().signInWithEmailAndPassword(email, password)
      console.log('user', this.user)
      console.log('res', res)
      console.log("logged in ")
      return true
    } catch (e) {
      console.log("failed to login with error", e.message)
      alert(e.message)
      // TODO 
      // invalid email
      return false
    }
  }

  handleLogout = async () => {
    console.log("signing out")
    try {
      await firebase.auth().signOut()
      console.log("signed out")
    } catch (e) {
      console.log("failed to logout with error ", e.message)
      // TODO 
      // invalid email
    }
  }

  handlePasswordReset = async (email) => {
    console.log("resetting password")
    try {
      await firebase.auth().sendPasswordResetEmail(email)
      return true
    } catch (e) {
      console.log("failed to reset password with error", e.message)
      // TODO 
      return false
      // user not found
      // invalid email
    }
  }

  get user() {
    return firebase.auth().currentUser
  }

  onAuthStateChanged = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
      } else {
        console.log("user is signed out")
      }
    })
  }

  // ======== hh stuff =================
  submitItem = async (type, weight, points) =>{
    console.log('in ge points')    
    // const points = 100
    const entry = {
      type, 
      weight, 
      time: firebase.firestore.Timestamp.now(),
      points
    }
    try {
      console.log('sending to db')
      const res = await this.db.doc(`users/${this.user.uid}`).update({
        history: this.fieldvalue.arrayUnion(entry), 
        total_points: this.fieldvalue.increment(points)
      })
      console.log('res', res)
    } catch (e) {
      console.log('error', e.message)
    }
  }

  getSearchResults = async () =>  {
    try {
      const doc = await this.db.doc('searchResults/recyclables').get()
      return doc.data().recyclables
    } catch (e) {
      console.log('error', e.message)
    }
  }

  // temp
  // postSearchResults = async () => {
  //   const data = require('../data.json')
  //   console.log("hi")
  //   console.log(data, "test")
  //   try {
  //     const res = await this.db.doc('searchResults/recyclables').set({recyclables: data})
  //   } catch (e) {
  //     console.log(e.message)
  //   }
  // }


  // ============ brent ============
  getTotalPoints = async () => {
    try {
      console.log('in get toal points')
      const doc = await this.db.doc(`users/${this.user.uid}`).get()
      if (doc && doc.exists) {
        const data = doc.data()
        console.log('worked', data.total_points)
        return data.total_points
      } else {
        console.log("didnt work")
      }

    } catch (e) {
      console.log('error: ', e.message)
    }
    return 2
  }

  getPointHistory = async () => {
    
    try {
      console.log('in get hist')
      const doc = await this.db.doc(`users/${this.user.uid}`).get()
      if (doc && doc.exists) {
        const data = doc.data()
        console.log('hist worked', data.history)
        return data.history
      } else {
        console.log("didnt work")
      }

    } catch (e) {
      console.log('error: ', e.message)
    }
    return 2
  }

  getRealtimePoints = (setStateFunction) => {
    this.db.doc(`users/${this.user.uid}`).onSnapshot((doc)=>{
      console.log("ineventlistener")
      if (doc) {
        const data = doc.data()
        setStateFunction(data.total_points, data.history)
      }
    })
  }


  // ============== yuxuan ==================
  reportFault = async (bin_uid, description) => {
    let i = Math.floor(bin_uid/ 500) * 500
    let report
    console.log('bin_uid: ', bin_uid)
    try {

      const docs = await this.db.doc(`bins/bin${i}`).get()
      const faultyBin = await docs.data().data.find(bin=>bin.uid == bin_uid)
      console.log('faulty bin', faultyBin)
      report = {
        user: this.user.email,
        bin: faultyBin, 
        description
      }
    } catch (e) {
      console.log('getting bin failed with error', e.message)
    }
    try {
      const res = await this.db.collection(`faults`).doc().set({report})
      return true
    } catch (e) {
      console.log('report fault failed with error ', e.message)
      alert(e.message)
    }

    
    // TODO
    return 
  }

  // ============ xy ====================
  getAllBins = async () => {
    console.log('in get bins')
    try {
      const snap = await this.db.collection('bins').get()
      const merged = [].concat.apply([], snap.docs.map(obj => obj.data().data)).filter((obj)=>obj.uid % 15 === 0)
      console.log('length of merged', merged.length)
      this.bins = merged
    } catch (e) {
      console.log('error: ', e.message)
      this.bins = []
    }
  }
  // getAllBins = async () => {
  //   console.log('in get bins')
  //   try {
  //     this.db.collection('bins').get().then((snap)=>{
  //       const merged = [].concat.apply([], snap.docs.map(obj => obj.data().data))
  //       console.log('length of merged', merged.length)
  //       return merged

  //     })
  //   } catch (e) {
  //     console.log('error: ', e.message)
  //     return []
  //   }
  // }

  
}

Fire.shared = new Fire();

export default Fire;
