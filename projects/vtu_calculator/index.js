const resultsClass = document.querySelector('.resultsClass');

const form = document.querySelector('form')

form.addEventListener('submit', function (e) {

        e.preventDefault();

        const cgpa = parseFloat(document.querySelector('.userInput').value)

        const results = document.querySelector('.results');

        if (cgpa <= 0||isNaN(cgpa) ){
    results.innerHTML='please enter valid cgpa'
}

     else if(cgpa > 10) {
        results.innerHTML='please enter cgpa less than 10';
        } else {
                const percentage = (cgpa - 0.75) * 10;
                //show the result
                results.innerHTML = `percentage is ${percentage}`
                percentageC(percentage)

        }
    })

    function percentageC(v){
        if(v<50){
            resultsClass.innerHTML='THIRD CLASS'
        }
        else if(v>=50&&v<=59){
            resultsClass.innerHTML='SECOND CLASS'
        }
        else if(v>=60&&v<=69){
            resultsClass.innerHTML='FIRST CLASS'
        }
        else{
            resultsClass.innerHTML='FIRST CLASS WITH DISTINCTION'
        }

    }
