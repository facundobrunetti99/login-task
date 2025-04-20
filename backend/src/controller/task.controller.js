import Task from "../model/task.model.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find({
    user:req.user.id,
  }).populate('user');
  res.json(tasks);
};
export const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id).populate('user');
  if (!task) return res.status(404).json({ message: "Tarea no encontrada" });
  res.json(task);
};


export const updateTask = async (req, res) => {
  const taskUpdate = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true /*tener en cuenta que me devuelve la tarea anterior */,
    /*al poner esto devuelve la tarea principal */
  });
  if (!taskUpdate)
    return res.status(404).json({ message: "Tarea no encontrada" });
  res.json(taskUpdate);
};



export const createTask = async (req, res) => {
  const { title, description, date } = req.body;
  const newTask = new Task({

    title,
    description,
    date,
    user:req.user.id
  });
  const saveTask = await newTask.save();
  res.json(saveTask);
};
export const deleteTask = async (req, res) => {
  const taskDelete = await Task.findByIdAndDelete(req.params.id);
  if (!taskDelete)
    return res.status(404).json({ message: "Tarea no encontrada" });
  res.json(taskDelete);
};
