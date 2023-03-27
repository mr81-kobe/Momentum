    navigator.geolocation.getCurrentPosition(OnGeoOk,OnGeoError);

    function OnGeoOk(position){
       const lat =position.coords.latitude;
       const long=position.coords.longitude;
       
       const apiKey="a6e6ec743164d9c2a3fe59cc900718d0";
       const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`
       
       fetch(url).then(response => response.json()).then(data =>{
        
        const weather= document.querySelector("#weather span:first-child");
        const city= document.querySelector("#weather span:last-child");
         city.innerText=data.name;
         weather.innerText= `${data.weather[0].main} / ${data.main.temp}`;
       
    });
       console.log(position);
    }
    function OnGeoError(){
        alert("Cant't find you no Weaher for you.")
    }


   


    