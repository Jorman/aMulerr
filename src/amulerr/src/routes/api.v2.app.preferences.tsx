
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/v2/app/preferences')({
  server: {
    handlers: {
      GET: async () => {
        return Response.json({
          save_path: "/downloads/complete",
          temp_path_enabled: true,
          temp_path: "/downloads/incomplete",
          create_subfolder_enabled: false,
          max_ratio_enabled: true,
          max_ratio: 0,
          max_seeding_time_enabled: true,
          max_seeding_time: 0,
        });
      },
    },
  },
})
