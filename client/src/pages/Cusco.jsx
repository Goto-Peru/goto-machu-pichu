import Navbar from "../components/Navbar/Navbar";
import CuscoComponent from "../components/Cusco/Cusco";
import Footer from "../components/Footer/Footer";


export default function Cusco() {
    return (
        <div>
            <Navbar/>

            <div>
                <CuscoComponent/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}