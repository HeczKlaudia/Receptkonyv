var receptek = [];
var index = 0;

$(function(){
    $.ajax(
        {url: "etelek.json",
        success: function(result){
        //console.log(result);
        receptek = result.receptkonyv;
        console.log("ajax hívásban");
        console.log(receptek);
        tablazatba();
        egerFole();
      }
    }
      );

      console.log("kívül" + receptek);
      //$("article").append(receptek[0].nev);  EZ ÍGY NEMJÓ!!!

    

});

function tablazatba() {
    // Adatok megjelenítése táblázatban
    $("article").append("<table>");
    //console.log(receptek);
    var elem = "<tr id='fejlec'><th>Név</th><th>Elkészítési idő</th><th>Kép</th><th>Leírás</th><th>Hozzávalók</th></tr>";
    for (var index = 0; index < receptek.length; index++) {
       elem += "<tr id='" + index + "'>";

       for (var item in receptek[index]) {
           elem += "<td>" + receptek[index][item] + "</td>";
       }
       elem += "</tr>";
    
    }
    //console.log(elem);
    $("article table").append(elem);

    hatter();

    $("tr").on("click", kattintasra);
    $("#balra").click(kepBalra);
    $("#jobbra").click(kepJobbra);
    
}

function hatter() {
    $("article table tr").hover(function(){
        $(this).addClass("hatter");
     },
     function(){
        $(this).removeClass("hatter");
     });
}

function kattintasra() {
    if($(this).attr("id") !== "fejlec") {
        sorID = Number($(this).attr("id"));
        console.log(receptek[sorID].kep);
        $("#adatok img").attr("src", receptek[sorID].kep);
        $("#adatok img").attr("alt", receptek[sorID].nev);
    }
      
}

function kepBalra() {
    $("#adatok img").attr("src", receptek[index].kep);
    index--;
    if (index < 0) {
        index = receptek.length - 1;
    }
}

function kepJobbra() {
    $("#adatok img").attr("src", receptek[index].kep);
    index++;
    if (index > receptek.length - 1) {
        index = 0;
    }
}