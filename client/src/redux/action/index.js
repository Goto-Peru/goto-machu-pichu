import axios from 'axios'







/* http://localhost:3001/ */

/* http://localhost:3001 */
 export const RegisterUser = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3001/api/register', payload);

      // Aquí podrías despachar una acción indicando que el registro fue exitoso
      dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });

      return response; // Devolver la respuesta para su procesamiento en el componente
    } catch (error) {
      // Manejar errores aquí si es necesario
      console.error(error);

      // Aquí podrías despachar una acción indicando que el registro falló
      dispatch({ type: 'REGISTER_FAILURE', payload: error });

      throw error; // Puedes lanzar el error para que el componente también lo maneje si es necesario
    }
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/api/login", {
        email,
        password,
      });

      if (response.status === 200 && response.data.token) {
        localStorage.setItem("token", response.data.token);

        dispatch({
          type: "LOGIN_SUCCESS",
          payload: {
            token: response.data.token,
            role: response.data.role,
          },
        });

        return true; // Autenticación exitosa
      } else {
        throw new Error("Error durante el inicio de sesión.");
      }
    } catch (error) {
      dispatch({ type: "LOGIN_ERROR" });
      return false; // Autenticación fallida
    }
  };
};


// actions/authActions.js

export const logout = () => {
return {
  type: 'LOGOUT',
};
};






export const dataPersonal = (token) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        "http://localhost:3001/api/datapersonal",
        {
          method: "GET",
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.data;
      return dispatch({
        type: "DATA_PERSONAL",
        payload: data,
      });
    } catch (error) {
      console.error('Error no existe el token:', error);
    }
  };
};

export const postTuristic = (token, payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('http://localhost:3001/api/post-turistic', payload,  {
        headers: {
          Authorization: `${token}`,
        },
      });
      const data = res.data;
      dispatch({
        type: "POST_TURISTIC",
        payload: data
      });
    } catch (error) {
      console.error('Error al crear una publicación:', error);
      // Puedes dispatchar una acción de error si es necesario.
    }
  };
};

export const AllTuristic = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('http://localhost:3001/api/turistics');
      const data = res.data;

      dispatch({
        type: "ALL_TURISTIC",
        payload: data
      });
    } catch (error) {
      console.error('Error al mostrar las publicaciónes:', error);
      // Puedes dispatchar una acción de error si es necesario.
    }
  };
};

export const AllReservations = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('http://localhost:3001/api/reservations');
      const data = res.data;

      dispatch({
        type: "ALL_RESERVATION",
        payload: data
      });
    } catch (error) {
      console.error('Error al mostrar las publicaciónes:', error);
      // Puedes dispatchar una acción de error si es necesario.
    }
  };
};

export const DetailsTuristic = (turisticId) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:3001/api/turistic/${turisticId}`);
      const data = res.data;

      dispatch({
        type: "DETAILS_TURISTIC",
        payload: data
      });
    } catch (error) {
      console.error('Error al mostrar los detalles:', error);
      // Puedes dispatchar una acción de error si es necesario.
    }
  };
};
export const DetailsReservation = (turisticId) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:3001/api/reservation/${turisticId}`);
      const data = res.data;

      dispatch({
        type: "DETAILS_RESERVATION",
        payload: data
      });
    } catch (error) {
      console.error('Error al mostrar los detalles de la reservación:', error);
    }
  };
};
export const DeleteTuristic = (turisticId) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`http://localhost:3001/api/turistic/${turisticId}`);
      const data = res.data;

      dispatch({
        type: "DELETE_TURISTIC",
        payload: data
      });
    } catch (error) {
      console.error('Error al mostrar los detalles:', error);
      // Puedes dispatchar una acción de error si es necesario.
    }
  };
};


