const {createApp} = Vue;
createApp({
    data(){
        return {
            emailArray: [],
            email: null,
        }
    },
    created() {
        this.randomEmailGenerator();
    },
    methods: {
        randomEmailGenerator() {
            for ( let i = 0; i < 10; i++) {

            axios
            .get(`https://flynn.boolean.careers/exercises/api/random/mail`)
            .then ((fromServer) =>  {
             email = fromServer.data.response;
             console.log(email);
             this.emailArray.push(email);
            });
        };
    },




}}).mount("#app");