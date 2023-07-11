import {PencilIcon} from "@heroicons/react/24/outline/index.js";
import Modal from "./Modal.jsx";
import {useState} from "react";


export default function EditPromotor({data, tienda}) {
    const [modal2, setmodal2] = useState(false);
    return(
        <td className="flex whitespace-nowrap px-3 py-4 text-sm text-gray-500 bg-mabegreen justify-between space-between hover:bg-mabehover hover:text-white ">{data}
            <div onClick={() => setmodal2(true)}><PencilIcon  className="mr-4 h-5 w-5 flex-shrink-0 hover:text-lime-500" aria-hidden="true" /></div>
            <Modal open={modal2} setOpen={setmodal2} Tienda={tienda}/>
        </td>
    )
}