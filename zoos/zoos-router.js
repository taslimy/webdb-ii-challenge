const express = require("express");

const Zoos = require("./zoos-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const zoos = await Zoos.find();
    res.status(200).json(zoos);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot get it"
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const zoos = await Zoos.findById(req.params.id);
    res.status(200).json(zoos);
  } catch (error) {
    res.status(500).json({
      msg: "cannot get id"
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const zoos = await Zoos.insert(req.body);
    res.status(201).json(zoos);
  } catch (error) {
    res.status(500).json({
      msg: "cannot add a zoo sadly sorry"
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const zoos = await Zoos.update(req.params.id, req.body);
    if (updated) {
      res.status(200).json({ msg: "zoo edited successfully" });
    } else {
      res.status(404).json({ msg: "cannot edit this zoo." });
    }
  } catch (error) {
    res.status(500).json({
      msg: "cannot edit this zoo name"
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const zoos = await Zoos.remove(req.params.id);
    if (deleted) {
      res.status(200).json({ msg: "zoo deleted" });
    } else {
      res.status(404).json({ msg: "unable to find that id" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot delete this zoo sorry"
    });
  }
});

module.exports = router;
