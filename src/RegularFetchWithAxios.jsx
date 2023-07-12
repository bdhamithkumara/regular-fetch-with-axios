import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
//regular fetch with axios
function RegularFetchWithAxios() {
  
  const [isLoading,setLoading] = useState(false);
  const [isError,setError] = useState(false);
  const [data,setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      try {
        const response = await axios("http://swapi.dev/api/people/1/");
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    }
    fetchData()
  },[]);

  return (
    <div className="App">
      <h1>React Query example with Star Wars API</h1>
      {isError && <div>Something went wrong ...</div>}
 
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  )
}

export default RegularFetchWithAxios
