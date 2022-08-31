import React, {useState} from 'react';

const Home = () => {
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <p>Home</p>
      <p>To add clients to the database, click add client and complete form</p>
      <p>To view clients click dashboard</p>
    </div>
  );
}

export default Home;
