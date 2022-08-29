const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  const countryContainer = document.getElementById("countries-container");
  countries.forEach((country) => {
    // console.log(country);
    const div = document.createElement("div");
    div.classList.add("country");
    div.innerHTML = `
    <h4>Country-Name: ${country.name.common} </h4>
    <h>Region: ${country.region}</h>
    <p>Capital: ${country.capital ? country.capital : "no capital"}</p>
    <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
    `;
    countryContainer.appendChild(div);
  });
};
const loadCountryDetail = (data) => {
  // console.log("get country detail: ", data);

  fetch(`https://restcountries.com/v3.1/alpha/${data}`)
    .then((res) => res.json())
    .then((data) => displayCountryDetail(data[0]));
};
const displayCountryDetail = (country) => {
  console.log(country);
  const countryDetail = document.getElementById("country-detail");
  countryDetail.innerHTML = `
  <h3>Name: ${country.name.common}</h3>
  <h4>Capital: ${country.capital}</h4>
  <img src="${country.flags.png}">
  `;
};
// loadCountries();
