seletor4();

function seletor4() {
    $(document).ready(function () {
        var qtd = $("[alt]").length;
        $("span").text("Total Alt = " + qtd);
    });
}
