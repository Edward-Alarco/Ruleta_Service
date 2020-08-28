$(document).ready(function(){

    $('#btninfo').on('click',function(e){
        e.preventDefault();

        var modalInfo = '<div class="modal-info"><div class="card"><h4>Info</h4><p>The web application will only accept numbers, starting from 0 towards the number given by the user.<br><br>1) Insert the limit number, to give a random number within the range.<br>2) Press the play button.<br>3) Just wait 😉<br><br></p><hr><a href="#" id="close">Close</a></div></div>';

        $('.contenedor').after(modalInfo);

        $('#close').on('click',function(ele){
            ele.preventDefault
            $('.modal-info').remove();
        })

    })

});