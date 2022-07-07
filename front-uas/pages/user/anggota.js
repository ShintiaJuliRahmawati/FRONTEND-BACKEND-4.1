import "bootstrap/dist/css/bootstrap.min.css"
import DataAnggota from "../../component/admin/DataAnggota"
import DataAnggota1 from "../../component/user/Anggota"
import UserLayout from "../../component/user/UserLayout"
const anggota =({data}) =>{
    {Array.isArray(data)? data=data : data =[data]}
    return(
        <>
        <div>
        <UserLayout>
        <DataAnggota1 data={data}/>
        </UserLayout>
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

export default anggota;