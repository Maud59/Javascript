// appel de la fonction créer avec jquery.js
// on crée notre propre jquery

$.ready(function () {
      console.log('DOM loaded');
  
      // pour l'affichage des arguments dans la console (décommenter ici et ds jquery.js)
     // $.find("Toto", "Jena", "Xena", "Chuck");
  
      
     // $.find("ul").findAll("li").addClass('toto');  //ajoute une class test à tous les éléments
   
      //console.log($.elements);
      // avec un tableau d'élements on peut leur faire tout ce qu'on veut
  
      /*$.findAll('li').on('click', function () {
         // $.addClass('toto');
  
         alert("C'est moi TOTO!!");
      });*/

      // Rajoute une class test aux li de notre menu lors de l'inspection
      //$.find('li, #menu').addClass("test");

      $.find('li').on('click', function (event) {
            // Au click, notre li cliquée (uniquement) a une nouvelle classe ='Supertodo'
            // Le event permet de récupérer l'évènement (click, mousedown etc)
            // Le target permet de cibler l'objet qui a permis de créer l'évènement
            /*console.log(event);*/
            //console.log(event.target);
            //$.apply(this).addClass('supertodo'); 
            const elem = $.apply(this);
            $.find('li').addClass('test');

            event.target.style.backgroundColor ='#FF00FF';
      //}(); Exécution de la fonction automatique - La notion d'évènements au click ne sera donc plus valide
      //}); déclare la fonction
      });

  });