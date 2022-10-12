const yearOfBirth = prompt("Enter your year of birth");
const city = prompt("What city do you live in?");
const sport = prompt("What is your favorite kind of sport ");

let result_1 = yearOfBirth
if (yearOfBirth) {
    alert (2022 - (+yearOfBirth))
}
else if (yearOfBirth===null || yearOfBirth===false ){
    alert('It is a pity that you did not want to enter your year of birth')
}

let result_2 = city
if (city === 'Kyiv') {
    alert("You live in the capital of Ukraine")
} else
    if (city === 'London') {
    alert("You live in the capital of Great Britain")
} else
    if (city === 'Washington') {
    alert("You live in the capital of Great USA")

} else if (city) {
    alert("You live in the city of " + city)
}
    else {
        alert("It is a pity that you did not want to enter the city in which you live:((")
    }
    let result_3 = sport
if (sport === 'football') {
    alert("Cool! Do you want to be Messi?")
} else if (sport === 'box') {
    alert("Cool! Do you want to be Tyson?")
} else if (sport === 'tennis') {
    alert("Cool! Do you want to be Nadal?")
} else {
    alert("It's a pity that you didn't want to enter your favorite sport")
}
const result = (result_1+result_2+result_3)
alert(result)

