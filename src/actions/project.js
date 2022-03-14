import axios from "axios"
import { store } from "../app/store"
import { initProjects } from "../features/ProjectSlice"

export const getProjects = () => {
    axios.get("http://localhost:8000/project")
    .then(res => store.dispatch(initProjects(res.data)))
}

export const postProject = (title) => {
    axios.post("http://localhost:8000/project", {
        "title": title
    })
    getProjects()
}

export const editProject = (id, text) => {
    axios.put("http://localhost:8000/project/" + id, {
        title: text
    })
    getProjects()
}

export const deleteProject = (id) => {
    console.log('delete')
    axios.delete('http://localhost:8000/project/' + id)
    getProjects()
}  