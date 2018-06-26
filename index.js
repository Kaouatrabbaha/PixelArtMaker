

$('#sizePicker').submit(function makeGrid(fl) {
  fl.preventDefault();
  $('table').children().remove();
  let row=$('#inputHeight').val();
  const column=$('#inputWeight').val();
  for(let i=1; i <=row; i++)
{
  $('table').append('<tr></tr>');
  for(let j=1; j<=column; j++)
    {
      $('tr:last').append('<td></td>');
    }
}
  $('td').click(function(fl) {
  fl.preventDefault();
  var color=$('#colorPicker').val()
  $(this).css('background-color', color)
})
  $('td').dblclick(function(fl) {
  fl.preventDefault();
  $(this).css('background-color','transparent')
})
});


$('#hideShowCaneva').reset(function() {

 }) ;