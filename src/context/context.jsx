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

    return (
        <Context.Provider
            value={{
                getPeticion,
                data,
                setData,
                valor,
                setValor
            }}>
            {children}
        </Context.Provider>
    );
};