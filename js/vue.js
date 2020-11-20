const myApp = new Vue({
    el: "#root",
    data: {
        inputs: [],
        message: '',
    },
    methods: {
        addText: function() {
          if (this.message === "") {
              alert('add text!')
          } else {
              this.inputs.push(this.message);
              this.message = ''
          }
        },
        canc: function(delIndex) {
            this.inputs.splice(delIndex, 1)
    }

});
