import * as Rx from 'src/rx'
import firebase from 'firebase'

const sampleUser = { id: 'a', username: 'user' }

export const signup = (email: string, password: string) =>
  Rx.from(firebase.auth().createUserWithEmailAndPassword(email, password)).pipe(
    Rx.map(user => {
      if (username === 'user' && password === 'pass') {
        return user
      }
      throw new Error('Invalid username or password')
    })
  )

