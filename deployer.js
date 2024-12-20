const express = require("express");
const { exec } = require("child_process");

const app = express();
const PORT = 3001;


app.get("/deploy/shop", (req, res) => {
    const pm2Name = 'Shop-test'
    const branchName = 'back-test';
    const projectDir = "/home/net/shop-test/shop";
    exec(`cd ${projectDir} && git fetch`, (fetchError) => {
        if (fetchError) {
            return res.status(500).send("Failed to fetch updates.");
        }
        exec(`cd ${projectDir} && git checkout ${branchName} && git pull`, (checkoutError) => {
            if (checkoutError) {
                return res.status(500).send(`Failed to checkout ${branchName} branch.`);
            }
            exec(`cd ${projectDir} && npm install --force`, (installError) => {
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

app.get("/deploy/zar", (req, res) => {
    const pm2Name = 'zar'
    const branchName = 'back-test';
    const projectDir = "/home/net/zar";
    exec(`cd ${projectDir} && git fetch`, (fetchError) => {
        if (fetchError) {
            return res.status(500).send("Failed to fetch updates.");
        }
        exec(`cd ${projectDir} && git checkout ${branchName} && git pull`, (checkoutError) => {
            if (checkoutError) {
                return res.status(500).send(`Failed to checkout ${branchName} branch.`);
            }
            exec(`cd ${projectDir} && npm install --force`, (installError) => {
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

app.get("/deploy/zar-front", (req, res) => {
    const pm2Name = 'zar-front'
    const branchName = 'panel-test';
    const projectDir = "/home/front/zaradmin";
    exec(`cd ${projectDir} && git fetch`, (fetchError) => {
        if (fetchError) {
            return res.status(500).send("Failed to fetch updates.");
        }
        exec(`cd ${projectDir} && git checkout ${branchName} && git pull`, (checkoutError) => {
            if (checkoutError) {
                return res.status(500).send(`Failed to checkout ${branchName} branch.`);
            }
            exec(`cd ${projectDir} && npm install --force`, (installError) => {
                if (installError) {
                    return res.status(500).send("Failed to install dependencies.");
                }

                exec(`cd ${projectDir} && npm run build`, (pm2Error) => {
                    if (pm2Error) {
                        return res.status(500).send("Failed to restart app with PM2.");
                    }
                    res.send("Application updated, dependencies installed, and restarted.");
                });
            });
        });
    });
});

app.get("/deploy/multi", (req, res) => {
    const pm2Name = 'multi'
    const branchName = 'back-test';
    const projectDir = "/home/net/multi";
    exec(`cd ${projectDir} && git fetch`, (fetchError) => {
        if (fetchError) {
            return res.status(500).send("Failed to fetch updates.");
        }
        exec(`cd ${projectDir} && git checkout ${branchName} && git pull`, (checkoutError) => {
            if (checkoutError) {
                return res.status(500).send(`Failed to checkout ${branchName} branch.`);
            }
            exec(`cd ${projectDir} && npm install --force`, (installError) => {
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

app.get("/deploy/pars", (req, res) => {
    const pm2Name = 'pars-test'
    const branchName = 'back-test';
    const projectDir = "/home/net/pars";
    exec(`cd ${projectDir} && git fetch`, (fetchError) => {
        if (fetchError) {
            return res.status(500).send("Failed to fetch updates.");
        }
        exec(`cd ${projectDir} && git checkout ${branchName} && git pull`, (checkoutError) => {
            if (checkoutError) {
                return res.status(500).send(`Failed to checkout ${branchName} branch.`);
            }
            exec(`cd ${projectDir} && npm install --force`, (installError) => {
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
