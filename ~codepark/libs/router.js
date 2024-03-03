import "../loader.js"
import { FileSystemRouter } from "bun";

 function main() { return new FileSystemRouter({
    dir:  "~codepark/(vfs)",
    style: "nextjs",
    fileExtensions: globalThis.loaders
});
};

export {main};

globalThis.FileSystem = main()