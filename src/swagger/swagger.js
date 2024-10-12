import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Mi API con Express",
      version: "1.0.0",
      description: "API para manejar tareas y usuarios",
      contact: {
        name: "Sean Meissimilly",
      },
      servers: [
        {
          url: "http://localhost:3000",
          description: "Local server",
        },
      ],
    },
  },
  apis: ["../routes/*.js"],
};

const swaggerSpecs = swaggerJsdoc(options);

export default swaggerSpecs;
