import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const ReactQueryFetchWithAxios = () => {

    const {isLoading, error,data } = useQuery('fetchLuke', async () => {
        const {data} = await axios.get('http://swapi.dev/api/people/1/')
        return data  
    })

  return (
    <div className="App">
    <h1>React Query example with star wars API</h1>
    {error && <div>Something went wrong ...</div>}

    {isLoading ? (
      <div>Retrieving Luke Skywalker Information ...</div>
    ) : (
      <pre>{JSON.stringify(data, null, 2)}
      </pre>
    )}
  </div>
  )
}

export default ReactQueryFetchWithAxios
