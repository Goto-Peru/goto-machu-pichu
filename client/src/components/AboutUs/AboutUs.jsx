import styles from "./AboutUs.module.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FcApproval } from "react-icons/fc";

export default function AboutUs() {
  return (
    <div className={styles.cusco_container}>
      <h1 className={styles.title}>Sobre Nosotros</h1>
      <p>
        En Goto Machu Pichu, nos apasiona mostrar la increíble diversidad y belleza de Perú a viajeros de todo el mundo. Con más de 10 años de experiencia en la industria del turismo, nos hemos dedicado a crear experiencias memorables y auténticas para nuestros clientes.

        Nuestro equipo está formado por expertos locales que conocen cada rincón de Perú y están comprometidos en brindar un servicio excepcional. Desde las majestuosas ruinas de Machu Picchu hasta la enigmática belleza de la Amazonía peruana, estamos aquí para hacer que tu viaje sea único y lleno de momentos inolvidables.

        En Goto Machu Pichu, creemos en el turismo sostenible y en el respeto por las comunidades locales y el medio ambiente. Trabajamos en estrecha colaboración con socios locales para asegurarnos de que cada experiencia que ofrecemos sea auténtica, significativa y beneficiosa para todos.

        Ya sea que estés buscando una aventura emocionante, una escapada relajante o una experiencia cultural enriquecedora, estamos aquí para hacer que tu viaje a Perú sea inolvidable. ¡Únete a nosotros y descubre la magia de Perú con Goto Machu Pichu!
      </p>
      <div className={styles.img_container}>
        <img src="https://www.machupicchu-tours-peru.com/wp-content/uploads/2015/11/machu-picchu.jpg" alt="" />
      </div>
      <div className={styles.container_whyus}>
        <div>
        </div>
        <div className={styles.datas}>
          <div className={styles.sub_data}>
            <FcApproval className={styles.icons} />
            <h1 className={styles.why_sub}>
              Bienvenidos a Machu Picchu Perú Tours, donde la Pasión por Viajar se
              Convierte en Experiencias Únicas
            </h1>
            <p>
              En MPT, no solo organizamos viajes, creamos historias inolvidables.
              Nos definimos por nuestra pasión ardiente por la calidad y la
              autenticidad, diseñando experiencias de viaje personalizadas y
              exclusivas que trascienden las expectativas. Cada aventura que
              ofrecemos es una oportunidad para sumergirse en la esencia misma de
              los destinos, donde la autenticidad, la sostenibilidad y la riqueza
              cultural se entrelazan de manera inigualable.
            </p>
          </div>
          <div className={styles.sub_data}>
            <FcApproval className={styles.icons} />
            <h1 className={styles.why_sub}>
              Futuro de Excelencia y Crecimiento Sostenido
            </h1>
            <p>
              Miramos hacia el horizonte con una visión clara: ser líderes
              indiscutibles en la industria, comprometidos con la calidad y la
              seguridad para nuestros valiosos clientes. En MPT, no solo nos
              esforzamos por alcanzar la excelencia, sino que también trazamos un
              camino de crecimiento constante que nos llevará a nuevas alturas
              antes del 2030. Cada paso que damos es un testimonio de nuestro
              compromiso con tu satisfacción y seguridad.
            </p>
          </div>
          <div className={styles.sub_data}>
            <FcApproval className={styles.icons} />
            <h1 className={styles.why_sub}>
              Autenticidad, Sostenibilidad y Riqueza Cultural
            </h1>
            <p>
              En el corazón de nuestra filosofía está la creencia inquebrantable
              en la autenticidad, la sostenibilidad y la riqueza cultural de cada
              rincón de nuestro hermoso país. Nos esforzamos por resaltar y
              preservar la singularidad de cada destino, compartiendo la belleza
              inherente que solo se descubre al sumergirse en las tradiciones
              locales y la autenticidad de la vida cotidiana. En MPT, no solo
              viajamos; creamos conexiones significativas con el mundo que nos
              rodea. Únete a nosotros en esta emocionante travesía, donde cada
              experiencia es más que un viaje, es una expresión de la verdadera
              esencia de la vida.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
