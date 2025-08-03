import Epic from "../model/epic.model.js";

function isValidObjectId(id) {
  const objectIdRegex = /^[0-9a-fA-F]{24}$/;
  return objectIdRegex.test(id);
}

export const loadEpicForStories = async (req, res, next) => {
  try {
    const epicId = req.params.epicId;
    const epicIdAlternative = req.params.id;

    if (!epicId && !epicIdAlternative) {
      return res.status(400).json({
        message: "Falta epicId",
        debug: {
          params: req.params,
          url: req.originalUrl,
          availableKeys: Object.keys(req.params),
        },
      });
    }

    const finalEpicId = epicId || epicIdAlternative;
    console.log("Epic ID final a usar:", finalEpicId);

    if (!isValidObjectId(finalEpicId)) {
      console.log("Error: ID de épica inválido:", finalEpicId);
      return res.status(400).json({ message: "ID de épica inválido" });
    }

    console.log("🔍 Buscando épica en DB con ID:", finalEpicId);
    const epic = await Epic.findById(finalEpicId).populate("project");

    if (!epic) {
      console.log("Error: Épica no encontrada en DB");
      return res.status(404).json({ message: "Epica no encontrada" });
    }

    console.log("Épica encontrada:", epic.title);
    console.log("Proyecto de la épica:", epic.project._id.toString());
    console.log("Proyecto solicitado:", projectId);

    if (epic.project._id.toString() !== projectId) {
      console.log("rror: La épica no pertenece al proyecto");
      return res
        .status(400)
        .json({ message: "La épica no pertenece al proyecto indicado" });
    }

    if (epic.project.user.toString() !== req.user.id) {
      console.log("Error: Usuario no autorizado");
      return res.status(403).json({ message: "Acceso denegado a la epica" });
    }

    console.log(
      "Middleware FOR STORIES exitoso, pasando al siguiente middleware"
    );
    req.epic = epic;
    req.project = epic.project;
    next();
  } catch (error) {
    console.error("Error crítico en loadEpicForStories:", error.message);
    console.error("Stack trace:", error.stack);
    res
      .status(500)
      .json({ message: "Error al cargar la epica", error: error.message });
  }
};
