const yearOfBirth = prompt("Enter your year of birth");
const city = prompt("What city do you live in?");
const sport = prompt("What is your favorite kind of sport");


if (yearOfBirth) {
    alert (2022 - (+yearOfBirth))
}
else {
    alert('It is a pity that you did not want to enter your year of birth')
}
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
if (sport === 'football') {
    alert("Cool! Do you want to be Messi?")
} else if (sport === 'box') {
    alert("Cool! Do you want to be Tyson?")
} else if (sport === 'tennis') {
    alert("Cool! Do you want to be Nadal?")
} else {
    alert("It's a pity that you didn't want to enter your favorite sport")
}


