import { exec } from "child_process";

export const measurement = () => {
  exec("sh script-ps-node.sh", (error: any, stdout: any, stderr: any) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(
      (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2),
      "\t",
      stdout
    );
  });
};
