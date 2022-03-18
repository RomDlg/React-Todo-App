import axios from "axios"
import { store } from "../app/store"
import { initProjects } from "../features/ProjectSlice"

export const getProjects = async () => {
    await axios.get("http://localhost:8000/project")
    .then(res => store.dispatch(initProjects(res.data)))
}

export const postProject = async(title) => {
    await axios.post("http://localhost:8000/project", {
        "title": title
    })
    getProjects()
}

export const editProject = async (id, text) => {
    await axios.put("http://localhost:8000/project/" + id, {
        title: text
    })
    getProjects()
}

export const deleteProject = async (id) => {
    await axios.delete('http://localhost:8000/project/' + id)
    getProjects()
}  