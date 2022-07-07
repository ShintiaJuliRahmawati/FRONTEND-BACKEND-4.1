import LayoutAdmin from "./LayoutAdmin";
import PredikatById from "./PredikatById";
import Router, {useRouter} from "next/router";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";


const DataPredikat = ({data}) => {
    const [message, setMessage] = useState(false)
    const router = useRouter()

    return (
        <>
        <LayoutAdmin>
            <div className="container mt-3">
                <h2>Data Predikat Nilai</h2>
                <PredikatById/> 
                 <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>nama</th>
                            <th>kdTk</th>
                            <th>tahun</th>
                            <th>predikat</th>
                            <th>keterangan</th>
                        </tr>
                    </thead>
                    <tbody>
                            {data.map((pdt,idx)=>(
                                <tr key ={idx}>
                                    <td>{pdt.id}</td>
                                    <td>{pdt.nama}</td>
                                    <td>{pdt.kdTk}</td>
                                    <td>{pdt.tahun}</td>
                                    <td>{pdt.predikat}</td>
                                    <td>{pdt.keterangan}</td>
                    
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </LayoutAdmin>
        </>
    )
}
export default DataPredikat;