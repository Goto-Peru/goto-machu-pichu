import * as React from "react";
import styles from "./AllReservation.module.css";
import {  useSelector, useDispatch } from 'react-redux';
import { AllReservations, DetailsTuristic } from '../../redux/action';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function AllReservation() {
  const dispatch = useDispatch();
  const allreservation = useSelector(state => state.allreservation.data);
  const detailsturistic = useSelector(state => state.detailsturistic.data);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (turisticId) => {
    dispatch(DetailsTuristic(turisticId))
    setOpen(true)
  };
  console.log(detailsturistic)
  const handleClose = () => setOpen(false);
React.useEffect(() => {
  dispatch(AllReservations())
  }, [dispatch]);
  
  return (
    <>
      <div>
        <div>
          <input type="text" name="" id="" />
        </div>

        <div className={styles.reservation_container}>
          <table className={styles.reservation_table}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Fecha de reservación</th>
                <th>-</th>

              </tr>
            </thead>
            <tbody>
            {allreservation && allreservation.map((row) => (
          
          <tr key={row.id}>
          <td>{row.name}</td>
          <td>{row.email}</td>
          <td>{row.phone}</td>
          <td>{row.date}</td>
          <td><Button variant="contained" onClick={() => handleOpen(row.TuristicId)}>Ver</Button></td>



          
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
           Reservación a nombre de: {row.name}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Lugar turistico: {detailsturistic?.name}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Precio: US${detailsturistic?.price}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Fecha de reserva: {row.date}
          </Typography>
         
       
        </Box>
      </Modal>
        </tr>
        ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
