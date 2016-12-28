#!/usr/bin/env node
import {spawn} from "child_process";
import colors from "colors";

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
    new CMD('git', ['commit', '-m', process.argv[2] || '']).execute(() => {
        new CMD('git', ['push']).execute(()=>{
            console.log(colors.green('done!'));
        });
    });
});
