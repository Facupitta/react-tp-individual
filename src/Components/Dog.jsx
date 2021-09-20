import { useState } from 'react';

function Dog(props) {

    const [image, setImage] = useState(null);

    function getImage(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then(response => response.json())
      .then(data => {
        console.log({data});
        console.log(props.breedName);
        console.log(data.message);
        console.log(data.message[0]);
        setImage(data.message[0]);
      })
    }

    function capitalize(string) {
      return string.charAt(0).toUpperCase().concat(string.substring(1));
    }

    getImage(props.breedName);

    return <div className="Dog">
        <p>{capitalize(props.breedName)}</p>
        {image && <img src={image} alt={capitalize(props.breedName)}/>}
    </div>
}

export default Dog;