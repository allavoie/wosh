#!/usr/bin/env node

'use strict';

let cmd = require('child_process');
let commandParams = require('commander');
let command = "";
let verboseLevel = 0;

commandParams
    .version('1.0.0')
    .option('-v --verbose', 'verbose');

commandParams
    .command('exec <cmd> [options...]')
    .option("-e, --exec <arg1> [unixcommand]", 'Which unix command to execute')
    .action((cmd, options)=>{
      console.log('exec "%s %s"', cmd, options);
    });

//commandParams.parse(process.argv);

if ( commandParams.verbose ){
   verboseLevel = 1;
}

let cmdArgs = require('minimist')(process.argv.slice(2));

//if ( commandParams.command ){
//   console.log("command=%j", commandParams.command);
//}

let bashCmd = 'sleep 3';

//cmd.exec(bashCmd, (error, out, err)=>{
//   if (error){
//      console.error("exec error ${error}")
//      return;
//   }
//   console.log("stdout: ${stdout}");
//   console.log("stderr: ${stderr}");
//});

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data)=>{
   process.stdout.write(data);
});


//module.export = {};
