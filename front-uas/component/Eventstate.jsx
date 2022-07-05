import { useState } from 'react'

const Evenstate = () => {
    
    const [nama, setNama] = useState('')
    const [alamat, setAlamat] = useState('')
    const [gender, setGender] = useState('')
    const [tingkatan, setTingkatan] = useState('')
    const [presKader, setPresKader] = useState('false')
    return (
        <div className="container m-4">
            <div className="row">
                <div className="col-5">
                    <h3>FORM PENDAFTARAN</h3>
                    <h3>Anggota IPNU IPPNU</h3> <hr />
                    <div className="md-2">
                        <label htmlFor="nama">Nama :</label>
                        <input className="form-control" type="text" name="nama" id="nama" value={nama} onChange = {(e)=>setNama(e.target.value)}/>
                    </div>
                    <br />
                    <div className="md-2">
                        <label htmlFor="nama">Alamat : </label>
                        <input className="form-control" type="text" name=" alamat" id="alamat" value={alamat} onChange = {(e)=>setAlamat(e.target.value)}/>
                    </div>
                    <br />
                    <div className="md-3">
                        <label htmlFor="nama" className='fs-5'>Gender : </label>
                        <br /> 
                        <div className='form-check-inline'>
                        <input className="form-check-input" type="radio" name="gender" id="genderPria" checked={()=>setGender('pria')} value="Pria" onChange = {(e)=>setGender(e.target.value)}/>
                        <label htmlFor="" className='form-check-label'> Pria</label>
                        </div>
                        <div className='form-check-inline'>
                        <input className="form-check-input" type="radio" name="gender" id="genderWanita" checked={()=>setGender('wanita')} value="Wanita" onChange = {(e)=>setGender(e.target.value)}/>
                        <label htmlFor="" className='form-check-label'> Wanita</label>
                        </div>
                    </div>
                    <br />
                    <div className="md-2">
                        <label htmlFor="" className='fs-5'>Tingkatan Kader</label>
                        <select name="tingkatan kader" id="" className='form-select' value= {tingkatan} onChange={(e)=>setTingkatan(e.target.value)} >
                            <option value="Makesta">Makesta</option>
                            <option value="Lakmud">Lakmud</option>
                            <option value="Latpel">Latpel</option>
                            <option value="Lakut">Lakut</option>
                        </select>
                    </div>
                    <br />
                    <div className='md-2'>
                        <label htmlFor="" className='fs-5'>Prestasi Kader</label>
                        <div className='form-check form check-inline'>
                        <input type="checkbox" className='form-check-input' name='preskader' id='preskader' checked ={presKader} onChange= {(e)=>setPresKader(e.target.checked)}/>
                        <label htmlFor="" className='form-check-label'>Prestasi Kader</label>
                        </div>               
                    </div>
                </div>
                <div className="col-7">
                    <h3>Resume</h3> <hr />
                    <div className="md-2">
                        <h5 className="mb-2">Nama : {nama}</h5>
                    </div>
                    <br />
                    <div className="md-2">
                        <h5 className="mb-2">Alamat : {alamat}</h5>
                    </div>
                    <br />
                    <div className="md-2">
                        <h5 className="mb-2">Gender : {gender}</h5>
                    </div>
                    <br />
                    <div className="md-2">
                        <h5 className="mb-2">Tingkatan Kader : {tingkatan}</h5>
                    </div>
                    <br />
                    <div className='md-2'>
                    <h5>Prestasi Akademik Kader: {presKader ? 'ada' : '-'}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Evenstate;