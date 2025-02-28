import { generateText, tool } from "ai"
import { openai } from "../ai/openai"
import { deepseek } from "../ai/deepseek"
import z from 'zod'
import { subscriptions } from "../drizzle/schema/subscriptions"
import { db,client } from "../drizzle/client"
import { postgresTool } from "../ai/tools/postgres-tool"
import { redisTool } from "../ai/tools/redis-tool"

interface AnswerUserMessageParams {
  message: string
}

export async function answerUserMessage({
  message
}: AnswerUserMessageParams) {

  const answer = await generateText({
    model:openai,
    prompt: message,
    tools:{
      postgresTool,
      redisTool
    },
    system: `Você é um assistente de I.A, responsavel por responder duvidas sobre um evento de programação Inclua na resposta somente o que o usuario pediu , sem nenhum texto adicional O retorno deve ser sermpre em markdown (sem incluir \`\`\` no inicio ou no fim)`.trim(),
    maxSteps:5
  })

  return {response: answer.text}

}
