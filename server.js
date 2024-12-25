import express from "express";
import path from "path";
import fetchData from "./fetchData.js";
import evaluateChecklist from "./rules/cheklist.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Set the view engine fro ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// serving static files
app.use(express.static(path.join(__dirname, "public")));

//  routes
app.get("/", async (req, res) => {
  try {
    const data = await fetchData();
    const checklistResults = evaluateChecklist(data);
    res.render("index", { checklistResults });
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

// running the server
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
