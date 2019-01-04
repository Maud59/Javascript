//objet
'use strict' // permet aux navigateurs d'appliquer strictement le script et de voir les erreurs

var o={};

function User(name){
      this.name = name;

      this.hello = function(){
            // Closure : on definit une var that ou self qui sera égal à this pour replacer dans le contexte la fct hello
            var that = this;
            function debug(){
                  that.hello;
            }

            return 'Hello ' + this.name;
      };

      //Callback (appelle une fonction déjà définie avec des arguments dans la fonction)
      this.display = function(callback){

            // remet dans le contexte du this
            callback.apply(this);
      };
}

function Admin(name){
      this.name = name;
}
Admin.prototype = new User();

Admin.prototype.work = function(){
      return this.name + ' travaille';
}
Array.prototype.forEach = function(){
}
      
var a = new Admin ('toto');
console.log(a.hello());

var u = new User ("Wilfrid");
//console.log(u.hello());

u.display(function(){
      console.log(this.name);
});

console.log(a.work());

function Company(){
      this.users=[];
      this.addUser=function(user){
            if (!user instanceof User){
                  throw new Error("N'importe quoi ton type, je veux un User !")
            }
            this.users.push(user);
      }
}

var c = new Company();
c.addUser(u);
c.addUser(a);
console.log(c.users);

class Meetup{

      constructor(title){
            this.title=title;
            this.maxCapacity = 50;
      }
      show(){
            console.log(`Meetup ${this.title}, Capacité max : ${this.maxCapacity}`);
      }
}

let m = new Meetup('Workshop Go');
      m.show();


      