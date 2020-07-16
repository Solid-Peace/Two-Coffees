import axios from "axios"

/*
*
*   New Instance of Axios
*
*
*************************/

export default class Update
{
    instance;


    constructor(authToken) {
        this.authToken = authToken;
        this.setInstance();
    }

    setInstance() {
        this.instance = axios.create();
        this.instance.defaults.headers.common['Authorization'] = this.authToken;
    }
}