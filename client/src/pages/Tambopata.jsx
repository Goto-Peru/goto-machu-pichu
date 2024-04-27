import Navbar from "../components/Navbar/Navbar";
import TambopataComponent from "../components/Tambopata/Tambopata";
import Footer from "../components/Footer/Footer";


export default function Tambopata() {
    return (
        <div>
            <Navbar/>

            <div>
                <TambopataComponent/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}