import React, { useState, useEffect } from 'react';
import {db} from '../firebase'
import { collection, getDocs, deleteDoc, doc, addDoc, updateDoc } from 'firebase/firestore'

const Dashboard = () => {
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(false)
  // const [editing, setEditing] = useState(false)

  const ref = collection(db, "clients")

  const deleteClient = async (id) => {
    const clientDoc = doc(db, "clients", id);
    await deleteDoc(clientDoc)
  }
  const updateClient = async (id, age) => {
    const clientDoc = doc(db, "clients", id);
    const newFields = { age: age + 1 };
    await updateDoc(clientDoc, newFields);
  };

  useEffect(() => {
    const getClients = async () =>{
      const data = await getDocs(ref);
      setClients(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      console.log(clients)
    }
    getClients()
  }, []);

  if (loading) {
    return <div>
      loading...
    </div>;
  }
  return (
    <div>
      <h1>Client Dashboard</h1>
      {clients.map((client) => (
        <div key={client.id} style={{border: '1px solid #bababa', marginBottom:"10px"}}>
          <div>
          <p>{client.firstName} {client.lastName}</p>
          <p>Age: {client.age} <button onClick={() => {
                updateClient(client.id, client.age);
              }}>Increase Age</button></p>
          <p>${client.Assets}</p>
          </div>
          <button onClick={()=> {deleteClient(client.id)}}>Delete Client</button>
          {/* <button onClick={setEditing(true)}></button> */}
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
