const characterTemplate = document.getElementById('template')


// CREATE A CUSTOM AXIOS INSTANCE FOR THE FUTUR API REQUEST
const characterApi = axios.create({
  baseURL: 'http://localhost:5005/api/characters/',
})

// STORE URL IN VARIABLE FOR REUSE IT LATER
const myUrl = 'http://localhost:5005/api/'




// BEFORE THE EVENT LISTENER ———> CREATE THE FUNCTIONS WE WILL NEED LATER


// function createCharacter(one) {


//   const clone = characterTemplate.content.cloneNode(true)


// }


// LISTEN FOR THE FETCH-ALL BUTTON AND DISPLAY ALL CHARACTERS
document.getElementById('fetch-all').addEventListener('click', async function (event) {
  try {

    const { data } = await axios.get(`${myUrl}characters`)

    // RETURN A OBJECT CONTAINING THE VALUE OF EACH ONE
    for (const character of data) {
      console.log(character);

      //const clone =

      return character
    }
  } catch (error) {
    console.log(error);
  }
});


document.getElementById('fetch-one').addEventListener('click', function (event) {

});

document.getElementById('delete-one').addEventListener('click', function (event) {

});

document.getElementById('edit-character-form').addEventListener('submit', function (event) {

});

document.getElementById('new-character-form').addEventListener('submit', function (event) {

});

