// loggerMiddleware.ts
import type { Middleware } from '@reduxjs/toolkit';

const loggerMiddleware: Middleware = storeAPI => next => action => {
  console.log('[Logger] Dispatching:', action);
  const result = next(action);
  console.log('[Logger] Next State:', storeAPI.getState());
  return result;
};

export default loggerMiddleware;
