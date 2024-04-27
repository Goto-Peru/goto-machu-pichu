import Navbar from "../components/Navbar/Navbar";
import PunoComponent from "../components/Puno/Puno";
import Footer from "../components/Footer/Footer";


export default function Puno() {
    return (
        <div>
            <Navbar/>

            <div>
                <PunoComponent/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}