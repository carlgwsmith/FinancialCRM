import React, {useState, useEffect} from 'react';
import {db} from '../firebase'
import { addDoc, collection } from 'firebase/firestore'
const ref = collection(db, "clients")

const Clientinput = () => {
  const [newFirst, setNewFirst] = useState('')
  const [newLast, setNewLast] = useState('')
  const [newAssets, setNewAssets] = useState(0)

  const createClient = async () =>{
    await addDoc(ref, {
      firstName: newFirst,
      lastName: newLast,
      Assets: newAssets
    })
  }
  return (
    <div>
    <h2>Add a client</h2>
    <input placeholder="First Name" onChange={(event) => {setNewFirst(event.target.value)}}/>
    <input placeholder="Last Name" onChange={(event) => {setNewLast(event.target.value)}}/>
    <input placeholder="Assets" type="number" onChange={(event) => {setNewAssets(event.target.value)}}/>
    <button onClick={createClient}>Add Client</button>
    </div>
  );
}

export default Clientinput;
