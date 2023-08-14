function getPromise(url) {
  let promise = new Promise(function(resolve,reject) {
  let req = new XMLHttpRequest();
  req.open("get",url);
  req.onload = function(){
    if(req.status==200)
      resolve(req.response);
    else
      reject("there is some error");
  }
  req.send();
  });
  return promise;
}

const axios = require("axios");

function getPromise(url) {
  return axios.get(url);
}

const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
let promise = getPromise(ALL_POKEMONS_URL);

const consumer = () => {
    promise.then((result)=>{
      console.log(result.data);
    }).catch((error)=>{
      console.log(error);
    });
}
consumer();

function asyncFunction() {
  let firstPromise = new Promise((resolve,reject) => {
      resolve(`hello first promises`);
  });
  let secondPromise = new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(`hello second promises`)
      }, 1000);
  })

  let combinedPromises = Promise.allSettled([firstPromise,secondPromise]);
  return combinedPromises;
}

const  display = async function() {
  let data = await asyncFunction();
  console.log(data);
};

display();