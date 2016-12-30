#!/usr/bin/env node
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _child_process = require("child_process");

var _colors = require("colors");

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CMD = function () {
    function CMD(path, args) {
        _classCallCheck(this, CMD);

        this.path = path;
        this.args = args;
    }

    _createClass(CMD, [{
        key: "execute",
        value: function execute(cb) {

            var childProcess = (0, _child_process.spawn)(this.path, this.args, {
                cwd: process.cwd(),
                stdio: 'inherit'
            });

            childProcess.on('exit', function (code) {
                if (code !== 0) {
                    console.log(_colors2.default.red('git-upload failed.'));
                    process.exit(1);
                }

                cb();
            });
        }
    }]);

    return CMD;
}();

new CMD('git', ['add', '.']).execute(function () {
    new CMD('git', ['commit', '-m', process.argv.slice(2).join(' ')]).execute(function () {
        new CMD('git', ['push']).execute(function () {
            console.log(_colors2.default.green('done!'));
        });
    });
});