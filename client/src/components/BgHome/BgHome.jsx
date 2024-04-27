import { useNavigate } from "react-router-dom";
import styles from "./BgHome.module.css";

export default function BgHome() {
  const navigate = useNavigate();
  return (
    <div className={styles.bg_home}>
      <div className={styles.btn_tour}>
        <h1 className={styles.title}>Machu Picchu Perú Tours</h1>

        <button
          type="submit"
          className={`flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${styles.btn}`}
          href="/tour"
          onClick={() => navigate("/sobre-nosotros")}
        >
          SOBRE NOSOTROS 
        </button>
      </div>
    </div>
  );
}
