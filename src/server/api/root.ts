import { EnquiryRouter } from './routers/enquirey.router';
import { JobSeekerRouter } from './routers/JobSeeker.router';
import { JobRouter } from './routers/Job.router';
import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { ApplicationRouter } from './routers/application.router';
import { CompanyEnquiryRouter } from './routers/companyenquiry.router';
import { GameEventRouter } from './routers/gameEvent.router';
import { SettingRouter } from './routers/setting.route';
import { CountryRouter } from './routers/country.router';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  jobs: JobRouter,
  jobSeekers: JobSeekerRouter,
  application: ApplicationRouter,
  enquiry: EnquiryRouter,
  companyEnquiry: CompanyEnquiryRouter,
  gameEvent: GameEventRouter,
  setting: SettingRouter,
  country: CountryRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
