

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre, propietario, email, alta, sintomas}=paciente;

    const handleEliminar= () =>
    {
        const respuesta= confirm(`Deseas eliminar el registro número ${paciente.id} con nombre ${paciente.nombre}`)
        if(respuesta)
        {
            eliminarPaciente(paciente.id);
        }
    }
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case"> {nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case"> {email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
                <span className="font-normal normal-case"> {alta}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
                <span className="font-normal normal-case"> {sintomas}</span>
            </p>
            <button className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg" onClick={()=> setPaciente(paciente)} type="button"> Editar</button>
            <button className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg" onClick={handleEliminar} type="button"> Eliminar</button>
    </div>
  )
}

export default Paciente