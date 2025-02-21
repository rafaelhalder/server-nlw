import {
  accessInviteLinkRoute
} from "./chunk-UQ5QKVGD.mjs";
import {
  getRankingRoute
} from "./chunk-QOWD7RX7.mjs";
import {
  getSubscriberRankingPositionRoute
} from "./chunk-UBFR5M6A.mjs";
import {
  getSubscriberInviteClicksRoute
} from "./chunk-XVASJW34.mjs";
import {
  getSubscriberInviteCountRoute
} from "./chunk-QTWPAVJB.mjs";
import {
  subscribeToEventRoute
} from "./chunk-I4DBJWPY.mjs";
import "./chunk-S7KPLQOU.mjs";
import "./chunk-5EBOBK5J.mjs";
import "./chunk-VO3VXNUV.mjs";
import "./chunk-GUSWWVQ2.mjs";
import "./chunk-S4VBCYJX.mjs";
import "./chunk-66IKTDIB.mjs";
import "./chunk-5REWGREJ.mjs";
import "./chunk-HTLELMYF.mjs";
import "./chunk-CCICAGWA.mjs";
import {
  env
} from "./chunk-SDWNZVBA.mjs";

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
app.register(getRankingRoute);
app.register(getSubscriberInviteCountRoute);
app.register(getSubscriberInviteClicksRoute);
app.register(getSubscriberRankingPositionRoute);
app.listen({ port: env.PORT, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running");
});
