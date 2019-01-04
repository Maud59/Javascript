// peut être utilisé pour de la 2D ou de la 3D
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

//CARRE
ctx.fillStyle='royalblue';// Remplit la forme de la couleur demandée
ctx.lineWidth=5; // Permet d'épaissir notre trait
const w=960; // taille de canvas
const h=500; // hauteur de notre canvas
 var x = 0;
let startAngle=40;
let direction =-1;
setInterval(function(){
      x+=2;
      ctx.clearRect(0,0,w,h);// permet de nettoyer la forme de derrière
      // CARRE
      ctx.beginPath(); // Pose le crayon

      // point d'origine x, y, width, height
      ctx.rect(50, 50, 100, 100); // Permet de définir notre carré à partir de coordonnées et de taille (indesign)
      ctx.fill(); // permet de remplir notre forme

      //ARC DE CERCLE
      ctx.strokeStyle='red'; // couleur de bordure
      ctx.fillStyle='yellow';
      ctx.beginPath();
      // Point d'origine de départ, rayon, part de 0 pendant 0.5 cercle, dans le sens des aiguilles
      ctx.arc(200, 200, 80, 0, Math.PI* 0.75, false);
      ctx.closePath(); // Permet de fermer notre forme 

      ctx.stroke();
      ctx.fill();


      //TRIANGLE
      ctx.strokeStyle='royalblue'; // couleur de bordure
      ctx.fillStyle='turquoise';
      ctx.beginPath();
      // Point d'origine de départ, rayon, part de 0 pendant 0.5 cercle, dans le sens des aiguilles
      ctx.moveTo(450, 300);
      ctx.beginPath();
      ctx.lineTo(300,450);
      ctx.lineTo(450,450);
      ctx.lineTo(375,300);
      ctx.closePath(); // Permet de fermer notre forme 
      ctx.stroke();
      ctx.fill();


      if(startAngle <=0){ // Ouverture de bouche
            direction = 1; 
      }
      else if (startAngle >=40){ // fermeture de bouche
            direction = -1;
      };

      startAngle += (1.5*direction); // Pas de mouvement

      // PACMAN
      ctx.strokeStyle='black'; // couleur de bordure
      ctx.fillStyle='yellow';
      ctx.beginPath();
      ctx.arc(700+x, 200, 40, (Math.PI/180) * startAngle, (Math.PI/180) * (360 - startAngle), false);
      ctx.lineTo(700+x,200);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();

      //oeil
      ctx.fillStyle='black';
      ctx.beginPath();

      ctx.arc(690+x, 180, 5, 0, Math.PI* 2, false);
      ctx.fill();
      if(x>w){
            x-=2;
      }

},1000/60); // temps de l'intervalle





