const initialState = {
  token: localStorage.getItem('token'),
  role: [],
  loginUser: {},
  loginError: null,
  allturistic: [],
  allUsers: [],
  registrationSuccess: false,
  registrationError: null,
  datapersonal: [],
  detailsturistic: [],
  allOrders: [],
  oneOrder: [],
  allCart: [],
  payment: "",
  allreservation: [],
}


export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        registrationSuccess: true,
        registrationError: null,
      };
    case 'REGISTER_FAILURE':
      return {
        ...state,
        registrationSuccess: false,
        registrationError: action.payload,
      };

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        token: action.payload.token,
        role: action.payload.role,
      };



    case 'LOGIN_ERROR':
      return {
        ...state,
        loginError: true,
      };

    case 'LOGOUT':
      return {
        ...state,
        token: null,
        role: null,

      };


    case 'DATA_PERSONAL':
      return {
        ...state,
        datapersonal: action.payload,
        role: action.payload.role
      };
    case 'DELETE_ACCOUNT':
      return {
        ...state,

      };


    case 'POST_TURISTIC':
      return {
        ...state,
      };
    case 'ALL_TURISTIC':
      return {
        ...state,
        allturistic: action.payload
      };
    case 'ALL_RESERVATION':
      return {
        ...state,
        allreservation: action.payload
      };

    case 'DETAILS_TURISTIC':
      return {
        ...state,
        detailsturistic: action.payload
      };

 
      
    case 'ALL_USERS':
      return {
        ...state,
        allUsers: action.payload
      };

    case 'PRODUCT_DETAILS':
      return {
        ...state,
        productDetails: action.payload
      };
    case 'PAYMENT_PAYPAL':
      return {
        ...state,
      };
    case 'ORDER':
      return {
        ...state,
      };

    case 'ALL_ORDER':
      return {
        ...state,
        allOrders: action.payload
      };
    case 'DETAILS_ORDER':
      return {
        ...state,
        oneOrder: action.payload
      };
    case 'PRODUCT_CART':
      return {
        ...state,

      };

    case 'COTIZATION_TURISTIC':
      return {
        ...state,

      };

    case 'CONTACTUS_TURISTIC':
      return {
        ...state,

      };

    case 'PAYMENT_TURISTIC':
      return {
        ...state,
        payment: action.payload

      };

    case 'DELETE_TURISTIC':
      return {
        ...state,

      };

      






    default: return { ...state }
  }
}






