const yearOfBirth = prompt("Enter your year of birth");
const city = prompt("What city do you live in?");
const sport = prompt("What is your favorite kind of sport ");

if (yearOfBirth) {
    result_1 = (2022 - (+yearOfBirth))
} else {
    result_1 = ('It is a pity that you did not want to enter your year of birth')
}
if (city === 'Kyiv') {
    result_2 = ("You live in the capital of Ukraine")
} else if (city === 'London') {
    result_2 = ("You live in the capital of Great Britain")
} else if (city === 'Washington') {
    result_2 = ("You live in the capital of Great USA")

} else if (city) {
    result_2 = ("You live in the city of " + city)
} else {
    result_2 = ("It is a pity that you did not want to enter the city in which you live:((")
}
if (sport === 'football') {
    result_3 = ("Cool! Do you want to be Messi?")
} else if (sport === 'box') {
    result_3 = ("Cool! Do you want to be Tyson?")
} else if (sport === 'tennis') {
    result_3 = ("Cool! Do you want to be Nadal?")
} else {
    result_3 = ("It's a pity that you didn't want to enter your favorite sport")
}
const result = (result_1+"\n" + result_2 +"\n"+ result_3)
alert(result)

