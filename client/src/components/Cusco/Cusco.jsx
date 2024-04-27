import styles from "./Cusco.module.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function Cusco() {
  return (
    <div className={styles.cusco_container}>
      <h1 className={styles.title}>Tours en Cusco</h1>
      <p>
        Conoce nuestra amplia selección de{" "}
        <strong> paquetes turísticos y Tours en Cusco.</strong>
      </p>
      <p></p>
      <p>
        Excursiones, actividades y paquetes turísticos creados para viajeros que
        desean explorar lo mejor del Cusco en pocas horas o simplemente
        disfrutar de sus vacaciones de la mano de nuestro equipo de expertos
        profesionales locales.
      </p>
      <p>Recuerda que somos un operador turístico local certificado</p>
      <p>
        <strong>
          ¡Nuestras políticas son 100% flexibles, y nuestras tarifas son
          directas!
        </strong>
      </p>

      <p>
        <strong> ¿De vacaciones?</strong> Vive el sueño de visitar una de las
        ciudades más hermosas del Perú, con nuestros paquetes turísticos y tours
        a Cusco.
      </p>
      <p>
        En <strong>Machu Picchu Peru Tours</strong> te damos las mejores
        opciones para reservas tus
      </p>
      <p>
        paquetes y <strong>tours en Cusco</strong>, podrás visitar la Montaña de
        7 Colores, la Laguna
      </p>
      <p>
        Humantay, La Salinera de Maras – Moray, hacer un city tour en Cusco,
        etc.
      </p>
      <div>
        <Splide
          options={{
            type: "slide",
            perPage: 1,
            perMove: 1,
            gap: "1rem",
            pagination: false,
            autoplay: true,
            pauseOnHover: true,
          }}
          className={styles.carrusel_container}
        >
          <SplideSlide className={styles.carrusel}>
            <Card sx={{ width: 500,  }}>
              <CardMedia
              sx={{ width: 500, height: 800}}
                component="img"
                image="https://www.machupicchuperutours.com/wp-content/uploads/VINIVUNCA-768x678.jpg"
                alt="Paella dish"
              />
            </Card>
          </SplideSlide>
          <SplideSlide className={styles.carrusel}>
            <Card sx={{ width: 500 }}>
              <CardMedia
             sx={{ width: 500, height: 800}}
                component="img"
                image="https://www.machupicchuperutours.com/wp-content/uploads/Machu-Picchu-full-day-1-2-595x793.jpg"
                alt="Paella dish"
              />
            </Card>
          </SplideSlide>
          <SplideSlide className={styles.carrusel}>
            <Card sx={{ width: 500 }}>
              <CardMedia
             sx={{ width: 500, height: 800}}
                component="img"
                image="https://www.machupicchuperutours.com/wp-content/uploads/Cuatrimotos-Laguna-y-Maras-595x744.jpg"
                alt="Paella dish"
              />
            </Card>
          </SplideSlide>
          <SplideSlide className={styles.carrusel}>
            <Card sx={{ width: 500 }}>
              <CardMedia
                sx={{ width: 500, height: 800}}
                component="img"
                image="https://www.machupicchuperutours.com/wp-content/uploads/Moray-2-595x397.jpg"
                alt="Paella dish"
              />
            </Card>
          </SplideSlide>
          <SplideSlide className={styles.carrusel}>
            <Card sx={{ width: 500 }}>
              <CardMedia
            sx={{ width: 500, height: 800}}
                component="img"
                image="https://www.machupicchuperutours.com/wp-content/uploads/Vista-panoramico-Huchuy-Qosqo.jpg.webp"
                alt="Paella dish"
              />
            </Card>
          </SplideSlide>
          <SplideSlide className={styles.carrusel}>
            <Card sx={{ width: 500 }}>
              <CardMedia
              sx={{ width: 500, height: 800}}
                component="img"
                image="https://www.machupicchuperutours.com/wp-content/uploads/montana-7-colores-3-595x744.jpg"
                alt="Paella dish"
              />
            </Card>
          </SplideSlide>
          <SplideSlide className={styles.carrusel}>
            <Card sx={{ width: 500 }}>
              <CardMedia
        sx={{ width: 500, height: 800}}
                component="img"
                image="https://www.machupicchuperutours.com/wp-content/uploads/Train-Perurail-595x893.jpg"
                alt="Paella dish"
              />
            </Card>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}
