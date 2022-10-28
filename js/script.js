const {createApp} = Vue;
createApp({
    data(){
        return {
            emailArray: [],
            email: "",
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
             this.email = fromServer.data.response;
             console.log(this.email);
            });
            this.emailArray.push(this.email);
        };
    },




}}).mount("#app");