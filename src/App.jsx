import './App.css'
import { MyRoutes } from './routers/routes'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
function App() {

  return (
        <BrowserRouter basename='/peliculas-react'>
          <Link className='titulo' to="/"><h1 >🎬 Peliculas</h1></Link>
          <MyRoutes/>
        </BrowserRouter>
  )
}

export default App
