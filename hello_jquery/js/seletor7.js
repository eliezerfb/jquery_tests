seletor7();

function seletor7(){
    $(this).filter(function() {
        var match = 'rgb(255, 0, 0)'; 
        return ( $(this).css('font-color') == match );
    
    }).css('background-color', 'green'); // change background color of all black spans
}
