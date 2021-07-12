var phase = 0;
var num1 = '';
var num2 = '';
var oper = '';
function display_num(added_num){
    if(phase == 0){
        num1 = num1 + added_num;
    }
    else{
        if(oper == ''){
            num1 = added_num;
        }
        else if(oper == '÷' && num2 == ''){
            if(added_num == 0){
            }
            else{
                num2 = num2 + added_num;
            }
        }
        else{
            num2 = num2 + added_num;
        }
    }
    document.getElementById('calc__display').textContent= num1+oper+num2;
}
function display_oper(added_oper){
    if(num1 == ''){

    }
    else if(num2 == ''){
        oper = added_oper;
        phase = 1;
    }
    document.getElementById('calc__display').textContent= num1+oper+num2;
}
function calculate(){
    var answer;
    var num1_int = Number(num1);
    var num2_int = Number(num2);
    if(oper == '+'){
        answer = num1_int+num2_int;
    }
    else if(oper == '−'){
        answer = num1_int-num2_int;
    }
    else if(oper == '×'){
        answer = num1_int*num2_int;
    }
    else if(oper == '÷'){
        answer = num1_int/num2_int;
    }
    else if(oper == ''){
        answer = num1_int;
    }
    var newCell = document.getElementById('history__table').insertRow(0);
    newCell.innerText = num1+oper+num2+'='+answer;
    num1 = answer;
    num2 = '';
    oper = '';
    document.getElementById('calc__display').textContent= num1+oper+num2;
    phase = 1;

}
function all_clear(){
    num1 = '';
    num2 = '';
    oper = '';
    document.getElementById('calc__display').textContent = '';
    phase = 0;
}