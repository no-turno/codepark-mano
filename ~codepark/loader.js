import { randomUUID } from "crypto";
import "./libs/loaders.js"
import "./libs/router.js"
import "./libs/cli.js"

const vfsOrigin = FileSystem.origin
const routes = FileSystem.routes
const devEnv = require(FileSystem.match("/env").filePath);

const context = {
    vfsOrigin,
    routes,
    env: {
        ['development']: devEnv,
    }
};

globalThis.Bun['~codepark'] = {
    context,
    [Symbol.for('meta')]: {
        id: randomUUID(),
        main: Bun.main
    }
};

globalThis.shell =  Bun.$.env($.env).cwd($.cwd);

if (process.env.LOG_SHELL_COMMANDS === "1"){
    await shell`ls`
}