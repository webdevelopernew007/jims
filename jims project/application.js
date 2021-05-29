$(document).ready(function() {
 $('#resizingSelectTag').change(function(){
    $("#widthTempOption").html($('#resizingSelectTag option:selected').text());
    $(this).width($("#selectTagWidth").width());  
 });
});