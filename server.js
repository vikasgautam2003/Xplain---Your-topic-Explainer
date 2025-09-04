





import express from "express";
import { explainTopic } from "./langchain.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { result: null, topic: null });
});

app.post("/explain", async (req, res) => {
  const topic = req.body.topic;
  try {
    if (!topic) {
      return res.render("index", { result: "Please enter a topic to explain.", topic: "" });
    }
    console.log(`Received form submission for topic: ${topic}`);
    const explanation = await explainTopic(topic);
    res.render("index", { result: explanation, topic: topic });
  } catch (error) {
    console.error("Error processing explanation:", error);
    res.render("index", { 
      result: "Sorry, an error occurred while fetching the explanation. Please try again.", 
      topic: topic 
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
