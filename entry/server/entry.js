// Methods for optimistic updates
import 'Micropack/lib/collections/posts_methods';
import 'Micropack/lib/collections/comments_methods';
import 'Micropack/server/publications';
import 'Micropack/server/fixtures';

// Do server-rendering only in production mode
if (process.env.NODE_ENV === 'production') {
  // Load Webpack infos for SSR
  ReactRouterSSR.LoadWebpackStats(WebpackStats);

  require('../client/routes');
} else {
  // Add fixtures required for integration tests
  const context = require.context('../../modules', true, /\/server\/(.*)\/integration\/(.*)\-fixtures\.jsx?$/);
  context.keys().forEach(context);

  if (process.env.FRAMEWORK === 'jasmine-server-integration') {
    // Run integration tests on server
    const context = require.context('../../modules', true, /\/server\/(.*)\/integration\/(.*)\-test\.jsx?$/);
    context.keys().forEach(context);
  }
}
