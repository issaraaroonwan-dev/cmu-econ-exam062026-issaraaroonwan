const express = require("express");
const router = express.Router();

const db = require("../config/config_db");
const academicQuery = require("../queries/academicQuery");

// GET All Academic List
router.get("/getallacademic", async (req, res) => {
  try {
    const [results] = await db.query(academicQuery.GET_ACADEMIC);

    res.json(results);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
});

// GET Academic Find One
router.get("/findoneacademic", async (req, res) => {
  try {
    console.log(req.query);
    const id = req.params.id;
    const [results] = await db.query(academicQuery.GET_FINEONEACADEMIC, [id]);

    res.json(results);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
});

//Port Create New Academic
router.post("/createacademic", async (req, res) => {
  try {
    const reqFromData = req.body;

    const [results] = await db.query(academicQuery.CREATE_NEWACADEMIC, [
      reqFromData.title,
      reqFromData.description,
      reqFromData.responsible_person,
      reqFromData.service_year,
      reqFromData.status,
      reqFromData.created_at,
      reqFromData.updated_at,
      reqFromData.deleted_at,
    ]);

    res.status(200).send("new academic is create success");
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
});

//Update Academic
router.post("/updateacademic", async (req, res) => {
  try {
    const reqFromData = req.body;

    const [results] = await db.query(academicQuery.UPDATE_ACADEMIC);

    res.status(200).send("academic is updated success");
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
});

//Soft Delete Academic

router.post("/softdeleteacademic", async (req, res) => {
  try {
    const reqFromData = req.body;

    const sqlQuery = "";

    const [results] = await db.query(academicQuery.SOFTDELETE_ACADEMIC);

    res.status(200).send("academic is soft delete success");
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
});

module.exports = router;
