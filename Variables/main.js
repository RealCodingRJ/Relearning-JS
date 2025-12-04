let isTrue = false;

const logger = (logMessage) => {
  console.log(logMessage);
};

const funcX = async () => {
  var x = 5 * 5 + 1;
  logger(x);
};

funcX().then((e) => e);
