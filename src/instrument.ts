import * as Sentry from '@sentry/nestjs';
import { nodeProfilingIntegration } from '@sentry/profiling-node';
import { config } from './config';

// Ensure to call this before importing any other modules!
// Sentry.init({
//   dsn: config.SENTRY_DSN,
//   integrations: [
//     // Add our Profiling integration
//     nodeProfilingIntegration(),
//   ],
//
//   // Add Tracing by setting tracesSampleRate
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0,
//
//   // Set sampling rate for profiling
//   // This is relative to tracesSampleRate
//   profilesSampleRate: 1.0,
//
//   // Filter out health check transactions
//   beforeSendTransaction(event) {
//     if (event.transaction === 'GET /') return null;
//     return event;
//   },
// });
