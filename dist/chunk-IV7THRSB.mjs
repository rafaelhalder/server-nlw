import {
  getSubscriberInviteClicks
} from "./chunk-Z4H2SF5A.mjs";

// src/routes/get-subscriber-invite-clicks-route.ts
import { z } from "zod";
var getSubscriberInviteClicksRoute = async (app) => {
  app.get(
    "/subscribers/:subscriberId/ranking/clicks",
    {
      schema: {
        summary: "Get subscriber ranking invite clicks count",
        tags: ["referal"],
        params: z.object({
          subscriberId: z.string()
        }),
        response: {
          200: z.object({ count: z.number() })
        }
      }
    },
    async (request) => {
      const { subscriberId } = request.params;
      const { count } = await getSubscriberInviteClicks({ subscriberId });
      return { count };
    }
  );
};

export {
  getSubscriberInviteClicksRoute
};
