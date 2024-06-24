const { spawn } = require("child_process");
const waitOn = require("wait-on");
const path = require("path");

const server = spawn("node", [path.resolve(__dirname, "index.js")]);

waitOn(
    {
        resources: ["http://localhost:3333"],
        timeout: 5000,
    },
    (err) => {
        if (err) {
            console.error("Failed to start server:", err);
            server.kill();
            process.exit(1);
        }

        const tests = spawn("npx", ["mocha", "test/test-front.test.js"], {
            stdio: "inherit",
        });

        tests.on("close", (code) => {
            console.log(`Tests finished with code ${code}`);
            server.kill();
            process.exit(code);
        });
    }
);
