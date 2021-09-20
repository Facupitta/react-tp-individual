import { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Dog from './Dog';
import Busqueda from './Busqueda';
import Resultados from './Resultados';
import Cargando from './Cargando';


import './../Styles/Dog.css';
import './../Styles/Busqueda.css';
import './../Styles/Resultados.css';

function Section() {

const [breeds, setBreeds] = useState(null);
  const [loading, setLoading] = useState(false);
  const [breedSearch, setBreedSearch] = useState("");

  const handleChange = (event) => {
    setBreedSearch(event.target.value);
  };

  function filterDogsBy() {
    setLoading(true);
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        setBreeds(data?Object.keys(data.message).filter(breed => breed.includes(breedSearch.toLowerCase())):null);
        setLoading(false);
      });
  }

    return <section className="Section">
        <Busqueda>
            <TextField id="breed-text" value={breedSearch} variant="filled" label="Breed" onChange={handleChange}></TextField>
            <Button onClick={filterDogsBy} color="primary" variant="outlined">Search</Button>
        </Busqueda>
        {loading && <Cargando></Cargando>}
        {breeds && !loading && <Resultados>
            {breeds.map(breed => <div key={breed}>
                <Dog breedName={breed}></Dog>
            </div>)}
            {breeds && !loading && breeds.length===0 && <div>There were no results :(</div>}
        </Resultados>}
    </section>
}

export default Section;