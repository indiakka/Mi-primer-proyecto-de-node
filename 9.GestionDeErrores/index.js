const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    // los transportes son todas las acciones que se está llevando a cabo
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    // Crea un fichero con los errores error.log y otro 
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

logger.debug ( "¡ Soy un mensaje de depuración! " ) ;
logger.info ( " Mensaje de información " )  ;
logger.warn ( "¡ Alerta morada! ¡Alerta morada! " ) ;
logger.error ( " ERROR!!!!! " ) ;
