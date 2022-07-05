import { useEffect, useState } from "react";
import Router, {useRouter} from "next/router";
import axios from "axios";

const UpdateAnggota = () => {
    const [_id, setId] = useState('');
    const [_nama, setNama] = useState('');
    const [_ttg, setTtg] = useState('');
    const [_asal, setAsal] = useState('');

    const router = useRouter();
    const {id, nama, ttg, asal} = router.query;


    useEffect(() => {
        if (typeof id =='string') {
            setId(id);
        }
        if (typeof nama =='string') {
            setNama(nama);
        }
        if (typeof ttg =='string') {
            setTtg(ttg);
        }
        if (typeof asal =='string') {
            setAsal(asal);
        }
    },[id, nama, ttg, asal])

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            axios
                .put(`http://localhost:5000/anggota/${_id}`, {
                    id :_id,
                    nama :_nama,
                    ttg :_ttg,
                    asal :_asal,
                })
                .then(response => {
                    console.log(response)
                });
            alert("Perubahan Data Sukses")
            Router.push('/admin/dataanggota')
        } catch (e) {
            console.log({message : e.message});
        }
    }


        return (
            <div>
                <div className="container mt-4">
                    <form className="w-50 mx-auto" onSubmit={submitHandler}>
                        <h1 className="w-75 text-center">
                            Edit Data Anggota IPNU IPPNU 
                        </h1>
                        <div className="w-75">
                            <div className="form-floating">
                                <input 
                                    className="form-control mb-2"
                                    id="id"
                                    placeholder="ID"
                                    type="text"
                                    value={_id}
                                    onChange={(e) => setId(e.target.value)}
                                />
                                <label htmlFor="id">ID</label>
                            </div>
                            <div className="form-floating">
                                <input className="form-control mb-2"
                                    id="nama"
                                    placeholder="Nama"
                                    type="text"
                                    value={_nama}
                                    onChange={(e) => setNama(e.target.value)}
                                />
                                <label htmlFor="nama">Nama</label>
                            </div>
                            <div className="form-floating">
                                <input className="form-control mb-2"
                                    id="ttg"
                                    placeholder="Ttg"
                                    type="text"
                                    value={_ttg}
                                    onChange={(e) => setTtg(e.target.value)}
                                />
                                <label htmlFor="ttg">Ttg</label>
                            </div>
                            <div className="form-floating">
                                <input className="form-control mb-2"
                                    id="asal"
                                    placeholder="Asal"
                                    type="text"
                                    value={_asal}
                                    onChange={(e) => setAsal(e.target.value)}
                                />
                                <label htmlFor="Asal">Asal</label>
                            </div>
                        </div>
                        <div className=" w-75 d-flex flex-row-reverse">
                            <button 
                            className="btn btn-primary" 
                            type="submit">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    export default UpdateAnggota;