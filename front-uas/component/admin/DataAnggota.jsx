import LayoutAdmin from "./LayoutAdmin";
import AnggotaById from "./AnggotaById";
import Router, {useRouter} from "next/router";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";


const DataAnggota = ({data}) => {
    const [message, setMessage] = useState(false)
    const router = useRouter()
    async function hapusAnggota(id){
        try{
            const response = await axios.delete(
                `http://localhost:5000/anggota/${id}`
            );
            if (response.data.message) {
                setMessage(response.data.message);
            }
            alert(`Anggota dengan ID ${id} telah dihapus`)
        } catch (error) {
            console.log({message: error.message});
        }
        router.push('/admin/dataanggota')
    }

    

    return (
        <>
        <LayoutAdmin>
            <div className="container mt-3">
                <h2>Data Anggota</h2>
                <AnggotaById/>
                 <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nama</th>
                            <th>Tempat, Tanggal Lahir</th>
                            <th>Asal</th>
                        </tr>
                    </thead>
                    <tbody>
                            {data.map((agt,idx)=>(
                                <tr key ={idx}>
                                    <td>{agt.id}</td>
                                    <td>{agt.nama}</td>
                                    <td>{agt.ttg}</td>
                                    <td>{agt.asal}</td>
                                    <td>
                                        <Link href={`/admin/updateanggota?id=${agt.id}
                                        &nama${agt.nama}
                                        &ttg${agt.ttg}
                                        &asal${agt.asal}`}>
                                            <a class="btn btn-outline-success" role="button">Edit</a>
                                        </Link>
                                    </td>
                                    <td>
                                        <button type="button" value={agt.id}
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
export default DataAnggota;