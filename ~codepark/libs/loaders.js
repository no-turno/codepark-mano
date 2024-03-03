const LOADERS = process.env.LOADERS || ""

const loaders = new Set([
    ".js",
    ".toml",
    ".json",
    ".ts",
    ".sh",
    ...LOADERS.split(",")
]).values()

const fileExtensions = [];

for await (const loader of loaders) {
    fileExtensions.push(loader.toString())
}

globalThis.loaders = fileExtensions.filter(item => item.length)

