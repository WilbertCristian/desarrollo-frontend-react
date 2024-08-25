import { motion } from 'framer-motion';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="modal"
    >
      <div className="modal-content">
        <h2>Error de autenticación</h2>
        <p>La contraseña es incorrecta. Por favor, inténtelo de nuevo.</p>
        <button onClick={handleClose}>Cerrar</button>
      </div>
    </motion.div>
  );
};