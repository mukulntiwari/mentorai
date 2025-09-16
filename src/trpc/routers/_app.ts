import { agentsRouter } from '@/modules/agents/server/procedures';
import { createTRPCRouter } from '../init';
import { MeetingsRouter } from '@/modules/meetings/server/procedure';
import { premiumRouter } from '@/modules/premium/server/procedures';


export const appRouter = createTRPCRouter({
  agents: agentsRouter,
  meetings: MeetingsRouter,
  premium: premiumRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;