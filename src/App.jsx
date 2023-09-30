import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState, useEffect } from "react";

function App() {                  //dentro del return se devuelve codigo html. Fuera de él es javascript
    
  const [pacientes, setPacientes]=useState([]);
  const [paciente, setPaciente]=useState({});
  const pacientesLS= JSON.parse(localStorage.getItem('pacientes')) ;

    
  useEffect(()=>{
    pacientesLS ? setPacientes(pacientesLS) : setPacientes([])
  },[]);
  
  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes));

  }, [pacientes])





  const eliminarPaciente = (id) =>{
    const pacientesActualizados= pacientes.filter(paciente => paciente.id !== id)     //filtro los pacientes que tengan id distintos del que se debe eliminar.
    setPacientes(pacientesActualizados);
  }
  
  
  return (
    <>
      <div>
      <Header/>
      <div className="md:flex">
      <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente} 
      />
      <ListadoPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
      />
      </div>
      </div>

    </>
  )
}

export default App
