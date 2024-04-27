import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import styles from "./Details.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DetailsTuristic, PaymentTuristic,dataPersonal  } from "../../redux/action";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src:
        "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src:
        "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src:
        "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src:
        "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
export default function Details() {
  const { turisticId } = useParams();
  const detailsturistic = useSelector((state) => state.detailsturistic.data);
  const payment = useSelector((state) => state.payment.data);
  console.log(payment)
  
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const datapersonal = useSelector((state) => state.datapersonal);
  const [reservation, setReservation] = useState({
    name: datapersonal ? datapersonal.name : "",
    phone: datapersonal ? datapersonal.phone : "",
    email: datapersonal ? datapersonal.email : "",
    date: ""
  });
  
  useEffect(() => {
    if (datapersonal) {
      setReservation({
        ...reservation,
        name: datapersonal.name,
        phone: datapersonal.phone,
        email: datapersonal.email
      });
    }
  }, [datapersonal]);
  
  useEffect(() => {
    dispatch(DetailsTuristic(turisticId));
  }, [dispatch, turisticId]);

  useEffect(() => {
    dispatch(dataPersonal(token));
  }, [dispatch]);


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (!token) {
        alert("Iniciar sesión antes de hacer una reservación")
      } else {

        await dispatch(PaymentTuristic(turisticId, reservation));
      }
    
    } catch (error) {
      console.error('Error :', error);
    }
  }

  useEffect(() => {
    if (payment) {
      window.location.href = payment
    }
  }, [payment]);
  

  const handleChange = (e) => {
    setReservation({
      ...reservation,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className="bg-white">
      <div className="pt-6">
        <h1 className={styles.title}>
          {detailsturistic && detailsturistic.name}
        </h1>

        <div
          className={`mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8 ${styles.galery_mobile}`}
        >
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <Splide
          options={{
            type: "slide",
            perPage: 3,
            perMove: 3,
            gap: "1rem",
            pagination: false,
            autoplay: true,
            pauseOnHover: true,
          }}
          className={styles.carrusel}
        >
          {detailsturistic &&
            detailsturistic.imageFile.map((data) => (
              <SplideSlide>
                <Card sx={{ width: 500 }}>
                  <CardMedia
                    component="img"
                    height="194"
                    image={data}
                    alt="Paella dish"
                  />
                </Card>
              </SplideSlide>
            ))}
        </Splide>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Detalles
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {" "}
              US$ {detailsturistic && detailsturistic.price}
            </p>

            <form className="mt-10" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nombre Completo
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    disabled
                    value={reservation.name}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${styles.input}`}
                   onChange={handleChange}
                 />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Correo electrónico
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={reservation.email}
                    disabled
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6 ${styles.input}`}
                    onChange={handleChange}
                 
                 />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Telefóno
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                   
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6 ${styles.input}`}
                    value={reservation.phone}

                    disabled
                    onChange={handleChange}
                  
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Fecha de reservación
                </label>
                <div className="mt-2">
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6 ${styles.input}`}
                    onChange={handleChange}
                    value={reservation.date}
                 
                 />
                </div>
              </div>

              <button
                type="submit"
                className={`mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700  ${styles.btn}`}
              >
                Reservar
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  {" "}
                  {detailsturistic && detailsturistic.details}
                </p>
              </div>
            </div>

            {/*        <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}

            {/*       <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
