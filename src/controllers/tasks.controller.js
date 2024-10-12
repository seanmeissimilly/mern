import Task from "../models/task.model.js";

export const getTasksByUser = async (req, res) => {
  try {
    //Todo: Busco las tareas del usuario.
    const tasks = await Task.find({ user: req.user.id }).populate("user");
    res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTasks = async (req, res) => {
  try {
    //Todo: Busco todas las tareas.
    const tasks = await Task.find().populate("user");
    res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const newTask = new Task({
      title,
      description,
      date,
      user: req.user.id,
    });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(req.params.id);
    if (!deleteTask) return res.status(404).json({ message: "Task not found" });
    res.status(204).json(deleteTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updateTask) return res.status(404).json({ message: "Task not found" });
    res.status(200).json(updateTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const taskFound = await Task.findById(req.params.id).populate("user");
    if (!taskFound) return res.status(404).json({ message: "Task not found" });
    res.status(200).json(taskFound);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
