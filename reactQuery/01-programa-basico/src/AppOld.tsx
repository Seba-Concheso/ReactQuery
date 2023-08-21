import { useEffect, useState } from 'react'
import './App.css'

const getRandomNumberFromApi = async ():Promise<number> => {

  const res = await fetch ("https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new")
  const numberString = await res.text()
  
  // throw new Error("Error de prueba")
  
  return +numberString
}

function App() {
  const [number, setNumber] = useState<number>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>()

  useEffect(() => {
    getRandomNumberFromApi()
    .then(setNumber)
    .catch(error => setError(error.message))
  }, [])

  useEffect(() => {
    if (number) setIsLoading(false)
    
  }, [number]);

  useEffect(() => {
    if (error) setIsLoading(false)

  }, [error]);

  return (
    
        
      <div className="card">
        {
          isLoading ? (<h2>Loading...</h2>) : (<h2>Número aleatorio: {number}</h2>)
        }
        {
          !isLoading && error && (<h2>{error}</h2>)
        }
       
      </div>
      
    
  )
}

export default App
