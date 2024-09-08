// eslint-disable-next-line import/no-extraneous-dependencies
import cn from 'classnames';

import { RouterComponent } from '../pages/RouterComponent';

const App = () => {
  return <div className={cn('app-wrapper')}>{<RouterComponent />}</div>;
};

export { App };
