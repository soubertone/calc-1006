        // Adicionar evento de click
        function getnum(keyValue) {
            // Add initial variables
            var detail      = document.getElementById('result'),
                detailValue = detail.value,
                lastChar    = detailValue[detailValue.length - 1],
                result      = document.getElementById('up'),
                countValue  = 4, //Variavel usada para contar quantidade de valores
                countLimit  = 12, //Variavel usada para limitar quantidade de numeros
                messageAlert = 'Limite excedido!';

            // Use switch case for different function of keys
            switch (keyValue) {
                // Case for clearing the calculator
                case 'c':
                    result.value = '';
                    detail.value = '';
                    break;
                // Show the result for calculation
                case '=':
                    if (detail.value != '') {
                        result.value = eval(detailValue);
                        decimalAdded = false;
                    }
                    break;
                // Case for arithmatic operator
                case '/':
                case '*':
                case '-':
                case '+':
                case '%':
                    detail.value += keyValue;

                    decimalAdded = false;
                    lastOperator = keyValue;
                    break;
                // Case for delete char
                case 'del':
                    if (lastChar == '.') {
                        decimalAdded = false;   
                    }

                    detail.value = detail.value.replace(/.$/, '');
                    break;
                // Case for add period
                case '.':
                    if ( ! decimalAdded) {
                        detail.value += keyValue;
                        decimalAdded = true;
                    }
                    break;
                // Beside of that, just displaying the key value to the calculation
                // This is used for number
                case 'GET':
                    break;
                default:
                    if(result.value.length <= countLimit) {

                    detail.value += keyValue;

                        if(detail.value.length == countValue) {
                            result.value += detail.value + '/' 
                            detail.value = ''
                            document.getElementById("input").value=result.value
                        }
                    } else {
                        alert(messageAlert);
                    }
                    break;
            }
        }
