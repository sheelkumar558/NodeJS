//const express = require("express");
const { default: mongoose } = require("mongoose");

//create schema
const TodoItemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("todo", TodoItemSchema);
