const{Scheduler} = require('./lib/scheduler.js')
const readline = require('readline');
var moment = require('moment');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pista = new Scheduler();


var menu="MENU\n"
menu+="1.Consultar un horario\n"
menu+="2.Agendar un vuelo\n"
menu+="3.Desagendar un vuelo\n"
menu+="4.Pedir el proximo horario disponible\n"
menu+="5.Mostrar vuelos programados\n"
menu+="6.Salir\n"

var option = 0;
let time = ""
repetidor();




        function repetidor(){
            rl.question(menu,(respuesta)=>{
                if(respuesta !=6){
                    option = respuesta
                switch(option){
                    case "1":    
                    // ('dddd/MM HH:mm')
                    function ask1 (){
                        return new Promise((resolve,reject)=>{
                            rl.question("Ingrese el horario que quiere consultar, en formato DD MM YYYY HH mm\n",(element)=>resolve(element));
                        });
                    }
                    ask1()
                    .then((result)=>{
                      time = moment(result,"DD-MM-YYYY HH:mm");
                    })
                    .then(()=>{
                    pista.CouldScheduleAt(time)
                    })
                    .then(()=>{
                        repetidor()
                    })
                         //mostrar el horario, quiere hacer otra cosa, 
                        break;
                    case "2":
                        function ask2(){
                            return new Promise((resolve,reject)=>{
                                rl.question("Ingrese el horario que quiere agendar, en formato DD MM YYYY HH mm\n",(element)=>resolve(element))
                            });
                        }
                        ask2()
                        .then((result)=>{
                            time = moment(result,"DD-MM-YYYY HH:mm");
                        })
                        .then(()=>{
                            pista.ScheduleAt(time)
                        })
                        .then(()=>{
                            repetidor();
                        })    
                        break;
                    case "3":
                        console.log(pista.horarios)
                        function ask(){
                            return new Promise((resolve,reject)=>{
                                rl.question("Ingrese la posicion del horario que quiere desagendar\n",(element)=>resolve(element))
                            });
                        }
                        ask()
                        .then((result)=>{
                            pista.UnscheduleAt(result)
                        })
                        .then(()=>{
                          repetidor()
                        })
                        break;
                    case "4":
                        pista.Schedule();
                        repetidor()
                    case "5":
                        console.log(pista.horarios)
                        repetidor()
                        break;
                    default:
                        console.log("Opcion no disponible\n")
                    }
                    repetidor();
                }else{
                        console.log("Cerrando\n")
                        rl.close();
                }
        })
    }
    