import Epic from "../model/epic.model.js"

export const createEpic = async (req, res) => {
    try {
        const { title, description, date } = req.body;
        const newEpic = new Epic({
            title,
            description,
            date,
            project: req.project.id
        })
        const saveEpic = await newEpic.save()

        if (!newEpic) {
            throw new Error("Epica no encontrada")
        }
        res.json(saveEpic)
    } catch {
        res.status(404).json({
            message: error.message
        })
    }
}


export const getEpics = async (req, res) => {
    try {
        const epics = await Epic.find({
            project: req.project.id
        }).populate("project")

        if (!epics) {
            throw new Error("No se encontraron las epicas")
        }

        res.json(epics)

    } catch (error) {
        res.status(404).json({ message: error.message })

    }
}


export const getEpic = async (req, res) => {
    try {
        const epic = await Epic.findById(req.params.id).populate("project")
        if (!epic) {
            throw new Error("Epica no encontrada")
        }
        res.json(epic)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const uptadeEpic = async (req, res) => {
    try {
        const epic = await Epic.findByIdAndUpdate(req.params.id, req.bodyk, {
            new: true
        }).popluta("project")

        if (!epic) {
            throw new Error("no se pudo actualizar la epica")
        }
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

export const deleteEpic = async (req, res) => {
    try {
        const epic = await Epic.findByIdAndDelete(req.params.id)

        if (!epic) {
            throw new Error("No se pudo eliminar correctamente la epica")
        }
    } catch (error) {
        res.status(404).json({
            message: error.messatge

        })
    }
}