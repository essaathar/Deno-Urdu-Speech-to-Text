import { Application, Router } from "@oak/oak";
import { oakCors } from "@tajpouria/cors";

const router = new Router();

const data = [
    {
      "name": "Aardonyx",
      "description": "An early stage in the evolution of sauropods."
    },
    {
      "name": "Abelisaurus",
      "description": "\"Abel's lizard\" has been reconstructed from a single skull."
    },
    {
      "name": "Abrictosaurus",
      "description": "An early relative of Heterodontosaurus."
    }
]

// Routes
router.get("/api/dino", (context) => {
    context.response.body = data;
});

router.post("/api/upload", async (context) => {

});

// App
const app = new Application();
// app.use(oakCors({
//     origin: "http://localhost:5173" 
// }));
app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ hostname, port, secure }) => {
    console.log(
        `Listening on: ${secure ? "https://" : "http://"}${
            hostname ?? "localhost"
        }:${port}`
    );
});

await app.listen({ port: 8000 }); // Backend url port

