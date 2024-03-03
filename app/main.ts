import { edenTreaty } from "@elysiajs/eden";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { swagger } from "@elysiajs/swagger";
import { Elysia } from "elysia";

const setup = new Elysia();

const plugins = setup
    .use(staticPlugin({
        assets: "./~codepark/(vfs)",
        prefix: "/"
    })).use(swagger())
    .use(html());

const app = new Elysia().use(plugins).get("/", () => Bun.file('index.html', {
    type: "text/html"
}));

const main = app.listen(process.env.PORT ?? 1337, (server) => {
    console.log(server.url.toString())
});

type Main = typeof main;

const client = edenTreaty<Main>('http://localhost:1337');


if (process.env.checkEden){
const index = (await client.get()).data;

console.log(index)}