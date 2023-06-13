export const startMeasurement = () => {
  const startTime = Date.now();

  const startCpu = process.cpuUsage();

  return {
    time: startTime,
    cpuUsage: startCpu,
  };
};

export const endMeasurement = (start: any) => {
  const cpuUsage = process.cpuUsage(start.cpuUsage).user / 1000;

  const memoryUsage = process.memoryUsage().heapUsed / 1024 / 1024;

  return {
    cpu: cpuUsage,

    memory: memoryUsage.toFixed(2),
  };
};
