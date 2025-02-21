import {
  getSubscriberInvitesCount
} from "./chunk-HTLELMYF.mjs";

// src/routes/get-subscriber-invites-count-route.ts
import { z } from "zod";
var getSubscriberInviteCountRoute = async (app) => {
  app.get(
    "/subscribers/:subscriberId/ranking/count",
    {
      schema: {
        summary: "Get subscriber ranking invite count",
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
      const { count } = await getSubscriberInvitesCount({ subscriberId });
      return { count };
    }
  );
};

export {
  getSubscriberInviteCountRoute
};
