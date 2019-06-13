seletor7();

function seletor7(){
    $( "#myList li" ).filter(function(){
        return($(this).css('color') != 'rgb(255, 0, 0)');
    }).css( "background-color", "green" );
}