import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../routes';

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.CVP}>CVP</Link>
      </li>
      <li>
        <Link to={ROUTES.USER}>User</Link>
      </li>
      <li>
        <Link to={ROUTES.LOGIN}>Login</Link>
      </li>

    </ul>
  </div>
);

export default Navigation;