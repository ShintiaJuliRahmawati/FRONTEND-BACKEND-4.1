import { useState } from "react";
import {useRouter} from "next/router"

const AnggotaById = () =>{
    const [id, setId] = useState('')
    const router = useRouter()
    const getAgtById = (e) =>{
        e.preventDefault();
        console.log(id)
        router.push({
            pathname : 'dataanggota',
            query : {'id': id}
        })
    }
    return(
        <div className="container">
            <form onSubmit={getAgtById}>
                <div className="row"> 
                <div className="col-8"> </div>
                <div className="col d-flex flex-reverse">
                        <input type='text' className="form-control" placeholder="Cari Anggota by id" value={id} onChange={(e)=>setId(e.target.value)}/>
                        <input type="submit" value="Cari"  className="btn btn-dark ms-1 fs-6"/>
                </div>
                </div>
            </form>
        </div>
    )
}

export default AnggotaById;
