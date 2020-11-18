const userInput = [];

const myApp = new Vue({
    el: "#root",
    data: {
        inputs: userInput,
        message: ''
    },
    methods: {
        addText: function() {
            userInput.push(this.message)
        },
        canc: function() {
            userInput.splice(this.message)
        }
    }

})
