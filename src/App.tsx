import React from 'react'
import { Login } from './components/Login';
/* import { ContadorConHook } from './components/ContadorConHook' */
/* import { Contador } from './components/Contador' */
/* import { Funciones } from './typescript/Funciones' */
//import { ObjetosLiterales } from './typescript/ObjetosLiterales'
//import { TiposBasicos } from './typescript/TiposBasicos'

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción a TS-React</h1>
      {/*<TiposBasicos/>*/}
      {/*<ObjetosLiterales/>*/}
      {/* <Funciones/> */}
      {/* <Contador/> */}
      {/* <ContadorConHook/> */}
      <Login/>
    </div>
  )
}

export default App;