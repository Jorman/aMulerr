import { defineEventHandler, getRequestURL } from 'h3'

export default defineEventHandler((event) => {
  const startedAt = Date.now()
  const method = event.node.req.method ?? 'GET'
  const url = getRequestURL(event)

  event.node.res.on('finish', () => {
    const durationMs = Date.now() - startedAt
    const statusCode = event.node.res.statusCode
    console.log(
      `[request] ${method} ${url.pathname}${url.search} -> ${statusCode} (${durationMs}ms)`,
    )
  })
})