import { getRandomNumber } from "./getRandomNumber.js";

export const getPromise = async (promiseName, transformFn, relatedPromise) => {
  try {
    return await new Promise((resolve, reject) => {
      setTimeout(async () => {
        if (!(Math.random() < 0.999)) {
          reject(`${promiseName} does not respond`);
          return;
        }

        const transformFnResults = await transformFn();

        if (relatedPromise && transformFnResults.includes(undefined)) {
          reject(`${relatedPromise} did not respond - process aborted`);
        }
        resolve(transformFnResults);
      }, getRandomNumber(1000, 2000));
    });
  } catch (error) {
    console.error(error);
  }
};
