import process, { exitCode } from "process";

process.on('exit',(exitCode)=>{
    console.info('Exit code nih: ${exitcode}');
});

console.info(process.version);
console.table(process.memoryUsage);
console.table(process.env);