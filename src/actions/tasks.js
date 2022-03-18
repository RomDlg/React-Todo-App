import axios from "axios"
import { store } from "../app/store"
import { initTask } from "../features/TaskSlice"

export const getTasks = async () => {
    await axios.get("http://localhost:8000/task")
    .then(res => store.dispatch(initTask(res.data)))
}

export const postTask = async(title, description, pid) => {
    await axios.post("http://localhost:8000/task", {
        "title": title,
        "description": description,
        "projectId": pid,
        "done": false

    })
    getTasks()
}

export const editTask = async (id, title, description, pid,) => {
    await axios.put("http://localhost:8000/task/" + id, {
        "title": title,
        "description": description,
        "projectId": pid,
        "done": false
    })
    getTasks()
}

export const setDone = async (id, title, description, pid) => {
    await axios.put("http://localhost:8000/task/" + id, {
        "title": title,
        "description": description,
        "projectId": pid,
        "done": true
    })
    getTasks()
}

export const setToDo = async (id, title, description, pid) => {
   await axios.put("http://localhost:8000/task/" + id, {
        "title": title,
        "description": description,
        "projectId": pid,
        "done": false
    })
    getTasks()
}

export const deleteTask = async(id) => {
    await axios.delete('http://localhost:8000/task/' + id)
    getTasks()
}