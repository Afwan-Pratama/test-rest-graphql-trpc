const secNSec2ms = (secNSec: any) => {
  if (Array.isArray(secNSec)) {
    return secNSec[0] * 1000 + secNSec[1] / 1000000;
  }
  return secNSec / 1000;
};

export const startMeasurement = () => {
  const startTime = process.hrtime();

  const startCpu = process.cpuUsage();

  return {
    time: startTime,
    cpuUsage: startCpu,
  };
};

export const endMeasurement = (start: any) => {
  const elapCPU = process.cpuUsage(start.cpuUsage);

  const elapTime = process.hrtime(start.time);

  const elapTimeMs = secNSec2ms(elapTime);

  const memoryUsage = process.memoryUsage().heapUsed / 1024 / 1024;

  return {
    cpu: (
      100 *
      (secNSec2ms(elapCPU.user) + secNSec2ms(elapCPU.system) / elapTimeMs)
    ).toFixed(2),
    memory: memoryUsage.toFixed(2),
  };
};
