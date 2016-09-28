// awk '{system("wc "$1)}' myfile
"use strict";
const expect = require("chai").expect;
const assert = require("chai").assert;
const _ = require('lodash');
const sinon = require("sinon");

describe("WOSH - Wo shell commander", () => {


    describe("Accept input from pipe", ()=> {

        /*
         * @name         wosh
         * @example      wosh echo "hello world"
         * @@results:     stdout as simple echo command
         *                if wo is running, capture command, store in db, store current cmd output execution
         * @synopsis     wosh -o...  cmd parameters
         * @synopsis     wosh -of... cmd parameters
         * @description
         * @parameters
         * @url http://www.computerhope.com/unix/usort.htm  -- To explain the type of input (ending with null separator)
         * @url http://stackoverflow.com/questions/35004492/node-child-process-spawn-multiple-commands
         * @intention: A component shall suuport different source of input (stdin, pipe, file, wostore)
         *
         */

        it("should deal with command [>wosh cat ./simple-file.json | wosh sort]", (done) => {
            const spawn = require('child_process').spawn;
            const exec = require('child_process').exec;

            let aCmd = "cat ./test/simple-file.json | sort";
            let runSh = exec(aCmd, (error, stdout, stderr)=>{
                console.log("Echo output:", stdout);
                done();
            });
        });

        it("should support a simple [>wosh echo 'hello\nyou'] - command with special characters", (done) => {
            const spawn = require('child_process').spawn;
            let aCmd = "echo";
            let args = ["Aie, hello\nyou"];
            let runSh = spawn(aCmd, args);
            runSh.stdout.on('data', (data)=>{
                console.log("Echo output:", `${data}`);
            });
            runSh.stderr.on('data', (data)=>{ console.log(`e=${data}`); });
            runSh.on('close', (code)=>{ assert.equal(code, 0, "No error code (0)");
                done();
            });
        });

        it("should support a simple [echo 'hello world']", (done) => {
            const exec = require("child_process").exec;
            const SINGLE_QUOTE = "'";
            const str = "hello world";
            const helloWorld=SINGLE_QUOTE + "hello world" + SINGLE_QUOTE;
            exec("echo " + helloWorld, (error, stdout, stderr)=>{
                assert.equal(str + "\n", stdout, "");
                done();
            });
        });

        it("should support awk command", (done) => {
            done();
        });

    });



    describe("Support multiple shell context and syntax", ()=> {

        it("should support a script file command [echo-simple.sh]", (done) => {
            const spawn = require('child_process').spawn;
            let runSh = spawn(__dirname + '/echo-simple.sh');
            runSh.stdout.on('data', (data)=>{ assert.equal("hello\n", `${data}`, "echo string found"); });
            runSh.stderr.on('data', (data)=>{ console.log(`e=${data}`); });
            runSh.on('close', (code)=>{ assert.equal(code, 0, "No error code (0)");
                done();
            });
        });

        it("should support a simple [echo 'hello world']", (done) => {
            const exec = require("child_process").exec;
            const SINGLE_QUOTE = "'";
            const str = "hello world";
            const helloWorld=SINGLE_QUOTE + "hello world" + SINGLE_QUOTE;
            exec("echo " + helloWorld, (error, stdout, stderr)=>{
                assert.equal(str + "\n", stdout, "");
                done();
            });
        });

        it("should support awk command", (done) => {
            done();
        });

    });

});

