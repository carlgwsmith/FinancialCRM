import React, {useState, useEffect} from 'react';
import {db} from '../firebase'
import { addDoc, collection } from 'firebase/firestore'
const ref = collection(db, "clients")

const Clientinput = () => {
  const [newFirst, setNewFirst] = useState('')
  const [newLast, setNewLast] = useState('')
  const [newAssets, setNewAssets] = useState(0)
  const [newAge, setNewAge] = useState(0)

  const createClient = async () =>{
    await addDoc(ref, {
      firstName: newFirst,
      lastName: newLast,
      Assets: newAssets,
      age: newAge
    })
  }
  return (
    <div>
    <h2>Add a client</h2>
    <form>
      <p><input placeholder="First Name" onChange={(event) => {setNewFirst(event.target.value)}}/></p>
      <p><input placeholder="Last Name" onChange={(event) => {setNewLast(event.target.value)}}/></p>
      <p><input placeholder="Age" onChange={(event) => {setNewAge(event.target.value)}} type="number" style={{border:'1px solid'}}/></p>
      <p> <input placeholder="Assets" type="number" onChange={(event) => {setNewAssets(event.target.value)}} style={{border:'1px solid'}}/></p>
    </form>
    <button onClick={createClient}>Add Client</button>
    </div>
  );
}

export default Clientinput;
