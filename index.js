const select = document.getElementById('breeds');
const dogPic = document.querySelector('.dogPic');
const form = document.querySelector('form');


function getDoggo() {

    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => {
            console.log(response);
            return response.json();
        }).then(jsonData => grabImage(jsonData))
        .catch(error => console.log(error))
}

function grabImage(jsonData) {
    const html = `
    <img src '${jsonData}' alt>
    <p>See pics of ${select.value}s</p>
    `
    dogPic.innerHTML = html;
}

const displayImage = () => {
    const form = `
    <h1>Enter number of dog images:</h1>
    <form>
      <input required type="text" id="img-count" name="number">
      <label for="img-count">Number ofimages</label>
      autofocus ="on" maxlength="2" required>
      <button type="submit" class="enter">Enter</button>
    </form>
    `
    $('main').html(html)
  };



  $(getDoggo);