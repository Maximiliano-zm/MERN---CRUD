import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import UsuarioIndividual from "./UsuarioIndividual";


const ListaUsuario = () => {
  const [datausuarios , setdatausuario] =useState([])

  useEffect(()=>{
    axios.get('api/usuario/obtenerusuarios').then(res =>{
      console.log(res.data)
      setdatausuario(res.data)
    }).catch(err =>{
      console.log(err)
    })
  },[])

  //mapeo lista usuarios 

    const listausuario = datausuarios.map(usuario =>{
      return(
        <div>
          <UsuarioIndividual usuario={usuario}/>
        </div>
      )
    })
  
 return (
     <>
     {listausuario}
     </>
   );
}
 
export default ListaUsuario;