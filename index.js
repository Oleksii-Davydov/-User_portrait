
const yearOfBirth = prompt("Enter your year of birth");

if (yearOfBirth === null) {
    alert("It is a pity that you did not want to enter your year of birth.");
}
else {
    const city = prompt("What city do you live in?");

    if (city === null) {
        alert("It is a pity that you did not want to enter the city in which you live:((");
    }
    else {
        const sport = prompt("What is your favorite kind of sport");


        if (sport === null) {
            alert("It's a pity that you didn't want to enter your favorite sport.");
        }
        else {
            let result1 = yearOfBirth
            if (yearOfBirth) {
                result1 = `You are ${2022 - parseInt(yearOfBirth)} old.`;
            }

            let result2 = city
            if (city === 'Kyiv') {
                result2 = "You live in the capital of Ukraine.";
            } else
            if (city === 'London') {
                result2 = "You live in the capital of Great Britain.";
            } else
            if (city === 'Washington') {
                result2 = "You live in the capital of Great USA.";

            } else if (city) {
                result2 = `You live in the city of ${city}`;
            }

            let result3 = sport
            if (sport === 'football') {
                result3 = "Cool! Do you want to be Messi?";
            } else if (sport === 'box') {
                result3 = "Cool! Do you want to be Tyson?";
            } else if (sport === 'tennis') {
                result3 = "Cool! Do you want to be Nadal?";
            }

            const result = `${result1}  \n ${result2} \n ${result3}`;
            alert(result)
        }
    }

}