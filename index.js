const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(country, salary){
    return  salary * this.tax;
}
console.log(getMyTaxes.call(latvia, 1000));

function getMiddleTaxes(country) {
   return  this.tax * this.middleSalary;
}

console.log(getMiddleTaxes.call(ukraine));

function getTotalTaxes(country) {
   return  this.tax * this.middleSalary * this.vacancies;
}

console.log(getTotalTaxes.call(litva));

function getMySalary(country){
    setInterval(() => {
        const min = 1500;
        const max = 2000;
        const salary = Math.floor(Math.random()*(max - min + 1) + min);

        console.log({
            salary:salary,
            taxes: country.tax,
            profit: salary - salary * country.tax
        });
    }, 10000);
}
getMySalary(litva);
