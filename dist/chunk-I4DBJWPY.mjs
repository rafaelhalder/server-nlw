import {
  subscribeToEvent
} from "./chunk-S7KPLQOU.mjs";

// src/routes/subscribe-to-event-route.ts
import { z } from "zod";
var subscribeToEventRoute = async (app) => {
  app.post(
    "/subscriptions",
    {
      schema: {
        summary: "Subscribes",
        tags: ["subscriptions"],
        body: z.object({
          name: z.string(),
          email: z.string().email(),
          referrer: z.string().nullish()
        }),
        response: {
          201: z.object({ subscriberId: z.string() })
        }
      }
    },
    async (request, reply) => {
      const { name, email, referrer } = request.body;
      const { subscriberId } = await subscribeToEvent({
        name,
        email,
        referrerId: referrer
      });
      return reply.status(201).send({ subscriberId });
    }
  );
};

export {
  subscribeToEventRoute
};
