const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name= document.getElementById('city_name');
const temp =document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const day = document.getElementById('day');

// Getting the current date and time
const date = new Date();
const current_date = date.getDate();
const current_day = date.getDay();
const current_month = date.getMonth();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month =["Jan", "Feb", "Mar", "Apr", "May","Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const today = days[current_day] ;

// Calling the function
const getInfo = async(e)=>{
    e.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === "" ){
        city_name.innerText=`Please enter a city name`;
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=4eb85939269918f27b386a74e308a35d`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];


            // code for current weather data
            const tempMood =arrData[0].weather[0].main;
            temp.innerText= arrData[0].main.temp;
            temp_status.innerText= arrData[0].weather[0].main;
            city_name.innerText= cityVal;


            // code for current Date 
            day.innerText=today + " " + current_date + " "+ month[current_month];;
           

            // tempstatus condition
            if(tempMood=="Clear"){
            
                clear.innerHTML="<i class='bi bi-brightness-high-fill'></i>";
            }
            else if(tempMood=="Rain"){
                
                temp_status.innerHTML='<i class="bi bi-cloud-lightning-rain-fill"></i>';
            }
            else if(tempMood=="Clouds"){
                temp_status.innerHTML='<i class="bi bi-clouds-fill"></i>';
            }
            else if(tempMood=="Haze"){
                temp_status.innerHTML='<i class="bi bi-cloud-haze2-fill"></i>';
            }

        }
        catch{
            city_name.innerText=`Please enter proper city name`;
        }
       
    }
}



submitBtn.addEventListener('click', getInfo);