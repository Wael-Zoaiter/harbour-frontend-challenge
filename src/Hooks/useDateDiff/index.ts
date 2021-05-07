import { DateDiff } from "Helpers";
import { useEffect, useState } from "react";

type ReturnType = {
  days: number;
  hours: number;
  minutes: number;
  segments: number;
};

const useDateDiff = (date: Date): ReturnType => {
  const [dateDiff, setDateDiff] = useState(DateDiff(date, new Date()));

  useEffect(() => {
    const interval = setInterval(() =>
      setDateDiff(DateDiff(date, new Date())),
      1000,
    );
    return () => clearInterval(interval);
  }, [date]);

  return dateDiff;
};

export default useDateDiff;
