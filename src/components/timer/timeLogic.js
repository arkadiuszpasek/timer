/* eslint-disable import/prefer-default-export */
export const renderTime = (time) => {
  const { hours, minutes, seconds } = time;
  let hourS = hours.toString();
  let minS = minutes.toString();
  let secS = seconds.toString();
  if (hours < 10) hourS = `0${hourS}`;
  if (minS < 10) minS = `0${minS}`;
  if (secS < 10) secS = `0${secS}`;

  return `${hourS}:${minS}:${secS}`;
};
