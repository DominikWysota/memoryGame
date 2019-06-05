var cards = [
    {id: 1, ukryty: 'url(back.jpg)', pokazany: "", stan: false, lottery: false},
    {id: 2, ukryty: 'url(back.jpg)', pokazany: "", stan: false, lottery: false },
    {id: 3, ukryty: 'url(back.jpg)', pokazany: "", stan: false, lottery: false },
    {id: 4, ukryty: 'url(back.jpg)', pokazany: "", stan: false, lottery: false },
    {id: 5, ukryty: 'url(back.jpg)', pokazany: "", stan: false, lottery: false },
    {id: 6, ukryty: 'url(back.jpg)', pokazany: "", stan: false, lottery: false },
    {id: 7, ukryty: 'url(back.jpg)', pokazany: "", stan: false, lottery: false },
    {id: 8, ukryty: 'url(back.jpg)', pokazany: "", stan: false, lottery: false }
]

var pictures =[
    {id: 1, picture: "url(obrazek.jpg)"},
    {id: 2, picture: "url(obrazek2.jpg)"},
    {id: 3, picture: "url(obrazek3.jpg)"},
    {id: 4, picture: "url(obrazek4.jpg)"},
    {id: 5, picture: "url(obrazek.jpg)"},
    {id: 6, picture: "url(obrazek2.jpg)"},
    {id: 7, picture: "url(obrazek3.jpg)"},
    {id: 8, picture: "url(obrazek4.jpg)"}
]

var a;
var b;
var active_cards = 0;
var win = 0;

$(document).ready(function () {
	$('.start').click(function () {
		give();
        lottery();
	});
    $('.reset').click(function(){
        location.reload();
    });
    setTimeout(function() {
    $(".card").click(function(){
        if(active_cards<2){
            a = '.' + $(this).attr('class').split(/\s/)[0];
            b = parseInt($(this).attr('class').split(/\s/)[0] - 1);
            $(a).css("background-image", cards[b].pokazany);
            cards[b].stan = true;
            active_cards++;
        }
        check();
    });
    }, 3200);    
});

function lottery(){
    //zmienne do cards
    var n = 8;
    var k = 8;
    //zmienne do pictures
    var j = 8;
    //tablica do cards
    var numbers = new Array(n);
    for (var i=0; i<n; i++) {
        numbers[i] = i + 1;
    }
    //tablica do pictures
    var number_picture = new Array(j);
    for (var i=0; i<j; i++) {
        number_picture[i] = i + 1;
    }
    //funkcja losowania cards i przypisanie do niej wylosowanego obrazu pictures
    for (var i=0; i<k; i++) {
        var r = Math.floor(Math.random()*n);
            var f = Math.floor(Math.random()*j);
            cards[numbers[r]-1].pokazany = pictures[number_picture[f]-1].picture;
            number_picture[f] = number_picture[j - 1];
            j--;      
        numbers[r] = numbers[n - 1];
        n--;
    }   
}

function check(){
    var c = 0;
    var cards_check = new Array(2);
    if (active_cards == 2){
        for(var i=0; i<8; i++){
            if(cards[i].stan == true){
                cards_check[c]= i;
                c++;
            }
        }
        if(cards[cards_check[0]].pokazany == cards[cards_check[1]].pokazany){
            console.log('.'+ cards_check[0]);
            console.log('.'+ cards_check[1]);
            setTimeout(function() {
            $('.' + (cards_check[0] + 1)).css({"background-image": "none", "boxShadow": "none"});
            $('.' + (cards_check[1] + 1)).css({"background-image": "none", "boxShadow": "none"});
            active_cards = 0;
            c = 0;
            win++;
                if(win == 4){
                   $('.wygrana').css("visibility", "visible");
                    setTimeout(function() {
                        location.reload();
                    }, 3000);
                }
            }, 500);
            cards[cards_check[0]].stan = false;
            cards[cards_check[1]].stan = false;
        }
        else{
            console.log('.'+ cards_check[0]);
            console.log('.'+ cards_check[1]);
            setTimeout(function() {
            $('.' + (cards_check[0] + 1)).css("background-image", cards[cards_check[0]].ukryty);
            $('.' + (cards_check[1] + 1)).css("background-image", cards[cards_check[1]].ukryty);
            active_cards = 0;
            c = 0;
            }, 500);
            cards[cards_check[0]].stan = false;
            cards[cards_check[1]].stan = false;
        }
    }
}


function give() {
	$('.1').animate({
		left: '100px',
		top: '200px'
	}, 400);
	$('.2').delay(400).animate({
		left: '300px',
		top: '200px'
	}, 400);
	$('.3').delay(800).animate({
		left: '500px',
		top: '200px'
	}, 400);
	$('.4').delay(1200).animate({
		left: '700px',
		top: '200px'
	}, 400);
	$('.5').delay(1600).animate({
		left: '100px',
		top: '500px'
	}, 400);
	$('.6').delay(2000).animate({
		left: '300px',
		top: '500px'
	}, 400);
	$('.7').delay(2400).animate({
		left: '500px',
		top: '500px'
	}, 400);
	$('.8').delay(2800).animate({
		left: '700px',
		top: '500px'
	}, 400);
}