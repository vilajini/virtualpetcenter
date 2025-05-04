const Pet = require('../models/petModel');
const { getMood } = require('../utils/moodLogic');

// Create pet
exports.createPet = async (req, res) => {
  try {
    const newPet = await Pet.create(req.body);
    await newPet.save();
    res.status(201).json(newPet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all pets
exports.getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    const petsWithMood = pets.map(pet => ({
      ...pet._doc,
      mood: getMood(pet.createdAt)
    }));
    res.json(petsWithMood);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single pet
exports.getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) return res.status(404).json({ message: 'Pet not found' });

    res.json({ ...pet._doc, mood: getMood(pet.createdAt) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update pet
exports.updatePet = async (req, res) => {
  try {
    const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Adopt pet
exports.adoptPet = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) return res.status(404).json({ message: 'Pet not found' });

    pet.adopted = true;
    pet.adoption_date = new Date();
    await pet.save();

    res.json(pet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete pet
exports.deletePet = async (req, res) => {
  try {
    await Pet.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pet deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Filter by mood
exports.filterByMood = async (req, res) => {
  try {
    const pets = await Pet.find();
    const filtered = pets.filter(pet => getMood(pet.createdAt) === req.query.mood);
    res.json(filtered);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
