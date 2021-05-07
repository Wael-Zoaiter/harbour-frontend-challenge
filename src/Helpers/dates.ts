export const DateDiff = function (d1: Date, d2: Date) {
  const t2 = d2.getTime();
  const t1 = d1.getTime();

  const date = new Date(t1 - t2);
  const days = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const segments = date.getSeconds();
  
  return { days, hours, minutes, segments };
};
