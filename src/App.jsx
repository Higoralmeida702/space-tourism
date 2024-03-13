  import './styles.css'
  import './App.css'
  import {BrowserRouter, Routes, Link, Route} from 'react-router-dom'
  import Home from './componentes/home'
  import Destination from './componentes/destination'
  import Crew from './componentes/crew'
  import Technology from './componentes/technology'

  function App() {
    return (
    <div className='help'>
      <BrowserRouter>
      <nav className='navegacao'>
        <img src="./imagens/shared/logo.svg" alt="" />
      <ul>
        <li id='home'><Link to="/home">Home</Link></li>
        <li id='destination'><Link to="/destination" >Destination</Link></li>
        <li id='crew'><Link to="/crew">Crew</Link></li>
        <li id='technology'><Link to="/technology">Technology</Link></li>
      </ul>
      </nav>
      <Routes>
      <Route path="/home" index element={<Home/>}></Route>
      <Route path="/destination" element={<Destination/>}></Route>
      <Route path="/crew" element={<Crew/>}></Route>
      <Route path="/technology" element={<Technology/>}></Route>
      </Routes>
      <div className="home"></div>
      </BrowserRouter>
    <div>
    <div>   
          <div className="apresentacaoConteudoHome">
          <h2>SO, YOU WANT TO TRAVEL TO</h2>
          <h1>SPACE</h1>
          <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
          </div>
         
      </div>
    </div>
    </div>
  
    )
  }

  export default App
