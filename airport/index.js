const {Scheduler} = require('.lib/scheduler.js')


var menu="MENU\n"
menu+="1.Consultar un horario\n"
menu+="2.Agendar un vuelo\n"
menu+="3.Desagendar un vuelo\n"
menu+="4.Pedir el proximo horario disponible\n"
menu+="5.Salir\n"
menu+="6.Listar\n"

var option = 0;
var time = 0;

do{
    var option = parseInt(prompt(menu));
    switch(option){
        case 1:
            Schedule();
            break;
        case 2:
            CouldScheduleAt(fecha);
            break;
        case 3:
            UnscheduleAt(fecha);
            break;
        case 4:
            NextAvalibleSchedule(fecha);
            break;
        case 5:
            document.write("4. Cerrando")
            break;
        case 6:
            document.write(horarios)
            break;
        default:
            document.write("Opcion no disponible")
            //break;

    }

}while(option != 5)