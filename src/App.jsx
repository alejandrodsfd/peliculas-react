import './App.css'
import { MyRoutes } from './routers/routes'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
function App() {

  return (
    <HelmetProvider>
        <BrowserRouter basename='/peliculas-react/'>
          <Link className='titulo' to="/"><h1 >🎬 Peliculas</h1></Link>
          <MyRoutes/>
        </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
