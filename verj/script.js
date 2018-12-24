socket = io();
var w = 30;
var h = 30;
var side = 24;
var weather = "winter";
var weatherP = document.getElementById("weather");
socket.on("send weather", function (data) {
    weather = data;
    document.getElementById("weather").innerHTML = "Weather:" + weather;
    weatherP.innerHTML = weather;
});

function drawmatrix(matrix) {
    background("#acacac");
    for (var y in matrix) {
        for (var x in matrix[y]) {
            if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 1) {
                if (weather == "winter") {
                    fill("white");
                }
                if (weather == "spring") {
                    fill("green");
                }
                if (weather == "summer") {
                    fill("green");
                }
                if (weather == "autumn") {
                    fill("orange");
                }
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("black");
            }
            rect(x * side, y * side, side, side);
        }
    }
    $("#button1").click(function () {
                    $('body').empty();
                      document.write("GAME OVER");
    });
    

            //GAME OVER//

    // if (grassArr.length == 900 || (grassArr.length == 0 && xotakerArr.length == 0 && gishatichArr.length == 0 && mardArr.length == 0)) {
    //     background("#acacac");
    //     textSize(60);
    //     fill(0);
    //     textAlign(CENTER);
    //     text("GAME OVER", 360, 370);
    // }
}
socket.on("send matrix", drawmatrix);


function setup(matrix) {
    createCanvas(side * w, side * h);
    background("#acacac");
    frameRate(5);
    $("body").css({"text-align":"center"});
    $("<div id='con'></div>").appendTo("body");
    $("<button id='button1'>Delete</button>").appendTo("div").css({"margin-top": "-20px",
                                                                  "background-color": "#10c9c3",
                                                                  "color": "#fff",
                                                                  "margin-top": "42px",
                                                                  "border": "none",
                                                                  "padding": "18px 46px",
                                                                  "font-size": "18px",
                                                                  "font-weight": "700"});
    $("p").css({"font-size":"30px",
                "font-weight":"800"});
}

