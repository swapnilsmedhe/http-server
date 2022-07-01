const createNext = (handlers) => {
  let index = -1;
  const callNextHandler = (request, response) => {
    index++;
    const currentHandler = handlers[index];
    if (currentHandler) {
      currentHandler(request, response, () =>
        callNextHandler(request, response));
    }
  };
  return callNextHandler;
};

const createRouter = (...handlers) => (request, response) => {
  const next = createNext(handlers);
  next(request, response);
}

module.exports = { createRouter }
