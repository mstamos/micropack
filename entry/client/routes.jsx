import { Route } from 'react-router';

import Micropackroutes from 'Micropack/client/routes'

ReactRouterSSR.Run(
    <Route>
      {Micropackroutes}
    </Route>
);

