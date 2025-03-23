let buttons = document.querySelectorAll('button');
let display = document.querySelector('.main-board p');
var expression = "";
var calculateResult = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {

        switch (button.dataset.type) {
            case 'op':
                console.log('operator');
                expression += button.innerText;
                break;
            case 'C':
                console.log('ac');
                expression = "";
                display.innerText = "";
                break;
            case 'delete':
                console.log('delete');
                expression = expression.slice(0, -1);
                break;
            case 'result':
                calculateResult = calculateExpression(expression);
                display.innerText = calculateResult;
                expression = "";
                return;
            default:
                console.log('number');
                expression += button.innerText;
                break;
        }
        display.innerText = expression;
        console.log(expression);
    })
});


//유효성 검사하는 함수 (식이 맞는지 확인)
function invalidExpression(expression) {
    console.log("invlidExpression:", expression);
    if (!/^[0-9+\-*/(). ]+$/.test(expression)) return false;
    return true;
}

function calculateExpression(expression) {
    if (!invalidExpression(expression)) {
        throw Error('유효하지 않은 계산식 입력');
    }

    try {
        return new Function("return " + expression)();
    } catch (error) {
        return "계산 중 오류 발생!";
    }
}

//to-do -> 지우기 버튼