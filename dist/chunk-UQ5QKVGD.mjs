import {
  accessInviteLink
} from "./chunk-5EBOBK5J.mjs";
import {
  env
} from "./chunk-SDWNZVBA.mjs";

// src/routes/access-invite-link-route.ts
import { z } from "zod";
var accessInviteLinkRoute = async (app) => {
  app.get(
    "/invites/:subscriberId",
    {
      schema: {
        summary: "Access invite link and redirects users",
        operationId: "accessInviteLink",
        tags: ["referral"],
        params: z.object({
          subscriberId: z.string()
        }),
        response: {
          301: z.null()
        }
      }
    },
    async (request, reply) => {
      const { subscriberId } = request.params;
      await accessInviteLink({ subscriberId });
      const redirectUrl = new URL(env.WEB_URL);
      redirectUrl.searchParams.set("referrer", subscriberId);
      return reply.redirect(redirectUrl.toString(), 302);
    }
  );
};

export {
  accessInviteLinkRoute
};
