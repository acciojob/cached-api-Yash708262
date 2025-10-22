
import React, { useEffect, useState, useMemo } from "react";
import './../styles/App.css';
import "regenerator-runtime/runtime";


const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchedData = async () => {
        setLoading(true);
         const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
          const json = await res.json();
           setData(json);
            setLoading(false);
    }
     fetchedData();
  },[])

    const cachedData = useMemo(() => data, [data]);


  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts</h2>
     

      {loading ? (
        <p>Loading...</p>
      ) : (
       <ul>
  {cachedData.map((post) => (
    <li key={post.id}>
      <h4>{post.title}</h4>
      <p>{post.body}</p>  
    </li>
  ))}
</ul>
      )}
    </div>
  )
}

export default App
