import Link from "next/dist/client/link";
import Nav from "../component/user/Nav" 
import { useRouter } from "next/router";
import UserLayout from "../component/user/UserLayout";
export default function Home() {
  const data_anggota =[ 
    {id : '11100101', nama : 'Shintia Juli Rahmawati'},
    {id : '11100102', nama : 'Akhlakul Karimah'},
    {id : '11100103', nama : 'Novita Sari'}
  ];
  const router = useRouter()
  const sendParamRouter = (id) =>{
    router.push(`/user/${id}`)    
  }
  return (
    <div>
      <UserLayout>
      <main>
        <h3>Daftar Anggota</h3>
        <ul>
          {data_anggota.map((agt,idx)=>(
            <>
            <li key={idx}>
              <Link href={`/user/${agt.id}`}>
              {agt.id}
              </Link>
              <p>{agt.nama}</p>
              <button className="btn- btn-primary" onClick={(e) =>sendParamRouter(agt.id)}>Cek Nilai</button>
            </li>
            </>
          ))}
        </ul>
      </main>
      </UserLayout>
    </div>
    
  )
}
