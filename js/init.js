//Hook up the tweet display
$(document).ready(function() {
    // Obtenha a data atual
    var currentDate = new Date();
    // Adicione 7 dias à data atual
    var futureDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
                           
    $(".countdown").countdown({
        date: futureDate,
        format: "on"
    },
            
    function() {
        // função de retorno de chamada
    });

});
