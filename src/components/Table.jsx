import EditPromotor from "./EditPromotor.jsx";
import {useContext, useState} from "react";
import ModalSuccesfully from "./ModalSuccesfully.jsx";
import {Context} from "../context/context.jsx";

export default function Table() {
    const [open, setOpen] = useState(false)
    const {getPeticion, data} = useContext(Context);
    console.log(data)
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-8 flex flex-col">
                <div className="flex justify-end my-5">
                    <button className="bg-lime-500 py-2 text-white px-4 rounded-md" onClick={() => setOpen(true)}>Send</button>
                </div>
                <div className="flex justify-end my-5">
                    <button className="bg-lime-500 py-2 text-white px-4 rounded-md" onClick={() => getPeticion()}>Prueba Peticion</button>
                </div>
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                                    >
                                        Tienda
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Evento
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Ventas Cuota
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Ventas Cuota Final
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Num Promotor pred
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Num Promotor pred Edit
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        %DPV
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Ventas Faltantes
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-gray-200 bg-white">
                                <ModalSuccesfully open={open} setOpen={setOpen}/>
                                {data ? data.map((test,index) => {
                                    return(<tr key={index}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                                            {test.tienda}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{test.evento}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{test.ventas_cuota.toFixed(2)}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{test.VentasCuotaFinal ? test.VentasCuotaFinal : "0"}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{test.num_promotor_pred}</td>
                                        <EditPromotor data={test.num_promotor_pred} tienda={test.Tienda} id={index}/>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{test.DPV.toFixed(2)}%</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{test.ventas_faltantes.toFixed(2) == 0 ? "-" : test.ventas_faltantes.toFixed(2)}</td>
                                    </tr>
                                    )}) : <></>}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}