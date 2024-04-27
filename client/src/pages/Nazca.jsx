import Navbar from "../components/Navbar/Navbar";
import NazcaComponent from "../components/Nazca/Nazca";
import Footer from "../components/Footer/Footer";



export default function Nazca() {
    return (
        <div>
            <Navbar/>
            <div> 
<NazcaComponent/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}