import './App.css'
import { MyRoutes } from './routers/routes'
import { Link } from 'react-router-dom'
function App() {

  return (
    <>
     <Link className='titulo' to="/"><h1 >🎬 Peliculas</h1></Link>
     <MyRoutes/>
    </>
  )
}

export default App
