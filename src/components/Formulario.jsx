import { useState, useEffect } from "react"
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre]= useState('');
  const [propietario, setPropietario]= useState('');
  const [email, setEmail]= useState('');
  const [alta, setAlta]= useState('');
  const [sintomas, setSintomas]= useState('');
  const [error, setError]= useState(false);

  useEffect(()=>{
    if(Object.keys(paciente).length>0)
    {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);

    }
  }, [paciente])

  const generarId= ()=>{
      const random=Math.random().toString(36).substring(2);
      const fecha= Date.now().toString(36);
      return random + fecha;
  }


  const handleSubmit= e =>{
    e.preventDefault();


    //VALIDACIÓN DE FORMULARIO:
     if([nombre, propietario, email, alta, sintomas].includes('')){
      setError(true);
      return;
     }
     setError(false);
    console.log("Enviando formulario");

    //OBJETO DE PACIENTES
  const objetoPaciente={
    nombre,
    propietario,
    email,
    alta,
    sintomas
  }
  
    if(paciente.id){
      //EDITANDO REGISTRO
      objetoPaciente.id=paciente.id;
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id=== paciente.id ? objetoPaciente : pacienteState);

      setPacientes(pacientesActualizados);
      setPaciente({})

    }
    else{
      //NUEVO REGISTRO
      objetoPaciente.id=generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }


  //REINICIA EL FORM

  setNombre('');
  setPropietario('')
  setEmail('');
  setAlta('')
  setSintomas('');
  }



    return (
        <div className="contenedor md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold ">Administralos</span>
            </p>

            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
              { error && <Error
                          mensaje='Todos los campos son obligatorios.'
              /> }
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota: {nombre}
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota "
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={ e => setNombre(e.target.value)} //pasa el evento OnChange como parametro y se envía como parametro el value del target al setNombre del state
                        //EN OTRAS PALABRAS, CADA VEZ QUE CAMBIA EL INPUT, SE SETEA AL STATE CON EL VALOR DEL INPUT
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={ e => setPropietario(e.target.value)}
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email Contacto Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={ e => setEmail(e.target.value)}
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={alta}
                        onChange={ e => setAlta(e.target.value)}
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea 
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los Síntomas"
                        value={sintomas}
                        onChange={ e => setSintomas(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value= {paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />
            </form>
        </div>
    )
}

export default Formulario
