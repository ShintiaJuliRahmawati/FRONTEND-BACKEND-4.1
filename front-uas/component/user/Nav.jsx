import Link from "next/link";
const Nav = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light  p-3 mb-2 bg-light text-white>.bg-light">
            <div className="container-fluid" style={{backgroundColor:"#0C4C31"}}>
                <a className="navbar-brand " style={{color:"white"}} href="#">
                    Home
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link href="/"><a className="nav-link active" aria-current="page" href="#" style={{color:"white"}}>Profil</a></Link>
                    </li>
                    <li className="nav-item" >
                        <Link href="/eventstate"><a className="nav-link" style={{color:"white"}}>Form Pendaftaran</a></Link> 
                    </li>
                    <li className="nav-item">
                        <Link href="/user/anggota"><a className="nav-link" style={{color:"white"}}>Anggota</a></Link> 
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true" style={{color:"white"}}>Disabled</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </div>
    )
}
export default Nav;