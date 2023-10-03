
import express from "express";

const pets = [
  { id: 1, name: "mestan" },
  { id: 2, name: "toplan" },
];

const app = express();
app.use(express.json()); // Add JSON parsing middleware

app.get("/pets", (req, res) => {
  return res.json(pets);
});

app.get("/pets/:id", (req, res) => {
  const pet = pets.find(({ id }) => id === +req.params.id);
  if (!pet) {
    return res.status(404).json({ message: "Pet not found" });
  }
  return res.json(pet);
});

app.listen(1000, () => {
  console.log('Server is running on port 10000');
});