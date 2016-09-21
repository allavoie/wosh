// awk '{system("wc "$1)}' myfile
"use strict";
const expect = require("chai").expect;
const assert = require("chai").assert;
const _ = require('lodash');
const sinon = require("sinon");

describe("WOSH - Wo shell commander", () => {
    describe("Support multiple shell context and syntax", ()=> {
        it("should support echo command", (done) => {
            const spawn = require('child_process').spawn;
            let runSh = spawn(__dirname + '/echo-simple.sh');
            runSh.stdout.on('data', (data)=>{
                console.log(`d=${data}`);
            });
            runSh.stderr.on('data', (data)=>{
                console.log(`e=${data}`);
            });
            runSh.on('close', (code)=>{
                console.log(`c=${code}`);
                done();
            });
        });
        it("should support awk command", (done) => {
            done();
        });

    });

});

