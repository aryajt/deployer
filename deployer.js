const express = require("express");
const { exec } = require("child_process");

const app = express();
const PORT = 3001;


app.get("/deploy/shop", (req, res) => {
    const pm2Name = 'Shop'
    const branchName = 'test-back';
    const projectDir = "/home/net/shop-test";
    exec(`cd ${projectDir} && git fetch`, (fetchError) => {
        if (fetchError) {
            return res.status(500).send("Failed to fetch updates.");
        }
        exec(`cd ${projectDir} && git checkout ${branchName} && git pull`, (checkoutError) => {
            if (checkoutError) {
                return res.status(500).send(`Failed to checkout ${branchName} branch.`);
            }
            exec(`cd ${projectDir} && npm install`, (installError) => {
                if (installError) {
                    return res.status(500).send("Failed to install dependencies.");
                }

                exec(`cd ${projectDir} && pm2 restart ${pm2Name}`, (pm2Error) => {
                    if (pm2Error) {
                        return res.status(500).send("Failed to restart app with PM2.");
                    }
                    res.send("Application updated, dependencies installed, and restarted.");
                });
            });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
