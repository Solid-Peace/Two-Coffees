import axios from "axios"

/*
*
* New Instance of Axios
*
*
*************************/

export default class Login
{

    singleFileComponent;
    user_credentials;
    instance;

    constructor(singleFileComponent) {

        this.singleFileComponent = singleFileComponent;

        console.log(singleFileComponent);

        // Fisrt we create new personalized request instance of axios

        this.setInstance();

        // Then attach it middlewares that named interceptors 
        // Both, request and response

        this.setInterceptorsRequest();
        this.setInterceptorsResponse();
    }


    setInstance() {

        this.instance = axios.create({

            url: "/api/auth/login",
            method: "post",
            headers: {
            "Content-Type": "application/json"
            },
        });
    }

    setInterceptorsResponse() {

        this.instance.interceptors.response.use( function(response) {

            console.log(response);

            if(response.status == 401) {

                console.log(response.statusText);

                alert('Wrong Credentials');
                singleFileComponent.frame = register;
            }

            if(response.data.authToken) {

                localStorage.authToken = response.data.authToken;
                console.log('authToken is stored');
            }

            return response

        }, function (error) {

            return Promise.reject(error);
        });
    }

    setInterceptorsRequest() {

        this.instance.interceptors.request.use(function(config){

            console.log(config);
            return config;
        });
    }
}
