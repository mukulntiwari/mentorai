import { agentsRouter } from '@/modules/agents/server/procedures';
import { createTRPCRouter } from '../init';
import { MeetingsRouter } from '@/modules/meetings/server/procedure';


export const appRouter = createTRPCRouter({
  agents: agentsRouter,
  meetings: MeetingsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;