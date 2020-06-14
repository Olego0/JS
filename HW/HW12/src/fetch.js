export default function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
       .then(res => res.json())
       .then(data => data)
       .catch(error => new Error(error));
   }