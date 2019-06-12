seletor6();

function seletor6(){
    $(document).ready(function () {
        if (($('h2').text().indexOf('B') != -1) && ($('h2').text().indexOf('e') != -1)) {
            alert('Achou "B", "e"!!!');
        }
    });
}
