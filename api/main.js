import { Application, Router } from "@oak/oak";
import { oakCors } from "@tajpouria/cors";

const router = new Router();

// Routes
router.get("/api/getReq", (context) => {
    context.response.body = "Welcome to Urdu-STT API!";
});

router.post("/api/upload", async (context) => {
    const body = await context.request.body({ type: "form-data" })
    console.log("Received upload request: ", body);
    
    // Ensure you handle form data correctly
    const formData = await body.value.read({ maxSize: 10_000_000 });  // Adjust max size as needed
    console.log("Uploaded form data: ", formData);
    
    context.response.body = { message: "File upload successful!" };
});

// App
const app = new Application();
app.use(oakCors({
    origin: "http://localhost:5173" 
}));
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

