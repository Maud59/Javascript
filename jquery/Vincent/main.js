$(document).ready(function () {
    // permet d'obtenir des informations sur l'élément ciblé par le click
    /*$('.tasks').on('click','li',function(event){
        console.log(event);
    });*/

    $('.tasks').on('click','li',function(event){
        console.log(event)
        const target=$(event.target); // élément ciblé

        /*if(target.hasClass("fa-square")){ // Si on clique sur la checkbox, elle est remplacé par la class check
            target.removeClass('fa-square').addClass('fa-check-square');
        } else if (target.hasClass('fa-check-square')) {// si elle est décochée, elle sera cochée.
            target.removeClass('fa-check-square').addClass('fa-square');
        }*/

        //permutation entre le check ou non
        if(target.parent().hasClass('todo-checkbox')){
            target.toggleClass("fa-check-square fa-square")
            //Va chercher un élément avec ce nom pour changer la classe
            $(this).find('.todo-text').toggleClass('todo-text-valid');
        }
        //Poubelle
        if(target.hasClass("todo-trash")){
            $(this).slideUp(1000,function(){
                event.currentTarget.remove(); // sur élémént ciblé courant la (la li)
            });
        }
    });
  
    $('.textTask').on('keyup',function(event) {    
        if(event.keyCode == 13) { // KeyCode de la touche entrée
               //alert('touche entrée !!');
               var efface = $.trim($(this).val()); // .trim efface les espaces avant et après.
               if(efface.length >=1){ // s'il reste des caractères, tu crées les li
                    $(".tasks").append('<li><a href="#" class="todo-checkbox"><i class="fa fa-square"></i></a><span class="todo-text" contenteditable="true">' + $(this).val() +'</span><a href="#"><i class="todo-trash fa fa-trash"></i></a></li>'); 
               // création d'une li dans ul#todo, avec comme texte la valeur de notre input
               // Le this fait référence à notre #divInput sur lequel il y a un évent.
                    };
              $(this).val('');
              }
      //$('#para').text($(this).val()); // remplissage de p
  });
})