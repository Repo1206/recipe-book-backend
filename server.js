// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// Sample recipe data
const recipes = [
  {
    id: 1,
    title: "Pasta Carbonara",
    description: "Delicious Italian pasta dish.",
  },
  {
    id: 2,
    title: "Chocolate Cake",
    description: "Rich and moist chocolate cake recipe.",
  },
  // Add more recipes here
];

// Use cors middleware
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Default route handler
app.get("/", (req, res) => {
  console.log("Default route handler triggered");
  res.send("Welcome to the Recipe Book API!");
});

// Routes
app.get("/api/recipes", (req, res) => {
  res.json(recipes);
});

app.get("/api/recipes/search", (req, res) => {
  const query = req.query.query.toLowerCase();
  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query)
  );
  res.json(filteredRecipes);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
