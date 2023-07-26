import {createContext, useState, useEffect} from "react";
import axios from "axios";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [data, setData] = useState("")
    const [valor, setValor] = useState()
    const getPeticion = async () => {
        await axios
            .get("http://127.0.0.1:8000/Prueba")
            .then(({ data }) => {
                console.log(data)

                setData(data.df)
            }).catch(function (error){
                console.log(error)
            })
    };

    const modificarObjeto = (id, valores) => {
        const {DPV, Ventas_Cuota_Final, Ventas_Faltantes} = valores;
        console.log(id)

        // Si se encuentra el objeto, se modifica su valor y se actualiza el estado
        if (id !== -1) {
            const objetoModificado = {
                ...data[id],
                ventas_faltantes: Ventas_Faltantes,
                ventas_cuota_final: Ventas_Cuota_Final,
                DPV: DPV

            };

            // Crear una copia del arreglo de datos y reemplazar el objeto modificado
            const datosActualizados = [...data];
            datosActualizados[id] = objetoModificado;

            // Actualizar el estado con el nuevo arreglo de datos
            setData(datosActualizados);
        }
    };

    useEffect(() => {
        getPeticion();
    }, []);


    const TiendaEdit= async(tienda, id) => {
        await axios.post('http://127.0.0.1:8000/Prueba2', tienda)
            .then( function (response) {
                console.log(response.data)
            modificarObjeto(id, response.data)

            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <Context.Provider
            value={{
                getPeticion,
                data,
                setData,
                valor,
                setValor,
                TiendaEdit
            }}>
            {children}
        </Context.Provider>
    );
};