import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Mi API con Express",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerSpecs = swaggerJsdoc(options);

export { swaggerUi, swaggerSpecs };
