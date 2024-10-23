import { Application, Router } from "@oak/oak";

const router = new Router();

// Routes
router.get("/", (context) => {
    context.response.body = "Welcome to Urdu-STT API!";
});

router.get("/upload", (context) => {
    context.response.body = "Upload API called";
});

// App
const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 }); // Backend url port

