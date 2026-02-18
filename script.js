const calc = {
    display: document.getElementById("display"),

    append(num){
        this.display.value += num;
    },

    clear(){
        this.display.value = "";
    },

    add(){
        this.display.value += "+";
    },

    subtract(){
        this.display.value += "-";
    },

    multiply(){
        this.display.value += "*";
    },

    divide(){
        this.display.value += "/";
    },

    power(){
        this.display.value += "**";
    },

    modulus(){
        this.display.value += "%";
    },

    calculate(){
        try{
            this.display.value = eval(this.display.value);
        }
        catch{
            this.display.value = "Error";
        }
    }
};
