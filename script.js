const button = document.querySelector('#joke-btn');
button.addEventListener("click", (event) => {
  getDadJoke();
})

async function getDadJoke() {
  const options = { 
    method: 'GET',
    headers: {
      "Accept" : "application/json"
      }
    }

  try {
    let jokes = await fetch('https://icanhazdadjoke.com/', options)
    let json = await jokes.json()
    let joke = json.joke
   
    let jokeText = document.getElementById("joke")
    jokeText.innerText = joke
  } catch (error) {
    console.log(error.message);
  }
}