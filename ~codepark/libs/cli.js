globalThis.$ = {
    env: Object.assign({}, process.env),
    get cwd() {
        if (this.CWD) return this.CWD
        return process.cwd()
    }
}