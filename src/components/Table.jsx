import EditPromotor from "./EditPromotor.jsx";
import {useState} from "react";
import ModalSuccesfully from "./ModalSuccesfully.jsx";

const test = [
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'GUADALAJARA', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CDMX', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'JALISCO', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'VERACRUZ', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
    { Tienda: 'CD JARDIN', Evento: 'QUINCENA MABE', VentasCuota:  743930 , VentasCuotaFinal: 743930, NumPromotorPred: 743930, NumPromotorPredEdit: 0, DPV: 0, VentasFaltantes: 0 },
]
export default function Table() {
    const [open, setOpen] = useState(false)
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-8 flex flex-col">
                <div className="flex justify-end my-5">
                    <button className="bg-lime-500 py-2 text-white px-4 rounded-md" onClick={() => setOpen(true)}>Send</button>
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
                                {test.map((test) => (
                                    <tr key={test.Tienda}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                                            {test.Tienda}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{test.Evento}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{test.VentasCuota}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{test.VentasCuotaFinal}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{test.NumPromotorPred}</td>
                                        <EditPromotor data={test.NumPromotorPredEdit} tienda={test.Tienda}/>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{test.DPV}%</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{test.VentasFaltantes == 0 ? "-" :  test.VentasFaltantes}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}