const {Scheduler} = require('.lib/scheduler.js')

var prueba = false
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
            // moment().format('dddd/MM HH:mm')
            time = date.parse(prompt("Ingrese el horario que quiere consultar, en formato dddd/MM HH:mm",""))
            horarios.forEach(function compare(element){
                if(element != time){
                    document.write("El horario que usted consulto esta libre")
                    document.write(time)
                    prueba = true
                }
                else{
                    prueba = false
                    document.write("El horario por el que consulto esta ocupado")   
                }
            })            
            //Schedule();
            break;
        case 2:
            time = prompt("Ingrese el horario que quiere agendar, en formato","")
            if(prueba = false){
                document.write("Primero realice la consulta antes de agendar")
            }
            else{
                
            }
            //CouldScheduleAt(fecha);
            break;
        case 3:
            //UnscheduleAt(fecha);
            break;
        case 4:
            //NextAvalibleSchedule(fecha);
            break;
        case 5:
            document.write("4. Cerrando")
            break;
        case 6:
            document.write(horarios)
            break;
        default:
            document.write("Opcion no disponible")

    }

}while(option != 5)