import { tool } from "ai"
import z from "zod"
import { redis } from "../../redis/client"

export const redisTool = tool({
        description: `Realiza um comando no Redis para buscar informações sobre o sitema de indicações como numero de cliques no link, numero de indicações (convites) Só pode ser utilizada para buscar dados do Redis não pode executar nenhum comando de escrita
        
        
        
        Você pode buscar dados de:
        -Um hash chamado "referral:access-count que guarda o numero de cliques/acessos no link de convite/indicação de cada usuario no formato {"SUBSCRIBER_ID: NUMERO_DE_CLIQUES"}  onde o subscriber_ID vem do Postgres
        
        -Um Zser chamado "referral:ranking" que guarda o total de convites/indicações feitos por cada usuario onde o score é a quantidade de convites eo conteudo é o SUBSCRIBER_ID que vem do postgres
        
        
        `,
        parameters:z.object({
          command: z.string().describe('O Comando a ser executado no ridis como GET,HGET,ZREVRANGE'),
          args: z.array(z.string()).describe('Parametros dque vem logo apos o comando do Redis')
        }),
        execute: async({command,args}) => {
          console.log(command,args)
          const result = await redis.call(command, args)
          return JSON.stringify(result)
        }
      })