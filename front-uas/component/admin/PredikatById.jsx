import { useState } from "react";
import {useRouter} from "next/router"

const PredikatById = () =>{
    const [id, setId] = useState('')
    const router = useRouter()
    const getPdtById = (e) =>{
        e.preventDefault();
        console.log(id)
        router.push({
            pathname : 'datapredikat',
            query : {'id': id}
        })
    }
    return(
        <div className="container">
            <form onSubmit={getPdtById}>
                <div className="row"> 
                <div className="col-8"> </div>
                <div className="col d-flex flex-reverse">
                        <input type='text' className="form-control" placeholder="Cari Predikat by id" value={id} onChange={(e)=>setId(e.target.value)}/>
                        <input type="submit" value="Cari"  className="btn btn-dark ms-1 fs-6"/>
                </div>
                </div>
            </form>
        </div>
    )
}

export default PredikatById;
