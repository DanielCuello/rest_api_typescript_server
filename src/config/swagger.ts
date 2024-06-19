import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: "3.0.2",
    tags: [
      {
        name: "Products",
        description: "API operations related to products",
      },
    ],
    info: {
      title: "REST API Node.js / Express / Typescript",
      version: "1.0.0",
      description: "API Docs for Products",
    },
  },
  apis: ["./src/router.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerUiOptions: SwaggerUiOptions = {
  customCss: `
        .topbar-wrapper .link{
        content: url('https://scontent.fnqn9-1.fna.fbcdn.net/v/t1.18169-9/26239101_10159788514265526_1973150810639111766_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEYZ__5tp_GPEuLUTpuOtwrfBbQwYD1Cnx8FtDBgPUKfNzigiYPSC9MPVzJx3DOVOk&_nc_ohc=bwluX8M0_LoQ7kNvgGVfBZI&_nc_ht=scontent.fnqn9-1.fna&oh=00_AYDtqs5GLMqHx5tUf5jC8a1i67NN3Dkx9xtyOI3-u7R7mA&oe=6693E16D');
        height: 200px;
        width: auto;
        }
        .swagger-ui .topbar {
            background-color: #1F196E
        }
    `,

  customSiteTitle: "Documentación REST API Express Typescript",
};

export default swaggerSpec;
export { swaggerUiOptions };
