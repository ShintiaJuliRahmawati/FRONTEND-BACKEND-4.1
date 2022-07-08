import LayoutAdmin from "./LayoutAdmin";
import Router, {useRouter} from "next/router";
import PredikatById from "./PredikatById";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";


const AllPredikat = ({data}) => {
    const [message, setMessage] = useState(false)
    const router = useRouter()
    async function hapusAnggota(id){
        try{
            const response = await axios.delete(
                `http://localhost:5000/predikat/${id}`
            );
            if (response.data.message) {
                setMessage(response.data.message);
            }
            alert(`Predikat dengan ID ${id} telah dihapus`)
        } catch (error) {
            console.log({message: error.message});
        }
        router.push('/admin/allpredikat/')
    }


    return (
        <>
        <LayoutAdmin>
            <div className="container mt-3">
                <h2>Predikat Nilai</h2>
                <PredikatById/> 
                 <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>KdTk</th>
                            <th>Tahun</th>
                            <th>Penyelenggara</th>
                        </tr>
                    </thead>
                    <tbody>
                            {data.map((pdt,idx)=>(
                                <tr key ={idx}>
                                    <td>{pdt.id}</td>
                                    <td>{pdt.kdTk}</td>
                                    <td>{pdt.tahun}</td>
                                    <td>{pdt.peyelenggara}</td>
                                    <td>
                                        <Link href={`/admin/updateanggota?id=${pdt.id}
                                        &nama${pdt.id}
                                        &ttg${pdt.kdTk}f
                                        &asal${pdt.tahun}
                                        &penyelenggara${pdt.peyelenggara}
                                        `}>
                                        
                                            <a class="btn btn-outline-success" role="button">Edit</a>
                                        </Link>
                                    </td>
                                    <td>
                                        <button type="button" value={pdt.id}
                                            onClick={(e) => hapusAnggota(e.target.value)}
                                            class="btn btn-danger btn-md">Hapus</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </LayoutAdmin>
        </>
    )
}
export default AllPredikat;