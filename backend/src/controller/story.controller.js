import Story from "../model/story.model.js"


export const createStory = async (req, res) => {

    try {
        const { title, description, date } = req.body;

        const newStory = ({
            title,
            description,
            date,
            epic: req.epic.id
        })

        const saveStory = await newStory.save();
        res.json(saveStory);

    } catch (error) {
        res.status(400).json({ message: error.message })
    }


}

export const getStories = async (req, res) => {


    try {
        const stories = await Story.find({
            epic: req.epic.id
        }).populate("epic")
        if (!stories) {
            throw new Error("Stories no encontradas")
        }

        res.json(stories);

    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const getStory = async (req, res) => {

    try {
        const story = await Story.findById(req.params.id).populate("epic")
        if (!story) {
            throw new Error("Story no encontrada")
        }
        res.json(story)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const updateStory = async (req, res) => {
    try {
        const story = await Story.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }).populate("epic")


        if (!story) {
            throw new Error("no se pudo actualizar la story")
        }
        res.json(story)

    } catch (error) {
        res.status(404).json({ message: message.error })
    }
}

export const deleteStory = async (req, res) => {
    try {
        const storyDelete = await Story.findByIdAndDelete(req.params.id)


        if (!storyDelete) {
            throw new Error("La story no se pudo eliminar correctamente")
        }

        res.json(storyDelete)

    } catch (error) {
        res.satatus(404).json({ message: error.message })
    }
}