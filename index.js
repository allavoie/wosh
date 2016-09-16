#!/usr/bin/env node

'use strict';

let cmd = require('child_process');
let bashCmd = 'sleep 3';

cmd.exec(bashCmd, (error, out, err)=>{
   console.log(error, out, err);
});
