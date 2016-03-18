import express from "express";

export const hot = (module, callback) => {
  // Enable HMR for parent module
  if (module.hot) {
    module.hot.accept();
  }

  // Convert callback into array of middleware
  return (req, res, next) => {
    const middleware = callback(req, res, next);
    const stack = Array.isArray(middleware) ? middleware : [middleware];

    express.Router()
      .use(...stack.map((route) => route.default || route))
      .handle(req, res, next)
    ;
  };
}
