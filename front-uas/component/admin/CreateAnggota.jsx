import { useState } from "react";
import axios from "axios";


const CreateAnggota = () => {
    const [id, setId] = useState('');
    const [nama, setNama] = useState('');
    const [ttg, setTtg] = useState('');
    const [asal, setAsal] = useState('');

    async function submitHandler(e) {
        e.preventDefault()
        try {
            axios
                .post("http://localhost:5000/anggota", {
                    id,
                    nama,
                    ttg,
                    asal,
                })
                .then(response => {
                    console.log(response)
                });
            alert("Penambahan Data Sukses")
            clearInput()
        } catch (e) {
            throw Error(e.message)
        }
    }

    const clearInput = () => {
        setId('')
        setNama('')
        setTtg('')
        setAsal('')
    }
        return (
            <div>
                <div className="container mt-4">
                    <form className="w-50 mx-auto" onSubmit={submitHandler}>
                        <h1 className="w-75 text-center">Input Anggota</h1>
                        <div className="w-75">
                            <div className="form-floating">
                                <input className="form-control mb-2"
                                    id="nim"
                                    placeholder="NIM"
                                    type="text"
                                    value={id}
                                    onChange={(e) => setId(e.target.value)}
                                />
                                <label htmlFor="id">ID</label>
                            </div>
                            <div className="form-floating">
                                <input className="form-control mb-2"
                                    id="nama"
                                    placeholder="Nama"
                                    type="text"
                                    value={nama}
                                    onChange={(e) => setNama(e.target.value)}
                                />
                                <label htmlFor="nama">Nama</label>
                            </div>
                            <div className="form-floating">
                                <input className="form-control mb-2"
                                    id="ttg"
                                    placeholder="Ttg"
                                    type="text"
                                    value={ttg}
                                    onChange={(e) => setTtg(e.target.value)}
                                />
                                <label htmlFor="ttg">Ttg</label>
                            </div>
                            <div className="form-floating">
                                <input className="form-control mb-2"
                                    id="asal"
                                    placeholder="Asal"
                                    type="text"
                                    value={asal}
                                    onChange={(e) => setAsal(e.target.value)}
                                />
                                <label htmlFor="Asal">Asal</label>
                            </div>
                        </div>
                        <div className=" w-75 d-flex flex-row-reverse">
                            <button className="btn btn-primary" type="submit">Simpan</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    export default CreateAnggota;