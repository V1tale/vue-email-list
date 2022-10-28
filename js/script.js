const {createApp} = Vue;
createApp({
    data(){
        return {
            emailArray: [],
        }
    },
    methods: {
        randomEmailGenerator() {
            axios
            .get(`https://flynn.boolean.careers/exercises/api/random/mail`)
            .then ((fromServer) => {
                console.log(fromServer);

            })
        }
    },



}).mount("#app");