import fastify from 'fastify'
import { knex } from './database'
import crypto from 'node:crypto'
import { env } from '../src/env/index'

const app = fastify()

app.get('/hello', async () => {
  const transaction = await knex('transactions')
    // .insert({
    //   id: crypto.randomUUID(),
    //   title: 'Transação de teste',
    //   amount: 1000,
    // })
    // .returning('*')
    .where('amount', 1000)
    .select('*')

  return transaction
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
