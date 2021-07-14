//import axios from 'axios';
import ServerConfig from '@/api/ServerConfig'

export default new class ProjectsApi{
    constructor(){
        this.config = new ServerConfig();
    }

    async getProjects(){
        return new Promise(resolve => {
            const data = [
                {name: "Project 1", revision: 123},
                {name: "Project 2", revision: 34},
                {name: "Project 3", revision: 23},
                {name: "Project 123", revision: 5},
                {name: "Project 34", revision: 66},
            ];
            setTimeout(() => {
                resolve(data);
            }, 10); 
        })
        // return axios.get(`${this.config.uri}/${this.config.projects}`)
        //     .then(response => response.data)
    }

    async addProject(payload){
        return new Promise(resolve => {
            const data = [
                payload
            ];
            const response = 200;
            setTimeout(() => {
                resolve({data, response});
            }, 10); 
        })
    }
}