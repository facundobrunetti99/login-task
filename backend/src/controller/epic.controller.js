import Epic from "../model/epic.model.js";

export const createEpic = async (req, res) => {
  try {
    const { title, description, date } = req.body;

    const newEpic = new Epic({
      title,
      description,
      date,
      project: req.project._id,
    });

    const savedEpic = await newEpic.save();

    res.status(201).json(savedEpic);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear la epica", error: error.message });
  }
};

export const getEpics = async (req, res) => {
  try {
    const epics = await Epic.find({ project: req.project._id });
    res.json(epics);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener epicas", error: error.message });
  }
};

export const getEpic = (req, res) => {
  console.log("=== CONTROLADOR GETEPIC ===");
  console.log("Epic desde middleware:", req.epic ? req.epic.title : "No epic");
  console.log(
    "Project desde middleware:",
    req.project ? req.project.title : "No project"
  );

  if (!req.epic) {
    return res
      .status(404)
      .json({ message: "Épica no encontrada en controlador" });
  }

  console.log("✅ Enviando épica al frontend");
  res.json(req.epic);
};

export const updateEpic = async (req, res) => {
  try {
    Object.assign(req.epic, req.body);
    const updatedEpic = await req.epic.save();
    res.json(updatedEpic);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al actualizar la epica", error: error.message });
  }
};

export const deleteEpic = async (req, res) => {
  try {
    await req.epic.deleteOne();
    res.json({ message: "Epica eliminada" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar la epica", error: error.message });
  }
};
