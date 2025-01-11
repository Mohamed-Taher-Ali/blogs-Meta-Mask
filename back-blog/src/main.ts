import { App } from "./app";

const app = new App()
const port = 5000

app.server.listen(port, () => console.log(`listening on port ${port} !`))