import React from "react";
import LayoutAdmin from "../../component/admin/LayoutAdmin";
import CreateAnggota from "../../component/admin/CreateAnggota";
const createanggota = () => {
    return(
        <LayoutAdmin>
            <div>
            <CreateAnggota/>
            </div>
        </LayoutAdmin>
    )
}

export default createanggota;