module.exports = {
  apps: [
    {
      name: "Invitation",
      script: "node_modules/next/dist/bin/next", // Ruta del binario de Next
      args: "start -p 6000", // Puerto personalizado
      cwd: "/home/ubuntu/projects/personal/invitation", // Ruta absoluta recomendada
      instances: "max", // Máximo uso de CPUs
      exec_mode: "cluster", // Modo cluster para mejor rendimiento
      watch: false, // Mejor desactivar en producción
      env: {
        NODE_ENV: "production",
        NEXT_PUBLIC_BASE_URL: "https://invitation.miguel-zapata.xyz", // Variables necesarias
      },
      error_file: "logs/err.log",
      out_file: "logs/out.log",
      merge_logs: true,
      wait_ready: true, // Espera a que Next esté listo
      listen_timeout: 10000, // Tiempo de espera para ready
    },
  ],
};
