import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://todo-list-01-2f8b1-default-rtdb.europe-west1.firebasedatabase.app/',
})

export const taskApi = {

    getTasks() {
        return instance.get(`tasks.json`)
            .then(response => response.data)
    },
    addTask(data) {
        return instance.post(`tasks.json`, data)
            .then(response => response.data)
    },
    deleteTask(id) {
        return instance.delete(`tasks/${id}.json`)
            .then(response => response.data)
    }

}
