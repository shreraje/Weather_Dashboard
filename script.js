console.log("Hello all");
// Event Listener for button
$(document).ready(function () {
       
        $("button").on("click", function (event) {
                event.preventDefault();
                var APIKey = "b7224a3320e1c0e1ae22fd2c9b341469";
                var search = $("#search").val();
                // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}
                var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + search + "&appid=" + APIKey;
                var uvindex = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat={lat}&lon={lon}";
                console.log(uvindex);
                console.log(search);

                // ajax call to OpenWeatherMap
                $.ajax({
                        url: queryURL, uvindex,
                        method: "GET"
                        //Store all of the retrieved data inside of an object called "response"
                }).then(function (response) {
                        // Logging the queryURL
                        console.log(queryURL);
                        // Logging the queryURL
                        console.log(uvindex);
                        // Logging the resultin response
                        console.log(response);

                        // Transferring content to HTML for current day

                        $(".city").html("<h3>" + response.city.name + "</h3>");
                        $(".date").html("Date:" + response.list[0].dt_txt);
                        $(".wind").text("Wind Speed:" + response.list[0].wind.speed);
                        $(".humidity").text("Humidity:" + response.list[0].main.humidity);
                        $(".temperature").text("Temperature(K):" + response.list[0].main.temp);
                        $(".uvindex").text("uvIndex:" + response.list[0].uvindex);

                        // Transferring content to HTML for current day1

                        $(".city1").html("<h1>" + response.city.name + "</h1>");
                        $(".date1").html("Date:" + response.list[1].dt_txt);
                        // $(".wind1").text("Wind Speed:" + response.list[1].wind.speed);
                        $(".humidity1").text("Humidity:" + response.list[1].main.humidity);
                        $(".temp1").text("Temperature(K):" + response.list[1].main.temp);

                        // Transferring content to HTML for current day2

                        $(".city2").html("<h1>" + response.city.name + "</h1>");
                        $(".date2").html("Date:" + response.list[2].dt_txt);
                        // $(".wind2").text("Wind Speed:" + response.list[2].wind.speed);
                        $(".humidity2").text("Humidity:" + response.list[2].main.humidity);
                        $(".temp2").text("Temperature(K):" + response.list[2].main.temp);

                        // Transferring content to HTML for current day3

                        $(".city3").html("<h1>" + response.city.name + "</h1>");
                        $(".date3").html("Date:" + response.list[3].dt_txt);
                        // $(".wind3").text("Wind Speed:" + response.list[3].wind.speed);
                        $(".humidity3").text("Humidity:" + response.list[3].main.humidity);
                        $(".temp3").text("Temperature(K):" + response.list[3].main.temp);

                        // Transferring content to HTML for current day4

                        $(".city4").html("<h1>" + response.city.name + "</h1>");
                        $(".date4").html("Date:" + response.list[4].dt_txt);
                        // $(".wind4").text("Wind Speed:" + response.list[4].wind.speed);
                        $(".humidity4").text("Humidity:" + response.list[4].main.humidity);
                        $(".temp4").text("Temperature(K):" + response.list[4].main.temp);

                        // Transferring content to HTML for current day5

                        $(".city5").html("<h1>" + response.city.name + "</h1>");
                        $(".date5").html("Date:" + response.list[5].dt_txt);
                        // $(".wind5").text("Wind Speed:" + response.list[5].wind.speed);
                        $(".humidity5").text("Humidity:" + response.list[5].main.humidity);
                        $(".temp5").text("Temperature(K):" + response.list[5].main.temp);

                        console.log(response.list[4].main.humidity);
                        
                        // Store last search history to local storage

                        function storeItem() {
                                let lastSearch = JSON.stringify(search);
                                localStorage.setItem("City", search);

                                // Retrieve last search history from local storage

                                let storedSearch = localStorage.getItem("City");
                                $(".search-item").html(storedSearch);
                                
                                return;
                        }
                        storeItem();
                        search.empty();
                });
        });
});
