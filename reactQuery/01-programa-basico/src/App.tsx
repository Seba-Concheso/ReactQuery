import { useRandom } from './hooks/useRandom'
import './App.css'



function App() {
  
  const query = useRandom()
 
  return (
    
        
      <div className="card">
        {
          query.isFetching ? (<h2>Loading...</h2>) : (<h2>Número aleatorio: {query.data}</h2>)
        }
        {
        
        !query.isLoading && query.isError && (<h2>{`${query.error}`}</h2>)
        }
        <button className='button' onClick={() => query.refetch()} disabled={query.isFetching}>
          {query.isFetching ? "..." : "Nuevo número"}
        </button>
      </div>
      
    
  )
}

export default App
