const express = require('express');

const Bears = require('./bears-model');

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const bears = await Bears.find();
    res.status(200).json(bears);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot get it"
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const bears = await Bears.findById(req.params.id);
    res.status(200).json(bears);
  } catch (error) {
    res.status(500).json({
      msg: "cannot get id"
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const bears = await Bears.insert(req.body);
    res.status(201).json(bears);
  } catch (error) {
    res.status(500).json({
      msg: "cannot add a bear sadly sorry"
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const bears = await Bears.update(req.params.id, req.body);
    if (updated) {
      res.status(200).json({ msg: "bear edited successfully" });
    } else {
      res.status(404).json({ msg: "cannot edit this bear." });
    }
  } catch (error) {
    res.status(500).json({
      msg: "cannot edit this bear name"
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const bears = await Bears.remove(req.params.id);
    if (deleted) {
      res.status(200).json({ msg: "bear deleted" });
    } else {
      res.status(404).json({ msg: "unable to find that id" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot delete this bear sorry"
    });
  }
});

module.exports = router;
