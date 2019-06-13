//Exercício Atributos 1
atributos1();

function atributos1(){
    $(function Exer1_Atr () {
        $('ul li').filter('.current').removeClass("current");
        $('#myList li').eq(5).addClass("current");
    });
}