export const PaymentTuristic = (turisticId, payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:3001/api/payment/${turisticId}`, payload);
      const data = res.data;

      dispatch({
        type: "PAYMENT_TURISTIC",
        payload: data
      });
    } catch (error) {
      console.error('Error al RESERVAR EL LUGAR:', error);
      // Puedes dispatchar una acción de error si es necesario.
    }
  };
};
export const UpdateTuristic = (turisticId, payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`http://localhost:3001/api/turistic/${turisticId}`, payload);
      const data = res.data;
      dispatch({
        type: "UPDATE_TURISTIC",
        payload: data
      });
    } catch (error) {
      console.error('Error al actualizar publicación turística:', error);
    }
  };
};

export const CotizationTuristic = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:3001/api/cotization`, payload);
      const data = res.data;

      dispatch({
        type: "COTIZATION_TURISTIC",
        payload: data
      });
    } catch (error) {
      console.error('Error al enviar la cotización:', error);
      // Puedes dispatchar una acción de error si es necesario.
    }
  };
};

export const ContactUsTuristic = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:3001/api/contact-us`, payload);
      const data = res.data;

      dispatch({
        type: "CONTACTUS_TURISTIC",
        payload: data
      });
    } catch (error) {
      console.error('Error al contactarnos:', error);
      // Puedes dispatchar una acción de error si es necesario.
    }
  };
};









export const DeleteAccount = (token) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3001/api/deleteaccount', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Error al eliminar la cuenta');
    }

    // Eliminar el token de localStorage
    localStorage.removeItem('token');

    // Despachar alguna acción de éxito si es necesario
    dispatch({ type: 'DELETE_ACCOUNT_SUCCESS' });

    // Redireccionar a otra página si es necesario
    window.location.href = '/';

  } catch (error) {
    console.error('Error al eliminar la cuenta:', error);
    // Despachar alguna acción de error si es necesario
    dispatch({ type: 'DELETE_ACCOUNT_ERROR', payload: error.message });
  }
};





















export const deleteProduct= (productId) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`http://localhost:3001/api/delete/${productId}`);
      const data = res.data;
      dispatch({
        type: "DELETE_PRODUCT",
        payload: data
      });
    } catch (error) {
      console.error('Error al ver la orden:', error);
    }
  };
};


export const AllUsers= (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.get('http://localhost:3001/api/users', payload);
      const data = res.data;

      dispatch({
        type: "ALL_USERS",
        payload: data
      });
    } catch (error) {
      console.error('Error al mostrar las publicaciónes:', error);
      // Puedes dispatchar una acción de error si es necesario.
    }
  };
};


export const ProductDetail= (productId) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:3001/api/product/${productId}`);
      const data = res.data;

      dispatch({
        type: "PRODUCT_DETAILS",
        payload: data
      });
    } catch (error) {
      console.error('Error al mostrar los detalles:', error);
    }
  };
};

export const PaymentPaypal= (productId) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:3001/api/create-payment/${productId}`);
      const data = res.data;
window.location.href = data.links[1].href
      dispatch({
        type: "PAYMENT_PAYPAL",
        payload: data
      });
    } catch (error) {
      console.error('Error al al pagar on paypal:', error);
    }
  };
};

export const Order= (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:3001/api/order`, payload);
      const data = res.data;
      dispatch({
        type: "ORDER",
        payload: data
      });
    } catch (error) {
      console.error('Error al crear la orden:', error);
    }
  };
};

export const AllOrder= () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:3001/api/orders`);
      const data = res.data;
      dispatch({
        type: "ALL_ORDER",
        payload: data
      });
    } catch (error) {
      console.error('Error al mostrar todas las ordenes:', error);
    }
  };
};

export const OneOrder= (orderId) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:3001/api/order/${orderId}`);
      const data = res.data;
      dispatch({
        type: "DETAILS_ORDER",
        payload: data
      });
    } catch (error) {
      console.error('Error al ver la orden:', error);
    }
  };
};
export const deleteOrder= (orderId) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`http://localhost:3001/api/order/delete/${orderId}`);
      const data = res.data;
      dispatch({
        type: "DELETE_ORDER",
        payload: data
      });
    } catch (error) {
      console.error('Error al borrar la orden:', error);
    }
  };
}; 





