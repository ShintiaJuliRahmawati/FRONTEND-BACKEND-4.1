import "bootstrap/dist/css/bootstrap.min.css"
import DataPredikat from "../../component/admin/DataPredikat"
import PredikatById from "../../component/admin/PredikatById"
const datapredikat =({data}) =>{
    {Array.isArray(data)? data=data : data =[data]}
    return(
        <>
        <div>   
        <DataPredikat data ={data}/>
        </div>
        </>
    )
}

export async function getServerSideProps({query}) {
    const id = query.id;
    
    let url = 'http://localhost:5000/predikat'
    if (typeof id === 'string') {
        url = `http://localhost:5000/predikat/${id}`
    }
    
    const res = await fetch(url)
    const data = await res.json()
    return {props : {data}}
}

export default datapredikat;