// Importamos el paquete `pino` para el registro de logs
import logger from "pino";
import dayjs from "dayjs";

const log = logger({
  transport: {
    target: 'pino-pretty'
  },
  // Configuramos opciones básicas para el logger
  base: {
    // Eliminamos la inclusión del PID (Process ID) en los logs
    pid: false,
  },
  // Definimos una función para agregar una marca de tiempo formateada
  // a cada log utilizando `dayjs`
  timestamp: () => `, "time": "${dayjs().format()}"`,
});

export default log;
