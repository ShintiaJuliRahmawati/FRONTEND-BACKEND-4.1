import "bootstrap/dist/css/bootstrap.min.css"
import DataAnggota from "../../component/admin/DataAnggota"
const dataanggota =({data}) =>{
    {Array.isArray(data)? data=data : data =[data]}
    return(
        <>
        <div>
        <DataAnggota data ={data}/>
        </div>
        </>
    )
}

export async function getServerSideProps({query}) {
    const id = query.id;
    
    let url = 'http://localhost:5000/anggota'
    if (typeof id === 'string') {
        url = `http://localhost:5000/anggota/${id}`
    }
    
    const res = await fetch(url)
    const data = await res.json()
    return {props : {data}}
}

export default dataanggota;