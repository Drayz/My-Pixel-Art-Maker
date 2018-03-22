// Select color input

// Select size input
var columns, rows, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {
    event.preventDefault();
    columns = $('#inputHeight').val();
    rows = $('#inputWidth').val();    
    return makeGrid(columns, rows);
})

//Making the Grid
function makeGrid(x, y) {
    $('tr').remove();
    for (var a = 1; a <= x; a++) {   
            $('table').append('<tr></tr>'); 
        for (var b = 1; b <= y; b++) {
            $('tr:last').append('<td></td>');
        }
    }
    
    // Add the color to cell
    $('td').click(function addColor() {
        color = $('#colorPicker').val();
        
        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}
