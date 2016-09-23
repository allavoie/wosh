// awk '{system("wc "$1)}' myfile
"use strict";
const expect = require("chai").expect;
const assert = require("chai").assert;
const _ = require('lodash');
const sinon = require("sinon");

describe("WOSH - Wo shell commander", () => {
    describe("Support multiple shell context and syntax", ()=> {

        it("should support a script file command", (done) => {
            const spawn = require('child_process').spawn;
            let runSh = spawn(__dirname + '/echo-simple.sh');
            runSh.stdout.on('data', (data)=>{ assert.equal("hello\n", `${data}`, "echo string found"); });
            runSh.stderr.on('data', (data)=>{ console.log(`e=${data}`); });
            runSh.on('close', (code)=>{ assert.equal(code, 0, "No error code (0)");
                done();
            });
        });

        it("should support a simple echo command (with single quote)", (done) => {
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

