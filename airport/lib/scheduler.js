const moment = require("moment");

class Scheduler { 
    horarios = [];
    time = ""
    // returns true if there’s room to schedule at ‘time’
    CouldScheduleAt(fecha){
        //hay que hacer que sean +-10 minutos
        this.horarios.forEach((element,date) => {
            if(date-10 < element+10 && date+10 > element-10 || element-10 > date+10 && element+10 > date-10){
             return 'false';
            }
        })
        this.horarios.push(date)
    }
       
    // returns true if we successfully scheduled
    ScheduleAt(fecha){
        this.horarios.forEach((element)=>{
           if (element === this.fecha){
               return 'true'
           }
        })
    }
    
    // Choose an available time to schedule at, and return that time
    Schedule(){
        moment().format('dddd/MM HH:mm')
        this.time = prompt("Ingrese el horario que quiere consultar, en formato","")
        return this.time
    }
    
    // returns true if we successfully unscheduled something
    UnscheduleAt(fecha){
        this.horarios.forEach((element)=>{
            if (element != this.fecha){
                return 'true'
            }
         })
    }
    NextAvalibleSchedule(){

    }



}
module.exports = {
    Scheduler
}