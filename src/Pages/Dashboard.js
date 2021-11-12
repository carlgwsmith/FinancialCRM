import React, { useState, useEffect } from 'react';
import {db} from '../firebase'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'

const Dashboard = () => {
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(false)

  const ref = collection(db, "clients")

  const deleteClient = async (id) => {
    const clientDoc = doc(db, "clients", id);
    await deleteDoc(clientDoc)
  }

  useEffect(() => {
    const getClients = async () =>{
      const data = await getDocs(ref);
      setClients(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      console.log(clients)
    }
    getClients()
  }, [deleteClient]);

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
          <p>{client.firstName} {client.lastName}</p>
          <p>${client.Assets}</p>
          <button onClick={()=> {deleteClient(client.id)}}>Delete Client</button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
