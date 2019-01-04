//créer un générateur de mot de passe à 10 caractères aléatoires.
// Le générateur doit prendre un nombre de caractère pour générer le mdp. (première classe qui fait appel à une fonction console.log qui permet d'afficher les caractères.)
/*var caractList=["A","B","C","D","E","1","2","3","4","5","a","b","c","d","e"];
var mot='';
var NbrCaractere=10;

      class Random{
            
            constructor(NbrCaractere){
                  this.NbrCaractere = NbrCaractere,
                  this.mot=mot
            }
            for(let i=0; i < NbrCaractere ; i++){
                  mot+=caractList.charAt(Math.floor(Math.random()*caractList.length);
                  return mot;
            };
            
            show(){
                  console.log(`Nombre de caractères : ${this.NbrCaractere}, Mot de passe : ${this.mot}`)
            }
      };*/

      //correction

      class PasswordGenerator{
            constructor(length = 10 ,chars=''){
                  this.length=length;
                  this.chars=chars;
                  this.lower="abcdefghijklmnopqrstuvwxyz";
                  this.upper= this.lower.toUpperCase();
                  this.numeric="0123456789";
                  this.special = "&#@!$%";

                  if (this.chars.length===0){
                        this.resetChars();
                  }
            }
            resetChars(){
                  this.chars=[
                        this.lower,
                        this.upper,
                        this.numeric,
                        this.special
                  ].join('');
            }
            getRandomInt(max){
                  return Math.floor(Math.random()*Math.floor(max))
            }
            generate(){
                  let str='';
                  for (let i = 0; i<this.length;i++){
                        let index = this.getRandomInt(this.chars.length-1);
                        str = this.chars[index];
                  }
                  return str;
            }
      }