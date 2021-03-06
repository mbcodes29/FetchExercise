/* eslint-disable no-undef */
'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random/search?q=lab&limit=25')
  //http://api.giphy.com/v1/gifs/search?q=batman&limit=25
    .then(response => response.json( ))
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  ),
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});