function  calculate(number){
    document.form.text.value = document.form.text.value + number
}

function equal(){
    var equal = document.form.text.value;

    if(equal){
        document.form.text.value = eval(equal);

    }
}

function callBack(){
    var exp = document.form.text.value;
    document.form.text.value = exp.substring(0,exp.length -1);
}

function del(){
    document.form.text.value = "0";

}