const express = require("express");
const router = express.Router();
const uuid = require("uuid");

const members = require("../../Members");

// gets all members
router.get("/", (req, res) => res.json(members));

// get single member
router.get("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `no members with ${req.params.id} id` });
  }
});

// create new member
router.post("/create", (req, res) => {
  const member = {
    id: uuid.v4(),
    name: req.body.name,
    age: req.body.age,
    sex: req.body.sex,
    status: "active",
  };

  if (!member.name || !member.sex) {
    return res.status(400).json({ msg: "incorrect data" });
  }

  members.push(member);
  res.json(members);
});

// update member
router.put("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    const updMember = req.body;
    members.forEach((member) => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updMember.name ? updMember.name : member.name;
        member.age = updMember.age ? updMember.age : member.age;
        member.sex = updMember.sex ? updMember.sex : member.sex;

        res.json({ msg: "member was updated", member: member });
      }
    });
  } else {
    res.status(400).json({ msg: `no members with ${req.params.id} id` });
  }
});

// delete member
router.delete("/:name", (req, res) => {
  const found = members.some((member) => member.name === req.params.name);

  if (found) {
    res.json({ 
        msf : "member deleted", 
        members : members.filter((member) => member.name != req.params.name) });
  } else {
    res.status(400).json({ msg: `no members with ${req.params.id} id` });
  }
});

module.exports = router;
