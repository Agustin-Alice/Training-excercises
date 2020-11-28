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
        rl.question(menu,(respuesta)=>{
            option = respuesta
            switch(option){
                case "1":    
                // ('dddd/MM HH:mm')
                function ask (){
                    return new Promise((resolve,reject)=>{
                        rl.question("Ingrese el horario que quiere consultar, en formato DD MM YYYY HH mm\n",(element)=>resolve(element));
                    });
                }
                ask()
                .then((result)=>{
                  time = moment(result,"DD MM YYYY HH mm");
                  time.format("DD MM YYYY HH:mm")
                  pista.CouldScheduleAt(time)
                })
//                .then((result) =>{
 
                
                    //    pista.CouldScheduleAt(result)
//              })
                   //time = rl.question("Ingrese el horario que quiere consultar, en formato DD MM YYYY HH mm\n",(element)=>{
                    //time = moment(element,"DD MM YYYY HH mm").format('DD MM YYYY HH mm')
                    //pista.CouldScheduleAt(element)
                  // })
                    //time =>{
                       // pista.CouldScheduleAt(time);
                   // } "DD MM YYYY HH mm"
                     //mostrar el horario, quiere hacer otra cosa, 
                    break;
                case "2":    
                    rl.question("Ingrese el horario que quiere agendar, en formato DD MM YYYY HH mm\n",(element)=>{
                        time = moment(element).format('DD/MM/YYYY HH:mm')
                        pista.ScheduleAt(time);
                    })
                    break;
                case "3":
                    console.log(this.horarios)
                    rl.question("Ingrese la posicion del horario que quiere desagendar\n",(element)=>{
                        pista.UnscheduleAt(element)
                    })
                    break;
                case "4":
                    pista.Schedule();
                    break;
                case "5":
                    console.log(this.horarios)
                    break;
                case "6":
                    console.log("6. Cerrando\n")
                    rl.close()
                    break;
                default:
                    console.log("Opcion no disponible\n")
                }
        
        
        });