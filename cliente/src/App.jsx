import AgregarUsuario from "./componente/AgregarUsuario";
import EditarUsuario from "./componente/EditiarUsuario";
import ListaUsuario from "./componente/ListaUsuarios";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
const App = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <a className="navbar-brand" href="/">CRUD MERN</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/agregarusuario">Agregar Usuario</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    

        <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListaUsuario/>}/>
          <Route path='/agregarusuario' element={<AgregarUsuario/>}/>
          <Route path='/editarusuario/:idusuario' element={<EditarUsuario/>}/>
        </Routes>
        </BrowserRouter>        
        </>
      );
}
 
export default App;
