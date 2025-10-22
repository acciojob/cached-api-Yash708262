
import React, { useEffect, useState, useMemo } from "react";
import './../styles/App.css';
import "regenerator-runtime/runtime";


const App = () => {
  const [userId, setUserId] = useState(1)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchedData = async () => {
        setLoading(true);
         const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
          const json = await res.json();
            await new Promise((res) => setTimeout(res, 500)); 
           setData(json);
            setLoading(false);
    }
     fetchedData();
  },[userId])

    const cachedData = useMemo(() => data, [data]);


  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts for User {userId}</h2>
      <button onClick={() => setUserId((prev) => prev + 1)}>Next User</button>
      <button onClick={() => setUserId((prev) => (prev > 1 ? prev - 1 : 1))}>Prev User</button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {cachedData.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
