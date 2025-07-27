import Project from "../model/project.model.js";


export const createProjects = async (req, res) => {
    const { title, description, date } = req.body;
    const newProject = new Project({
        title,
        description,
        date,
        user: req.user.id
    })
    const saveProject = await newProject.save();
    res.json(saveProject)
}

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({
            user: req.user.id,
        }).populate('user');

        if (!projects) {
            throw new Error("Proyectos no encontrados")
        }
        res.json(projects)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const getProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id).populate('user');
        if (!project) {
            throw new Error("Proyecto no encontrado")
        }
        res.json(project)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const updateProject = async (req, res) => {
    try {
        const projectId = await Project.findByIdAndUpdate(req.params.id, req.body, {
            new: true//Esto nos permite devolver el proyecto actual
        })
        if (!projectId) {
            throw new Error("Proyecto no encontrado para actualizar")
        }
        res.json(projectId)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const deleteProject = async (req, res) => {

    try {
        const projectId = await Project.findByIdDelete(req.params.id)
        if (!projectId) {
            throw new Error("Proyecto no encontrado para eliminar")
        }
    } catch (error) {
        res.status(404).json({message:error.message})
    }
    res.json(projectId)
}

