import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Countdown = ({
  initialDays = 15,
  initialHours = 10,
  initialMinutes = 24,
  initialSeconds = 0,
}) => {
  const [time, setTime] = useState({
    days: initialDays,
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              } else {
                clearInterval(timer);
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="flex gap-5 p-5 rounded-lg bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="text-center"
        whileHover={{ scale: 1.1, rotate: 3 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="countdown font-mono text-4xl text-blue-600 dark:text-blue-500">
          <span>{time.days}</span>
        </span>
        <div className="text-gray-600 dark:text-gray-400">days</div>
      </motion.div>
      <motion.div
        className="text-center"
        whileHover={{ scale: 1.1, rotate: -3 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="countdown font-mono text-4xl text-green-500 dark:text-green-500">
          <span>{time.hours}</span>
        </span>
        <div className="text-gray-600 dark:text-gray-400">hours</div>
      </motion.div>
      <motion.div
        className="text-center"
        whileHover={{ scale: 1.1, rotate: 3 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="countdown font-mono text-4xl text-indigo-400 dark:text-indigo-500">
          <span>{time.minutes}</span>
        </span>
        <div className="text-gray-600 dark:text-gray-400">min</div>
      </motion.div>
      <motion.div
        className="text-center"
        whileHover={{ scale: 1.1, rotate: -3 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="countdown font-mono text-4xl text-red-700 dark:text-indigo-400">
          <span>{time.seconds}</span>
        </span>
        <div className="text-gray-600 dark:text-gray-400">sec</div>
      </motion.div>
    </motion.div>
  );
};

export default Countdown;
