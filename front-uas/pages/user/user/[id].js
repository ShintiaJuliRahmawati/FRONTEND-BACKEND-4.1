import { useRouter } from "next/router"
const id = () =>{
    const data_anggota =[ 
        {id : '11100101', predikat : 'A'},
        {id : '11100102', predikat : 'AB'},
        {id : '11100103', predikat : 'B'}
      ];
    const router = useRouter();
    const {id} = router.query;
    const data = data_anggota.find(m => m.id == id)
    return(
        <>
        <p>id : {id}</p>
        <p>Predikat : {data.predikat}</p>
        </>
    )
}

export default id;