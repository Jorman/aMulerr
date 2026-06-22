
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/v2/app/webapiVersion')({
  server: {
    handlers: {
      GET: async () => {
        return new Response(`2.8.19`, {
          status: 200,
          headers: {
            "Content-Type": "text",
            "X-Content-Type-Options": "nosniff",
            "Cache-Control": "public, max-age=0",
          },
        })
      }
    }
  },
})
