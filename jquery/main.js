$(document).ready(function(){
      $('li').css('color','royalblue');
})

	
/*$texte=$('#divInput').val();
console.log($texte);

function (keypress){
      $('#para');
}*/

/*$('#divInput').on('input',function(event){ // input est l'evenement qui déclenche l'action
      $('#para').text($(this).val()); // récupère la valeur dans le input
});*/

$('#divInput').on('keyup',function(event) {    
      if(event.keyCode == 13) { // KeyCode de la touche entrée
             //alert('touche entrée !!');
             var efface = $.trim($(this).val()); // .trim efface les espaces avant et après.
             if(efface.length >=1){ // s'il reste des caractères, tu crées les li
                  $("#todo").append('<li><input type ="checkbox">'+$(this).val() + 
                  '<i class="far fa-trash-alt"></i></li>'); 
             // création d'une li dans ul#todo, avec comme texte la valeur de notre input
             // Le this fait référence à notre #divInput sur lequel il y a un évent.
                  };
            $(this).val('');
            }
    $('#para').text($(this).val()); // remplissage de p
    

   });
