let userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split('T')[0];
console.log(userInput.max);

let result = document.getElementById('result')


function CalcAge() {

    let birthDate = new Date(userInput.value);
    let birthDay = birthDate.getDate();
    let birthMonth = 1 + birthDate.getMonth();
    let birthYear = birthDate.getFullYear();
    console.log(birthDay , birthMonth , birthYear);


    let today = new Date();
    let currentDay = today.getDate();
    let currentMonth = 1 + today.getMonth();
    let currentYear = today.getFullYear();
    console.log(currentDay , currentMonth , currentYear);


    let d , m , y;
    y = currentYear - birthYear

    if(currentMonth >= birthMonth)
    {
        m = currentMonth - birthMonth
    }else{
        y--;
        m = 12 + (currentMonth - birthMonth)
    }

    if (currentDay >= birthDay)
    {
        d = currentDay - birthDay
    }else{
        m--;
        d = getDaysInMonth(birthYear , birthMonth) + ( currentDay - birthDay )
    }

    if(m < 0)
    {
        m = 11;
        y--;
    }

    let yearLabel = (y === 1) ? 'year' : (y === 0) ? 'year' : 'years';
    let monthLabel = (m === 1) ? 'month' : (m === 0) ? 'month' : 'months';
    let dayLabel = (d === 1) ? 'day' : (d === 0) ? 'day' : 'days';
    
    result.innerHTML = `<i class="fa-brands fa-pied-piper-hat"></i> You are <span>${y} </span>  ${yearLabel}, <span>${m} </span> ${monthLabel}, <span>${d} </span> ${dayLabel} old`
}

function getDaysInMonth(year , month) 
{
    return new Date(year , month , 0).getDate();
}