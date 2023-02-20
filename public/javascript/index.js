const characterTemplate = document.getElementById('template')


// CREATE A CUSTOM AXIOS INSTANCE FOR THE FUTUR API REQUEST
const characterApi = axios.create({
  baseURL: 'http://localhost:5005/api/characters/',
})

// STORE URL IN VARIABLE FOR REUSE IT LATER
const myUrl = 'http://localhost:5005/api/'




// LISTEN FOR THE FETCH-ALL BUTTON AND DISPLAY ALL CHARACTERS ———————————————————————————————————————————————————————
document.getElementById('fetch-all').addEventListener('click', async function (event) {
  try {

    const { data } = await axios.get(`${myUrl}characters`)

    // RETURN A OBJECT CONTAINING THE VALUE OF EACH ONE
    for (const character of data) {
      console.log(character);

      const clone = template.content.cloneNode('true')

      clone.querySelector('.character-id').textContent = `ID: ${character._id}`
      clone.querySelector('.name').textContent = `Name: ${character.name}`
      clone.querySelector('.occupation').textContent = `Occupation: ${character.occupation}`
      clone.querySelector('.cartoon').textContent = `Cartoon: ${character.cartoon}`
      clone.querySelector('.weapon').textContent = `weapon: ${character.weapon}`

      document.body.append(clone)

      // return character
    }
  } catch (error) {
    console.log(error);
  }
});


// SEARCH THE CHARACTER WITH THE ID PROVIDE IN THE INPUT FIELD ——————————————————————————————————————————————————————
document.getElementById('fetch-one').addEventListener('click', async function (event) {
  event.preventDefault();
  try {

    const providedInput = document.querySelector("[name=character-name]");

    // GET ON THE ROUTE PREVIOUSLY BUILD, EXTRACT DATA AND PUT IT IN A OBJECT
    const { data } = await axios.get(`${myUrl}characters/${providedInput.value}`)

    // console.log({ data })
    const clone = template.content.cloneNode('true')

    clone.querySelector('.character-id').textContent = `ID: ${data._id}`
    clone.querySelector('.name').textContent = `Name: ${data.name}`
    clone.querySelector('.occupation').textContent = `Occupation: ${data.occupation}`
    clone.querySelector('.cartoon').textContent = `Cartoon: ${data.cartoon}`
    clone.querySelector('.weapon').textContent = `weapon: ${data.weapon}`

    document.body.append(clone)

  } catch (error) {
    console.log(error)
  }


});

document.getElementById('delete-one').addEventListener('click', function (event) {

});

document.getElementById('edit-character-form').addEventListener('submit', function (event) {

});

document.getElementById('new-character-form').addEventListener('submit', function (event) {

});

