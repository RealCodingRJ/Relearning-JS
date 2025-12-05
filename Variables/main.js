export const logger = async (logMessage) => {
  console.log(logMessage);
};

const funcX = async () => {
  var x = 5 * 5 + 1;
  await logger(x);
};

funcX().then((e) => e);
