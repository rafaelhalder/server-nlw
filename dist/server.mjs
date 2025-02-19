import {
  accessInviteLinkRoute
} from "./chunk-DKXZNXVC.mjs";
import {
  getRankingRoute
} from "./chunk-3IJ6ISNZ.mjs";
import {
  getSubscriberRankingPositionRoute
} from "./chunk-SDBUS3UJ.mjs";
import {
  getSubscriberInviteClicksRoute
} from "./chunk-IV7THRSB.mjs";
import {
  getSubscriberInviteCountRoute
} from "./chunk-RKWKJG4N.mjs";
import {
  subscribeToEventRoute
} from "./chunk-OB4EUMT6.mjs";
import "./chunk-XVNCLVSW.mjs";
import "./chunk-RWIXWG2N.mjs";
import "./chunk-4PEDE7ES.mjs";
import "./chunk-PLLGCIKU.mjs";
import "./chunk-S4VBCYJX.mjs";
import "./chunk-Z4H2SF5A.mjs";
import "./chunk-WYPAUTZH.mjs";
import "./chunk-22EUUXFV.mjs";
import "./chunk-XMUR6WN6.mjs";
import {
  env
} from "./chunk-MHMENDYQ.mjs";

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
