import {Fragment, useContext, useRef, useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import {Context} from "../context/context.jsx";

export default function Modal({open, setOpen, Tienda, change, id}) {
    const [newValor, setNewValor] = useState(0)
    const {TiendaEdit, data} = useContext(Context);

    const [tiendaEdit, setTiendaEdit] = useState(
        {
            DPV: data[id].DPV,
            costo_promedio_promotor: data[id].costo_promedio_promotor,
            costo_total_promotores: data[id].costo_total_promotores,
            evento: data[id].evento,
            num_promotor_pred: data[id].num_promotor_pred,
            num_promotor_pred_edit: 0,
            tienda: data[id].tienda,
            ventas_cuota: data[id].ventas_cuota,
            ventas_cuota_final: 0,
            ventas_faltantes: data[id].ventas_faltantes,
            ventas_para_objetivo: data[id].ventas_para_objetivo
        }
    )

    const handleChange = (e) => {
        setNewValor(e.target.value)
        setTiendaEdit({...tiendaEdit, num_promotor_pred_edit: e.target.value})
        console.log(tiendaEdit)
    }


    function handleSubmit (){
        change(newValor)
        setOpen(false)
        TiendaEdit(tiendaEdit, id)
        console.log(tiendaEdit)
    }

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                Model Test {Tienda}
                                            </Dialog.Title>
                                            <div className="my-8">
                                                <form onSubmit={handleSubmit}>
                                                    <div>
                                                        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                                            Numero de Promotores Pred
                                                        </label>
                                                        <div className="relative mt-2 rounded-md shadow-sm">
                                                            <input
                                                                onChange={handleChange}
                                                                type="number"
                                                                name="num"
                                                                id="num"
                                                                value={newValor}
                                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                placeholder="0.00"
                                                            />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                        onClick={() => setOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-mabecolor px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-mabehover sm:mt-0 sm:w-auto"
                                        onClick={() => handleSubmit()}
                                        ref={cancelButtonRef}
                                    >
                                        Apply
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
