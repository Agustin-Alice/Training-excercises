var moment = require('moment');
//si hago una function fuera para usarla en los metodos, puede ser que no me deje usar las propertys de los obj.

class Scheduler { 
    horarios = [];
    Scheduler(){

    }
    // returns true if there’s room to schedule at ‘time’
    CouldScheduleAt(fecha){    
        //hay que hacer que sean +-10 minutos        
        if(this.horarios.length === 0){
            console.log("El horario por el que consulto esta libre")
        }
        else{
            this.horarios.forEach((element) => {      
                if(moment(fecha).subtract(10,'m') < moment(element).add(10,'m') && moment(fecha).add(10,'m') > moment(element).subtract(10,'m') || moment(element).subtract(10,'m') < moment(fecha).add(10,'m') && moment(element).add(10,'m') > moment(fecha).subtract(10,'m')){
                   console.log("El horario por el que consulto esta ocupado");
                }
                else{
                   console.log("El horario por el que consulto esta libre")
                }
            })
        }      
    }
    
       
    // returns true if we successfully scheduled

    ScheduleAt(fecha){
        if(this.horarios.length === 0){
            this.horarios.push(fecha)
            console.log("El horario por el que consulto se cargo correctamente")
            console.log(this.horarios)
        }
        else{
            this.horarios.forEach((element) => {
                if(moment(fecha).subtract(10,"m") < moment(element).add(10,"m") && moment(fecha).add(10,"m") > moment(element).subtract(10,"m") || moment(element).subtract(10,"m") < moment(fecha).add(10,"m") && moment(element).add(10,"m") > moment(fecha).subtract(10,"m")){
                    console.log("El horario por el que consulto esta ocupado");
                }
                else{
                    this.horarios.push(fecha)
                    console.log("El horario por el que consulto se cargo correctamente")
                }
            })
        }        
    }
    
    // Choose an available time to schedule at, and return that time
    Schedule(){
        let tiempo_actual = moment()
        tiempo_actual = moment(tiempo_actual,'DD-MM-YYY HH:mm')
        let lugar = ""
        for(let i = 0; lugar!= "aprobado"; i++)
            if(moment(tiempo_actual).subtract(10,"m") < moment(this.horarios[i]).add(10,"m") && moment(tiempo_actual).add(10,"m") < moment(this.horarios[i]).subtract(10,"m") || moment(this.horarios[i]).subtract(10,"m") < moment(tiempo_actual).add(10,"m") && moment(this.horarios[i]).add(10,"m") < moment(tiempo_actual).subtract(10,"m")){
                lugar = "aprobado"
                console.log(tiempo_actual + " " +"es el proximo horario disponible")
            }
                else{
                tiempo_actual = moment(tiempo_actual).add(10,"m")
            }
            // agregar menu desea agendar el vuelo? con que limite?
        }
        
    
    
    // returns true if we successfully unscheduled something
    UnscheduleAt(fecha){
        if(this.horarios.length === 0){
            console.log("No hay horarios agendados\n")
        }
        else{            
            this.horarios.splice(fecha-1,1)
            console.log("Se desagendo el vuelo correctamente\n")
            
        }
        
    }

}
module.exports ={
    Scheduler
}