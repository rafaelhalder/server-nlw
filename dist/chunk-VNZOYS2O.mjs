import {
  getRanking
} from "./chunk-Y4XUZCXC.mjs";

// src/routes/get-ranking-route.ts
import { z } from "zod";
var getRankingRoute = async (app) => {
  app.get(
    "/ranking",
    {
      schema: {
        summary: "Ranking",
        tags: ["referal"],
        response: {
          200: z.object({
            ranking: z.array(
              z.object({
                id: z.string(),
                name: z.string(),
                score: z.number()
              })
            )
          })
        }
      }
    },
    async (request) => {
      const { rankingWithScore } = await getRanking();
      return { ranking: rankingWithScore };
    }
  );
};

export {
  getRankingRoute
};
