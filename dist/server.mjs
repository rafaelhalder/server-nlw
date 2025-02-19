import {
  accessInviteLinkRoute
} from "./chunk-VBDLJOGB.mjs";
import {
  getRankingRoute
} from "./chunk-VNZOYS2O.mjs";
import {
  getSubscriberRankingPositionRoute
} from "./chunk-OA3DFOVP.mjs";
import {
  getSubscriberInviteClicksRoute
} from "./chunk-JDFE5V7U.mjs";
import {
  getSubscriberInviteCountRoute
} from "./chunk-JKTX63AE.mjs";
import {
  subscribeToEventRoute
} from "./chunk-HZ6INNJW.mjs";
import "./chunk-NNN5BUNS.mjs";
import "./chunk-D6Z43XZO.mjs";
import "./chunk-Y4XUZCXC.mjs";
import "./chunk-YGDRNAYB.mjs";
import "./chunk-S4VBCYJX.mjs";
import "./chunk-D3NG5TR6.mjs";
import "./chunk-EWPOHAFI.mjs";
import "./chunk-PZQRAUKV.mjs";
import "./chunk-PTGWJNFG.mjs";
import {
  env
} from "./chunk-QEITFZL7.mjs";

// src/server.ts
import { fastifyCors } from "@fastify/cors";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { fastify } from "fastify";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler
} from "fastify-type-provider-zod";
var app = fastify().withTypeProvider();
app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);
app.register(fastifyCors);
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "NLW",
      version: "0.0.1"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.register(subscribeToEventRoute);
app.register(accessInviteLinkRoute);
app.register(getSubscriberInviteClicksRoute);
app.register(getSubscriberInviteCountRoute);
app.register(getSubscriberRankingPositionRoute);
app.register(getRankingRoute);
app.listen({ port: env.PORT }).then(() => {
  console.log("HTTP server running");
});
