const {createApp} = Vue

createApp({

    //data è una funzione
    data(){

        //return è un oggetto
        return{
            message: 'Hello world'
        }
    }
}).mount('#app')