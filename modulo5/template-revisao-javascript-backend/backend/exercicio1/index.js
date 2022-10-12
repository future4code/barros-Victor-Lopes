

let celcius = Number(process.argv[2])
let faOrKel = process.argv[3]

function converter() {

    if (faOrKel === "f") {
        let calc = (celcius * 1.8) + 32
        return console.log(`${celcius}° Celsius é equivalente a ${calc}° Farenheit`);
    }
    else if (faOrKel === "k") {
        let calc = celcius + 273.15
        return console.log(`${celcius}° Celsius é equivalente a ${calc} Kelvin.`);
    }
}

converter()