/*
*
* Default Axios Request
* 
************/



axios.interceptors.request.use(config => {
    if(localStorage.authToken){
        config({
            headers: {
                'Authorization': localStorage
            }
        })
    }
});


axios.interceptors.response.use( response => {
    if(response.status == 401){
        alert('wrong token');
        localStorage.clear();
    }

    if(response.data.UserInstance){
        console.log('in axios main', this);
        console.log('in axios main', response.data.UserInstance);
    }
})