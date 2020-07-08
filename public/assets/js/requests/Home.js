import axios from "axios"

/*
*
*   New Instance of Axios
*
*
*************************/

export default class Home
{
    instance;
    singleFileComponent;

    constructor(authToken, singleFileComponent) {
        this.singleFileComponent = singleFileComponent;
        this.authToken = authToken;
        this.setInstance();
        this.setInterceptorsResponse();
    }

    setInstance() {
        this.instance = axios.create();
        this.instance.defaults.headers.common['Authorization'] = this.authToken;
    }

    setInterceptorsResponse() {

        this.instance.interceptors.response.use( (response) => {

            console.log('in interceptor', response.data.UserInstance);
            console.log(this);

            if(response.status == 401) {
                alert('wrong token signature');
                singleFileComponent.frame = register;
            }

            if(response.status == 403) {
                alert('User not Found');
                singleFileComponent.frame = register;
            }

            if(response.data.UserInstance) {
                this.singleFileComponent.UserInstance = response.data.UserInstance;

                this.singleFileComponent.frame = "userInstance";
            }

            return response;
        })
    }
}