$(document).ready(function () {

    var botonActivador = $('#btn');

    botonActivador.on('click', function (e) {
        e.preventDefault();
        if (!$('#number').val()==''||!$('#number').val()==null) {
            $('.girar').css('animation', 'girar .45s 5');


        function valorRandom(){
            var hastaInput = $('#number').val();
            var number = Math.ceil(Math.random() * hastaInput)
            var modal = '<div class="modal"><div class="cuadro"><h1>' + number + '</h1></div></div>';
    
            $('.contenedor').after(modal);
            $('.girar').css('animation', 'none');

            $('.modal').on('click',function(){
                $('.modal').remove();
            })
        }

        setTimeout(valorRandom,3000);

        $(document).on('keyup', function(e){
            if (e.which==27) {
                $('.modal').remove();
            }
        })
    
        }
    })
    
});