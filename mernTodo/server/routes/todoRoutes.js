const router = require("express").Router();
const todoModels = require("../models/todoModels");

router.post("/api/item", async (req, res) => {
  try {
    const newItem = new todoModels({
      item: req.body.item,
    });
    const saveItem = await newItem.save();
    res.status(200).json("Item added successfully");
  } catch (error) {
    res.json(error);
  }
});

router.get("/api/items", async (req, res) => {
  try {
    const allTodoItems = await todoModels.find({});
    res.status(200).json(allTodoItems);
  } catch (err) {
    res.json(err);
  }
});

router.put("/api/item/:id", async (req, res) => {
  try {
    const updateTodoItems = await todoModels.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("item updated");
  } catch (err) {
    res.json(err);
  }
});

router.delete("/api/item/:id", async (req, res) => {
  try {
    const deletedTodoItems = await todoModels.findByIdAndDelete(req.params.id);
    res.status(200).json("item deleted");
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
