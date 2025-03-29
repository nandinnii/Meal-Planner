const express = require("express");
const app = express();
const port = 5001;
const cors = require("cors");
app.use(cors());


const meals = [
  { id: 1, name: "Oatmeal", type: "Breakfast" },
  { id: 2, name: "Salad", type: "Lunch" },
  { id: 3, name: "Spaghetti", type: "Dinner" }
];

app.get("/meal-plan", (req, res) => {
  res.json(meals);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

