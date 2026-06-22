
import { useAmule } from '#/amule'
import { skipFalsy } from '#/lib/array'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/v2/torrents/delete')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const formData = await request.formData()
        const hashes = formData
          .get("hashes")
          ?.toString()
          ?.toUpperCase()
          ?.split("|")
          .filter(skipFalsy)

        if (hashes?.length) {
          await useAmule(async (amule) => {
            const shared = await amule.getSharedFiles()
            const ecids = shared
              .filter(f => f.fileHash && hashes.includes(f.fileHash.toUpperCase()))
              .map(f => f.ecid).filter(skipFalsy)

            await amule.clearCompleted(ecids)
            for (const hash of hashes) {
              await amule.cancelDownload(hash)
            }
          })
        }

        return Response.json({})
      }
    }
  },
})
