module.exports = {
  apps: [
    {
      name: "Invitation",
      script: "npm",
      args: "start -p 5010", // Puerto personalizado
      watch: false,
      script: "node_modules/next/dist/bin/next", // Ruta del binario de Next
      cwd: "/home/ubuntu/projects/personal/invitation", // Ruta absoluta recomendada
      env: {
        NODE_ENV: "production",
        NEXT_PUBLIC_BASE_URL: "https://boda.dimelza-y-alan.invita-party.com/", // Variables necesarias
        NEXT_PUBLIC_PHONE_NUMBER: "+59163886955",
      },
    },
  ],
};
