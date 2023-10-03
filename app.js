
import express from "express";

const pets = [
  { id: 1, name: "mestan" },
  { id: 2, name: "toplan" },
];

const app = express();
app.use(express.json()); 

function generateId() {
    const maxId = Math.max(...pets.map((pet) => pet.id), 0);
    return maxId + 1;
  }

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

app.post("/pets", (req, res) => {
    const newPet = req.body;
    if (!newPet || !newPet.name) {
      return res.status(400).json({ message: "Bad Request: Pet name is required" });
    }
  
    const id = generateId();
    pets.push({ id, ...newPet });
  
    return res.status(201).json(pets);
});

app.listen(10000, () => {
  console.log('Server is running on port 10000');
});