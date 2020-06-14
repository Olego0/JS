import './styles.css';
import fetchCountries from './fetch';
import { refs } from './refs';
import debounce from 'lodash.debounce';

function inputHandler({target}) {
    return fetchCountries(target.value).then((data) => {
        console.log(data);
        refs.div.innerHTML = "";
        refs.list.innerHTML = "";
        
        if (data.length > 2 && data.length < 10) {
            const names = data.reduce(
                (acc, el) => (acc += `<li>${el.name}</li>`),
                ""
            );
            refs.list.innerHTML = names;
        } else if (data.length === 1) {
            const lang = data[0].languages.map((el) => el.name).reduce((acc, el) => (acc += `<li>${el}</li>`), "");
            const countryInf = `<h2>${data[0].name}</h2>
      <div style="display:flex">
        <div>
            <p>Capital: ${data[0].capital}</p>
            <p>Population: ${data[0].population}</p>
            <div>
            <p>languages</p>
            <ul>${lang}</ul>
            </div>
        </div>
        <div>
            <img height="200" width="200" src="${data[0].flag}"/>
        </div>
      </div>`;
           refs.div.innerHTML = countryInf;
        } else {
            console.log('too much');
            
        }
    });
}

refs.input.addEventListener("input", debounce(inputHandler,500));