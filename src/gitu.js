#!/usr/bin/env node
import {spawn} from "child_process";
import colors from "colors";
import figlet from 'figlet';
import assert from 'assert';

class CMD {

    constructor(path, args) {
        this.path = path;
        this.args = args;
    }

    execute(cb) {

        const childProcess = spawn(this.path, this.args, {
            cwd: process.cwd(),
            stdio:'inherit'
        });

        childProcess.on('exit', (code) => {
            if (code !== 0) {
                console.log(colors.red('git-upload failed.'));
                process.exit(1);
            }

            cb();
        });


    }
}

new CMD('git', ['add', '.']).execute(() => {
    new CMD('git', ['commit', '-m', process.argv.slice(2).join(' ')]).execute(() => {
        new CMD('git', ['push']).execute(()=>{
            console.log(colors.green('done!'));
            figlet('200 OK!', (err, text)=>{
                assert.ifError(err);

                console.log(text);
            });
        });
    });
});
