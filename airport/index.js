const{Scheduler} = require('/lib/scheduler.js')


var pista = new Scheduler();
var menu="MENU\n"
menu+="1.Consultar un horario\n"
menu+="2.Agendar un vuelo\n"
menu+="3.Desagendar un vuelo\n"
menu+="4.Pedir el proximo horario disponible\n"
menu+="5.Mostrar vuelos programados\n"
menu+="6.Salir\n"



var option = 0;
let time = ""
do{
    var option = parseInt(prompt(menu));
    switch(option){
        case 1:
            // moment().format('dddd/MM HH:mm')
            time = moment(prompt("Ingrese el horario que quiere consultar, en formato DD/MM/YYYY HH:mm","")).format('DD/MM/YYYY HH:mm')
            pista.CouldScheduleAt(time)            
            //Schedule();
            break;
        case 2:
            time = moment(prompt("Ingrese el horario que quiere agendar, en formato DD/MM/YYYY HH:mm","")).format('DD/MM/YYYY HH:mm')
            pista.CouldScheduleAt(time)
            //CouldScheduleAt(fecha);
            break;
        case 3:
            pista.UnscheduleAt()
            //prompt mostrar el array y el indice que quiera borrar lo borre
            //UnscheduleAt(fecha);
            break;
        case 4:
            pista.NextAvalibleSchedule();
            break;
        case 5:
            console.log(this.horarios)
            break;
        case 6:
            console.log("4. Cerrando\n")
            break;
        default:
            console.log("Opcion no disponible\n")
    }
}while(option != 6)