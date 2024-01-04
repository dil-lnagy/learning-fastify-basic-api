const Fastify = require("fastify");
const fastifySwagger = require("@fastify/swagger");
const fastifySwaggerUi = require("@fastify/swagger-ui");

const fastify = new Fastify();

fastify.register(fastifySwagger, {
  mode: "dynamic",
});
fastify.register(fastifySwaggerUi, {
  routePrefix: "/docs",
});

fastify.register(require("./routes/items"));

const start = async () => {
  try {
    await fastify.listen({ port: 5000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
