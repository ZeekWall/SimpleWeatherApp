const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const searchItem = document.querySelector(".search-box input");
const info = document.querySelector(".weather-info");
const missing = document.querySelector(".missing");
const tempNumber = document.querySelector("#temp-number");
const weatherImg = document.querySelector('#weather-img');

async function findTemp() {
  container.style.height = "60px";
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${searchItem.value}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ab73b1f31amsh371e216aa2f385ep1cc3a0jsneb3d9de5734e",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    if (response.ok) {
      missing.style.display = "none";
      info.style.display = "flex";
      tempNumber.style.display = "flex";
      container.style.height = "250px";
      tempNumber.innerHTML = `${result["current"]["temp_f"]}°F`;
    } else {
      info.style.display = "none";
      tempNumber.style.display = "none";
      container.style.height = "250px";
      missing.style.display = "flex";
      throw new Error("Error!");
    }
  } catch (error) {}
}

search.addEventListener("click", findTemp);
searchItem.addEventListener("keypress", function(event){
    if(event.key === 'Enter'){
        findTemp();
    }
});
