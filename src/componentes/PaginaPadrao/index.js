import Banner from "componentes/Banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao(){
    return (
        <main>
            <Banner>

            </Banner>
            <Outlet>
                
            </Outlet>
        </main>
    );
}