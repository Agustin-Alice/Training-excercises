var moment = require('moment');

/*function compare(element){
    if(element != time){
        document.write("El horario que usted consulto esta libre")
        document.write(time)
        prueba = true
    }
    else{
        prueba = false
        document.write("El horario por el que consulto esta ocupado")   
    }
}
*/
class Scheduler { 
    horarios = [];
    Scheduler(){
       let pista = new Scheduler
        this.horarios = horarios

    }
    // returns true if there’s room to schedule at ‘time’
    CouldScheduleAt(fecha){
        //hay que hacer que sean +-10 minutos
        this.horarios.forEach((element,fecha) => {
            if(moment(fecha).subtract(10,"m") < moment(element).add(10,"m") && moment(fecha).add(10,"m") > moment(element).subtract(10,"m") || moment(element).subtract(10,"m") < moment(fecha).add(10,"m") && moment(element).add(10,"m") > moment(fecha).subtract(10,"m")){
             document.write("El horario por el que consulto esta ocupado");
            }
            else{
                this.horarios.push(fecha)
                document.write("se agrego el vuelo correctamente")
            }
        })
        
    }

       
    // returns true if we successfully scheduled

    //agregar ScheduleAt a CouldScheduleAt
   /* ScheduleAt(horarios){
        this.horarios.forEach((element)=>{
           if (element === ){
               return 'true'
           }
        })
    }
    */
    // Choose an available time to schedule at, and return that time
    Schedule(){
        
        
    }
    
    // returns true if we successfully unscheduled something
    UnscheduleAt(){
        if(this.horarios == []){
            document.write("No hay horarios agendados\n")
        }
        else{
            var menu1 ="horarios agendados\n"
            this.horarios.forEach((element) =>{
                let contador = contador + 1
                menu1+= contador+"." + element
                }
            )
            let undate = parseInt(prompt(menu1));
            this.horarios.filter(fechas => fechas[undate])
            document.write("Se desagendo el vuelo correctamente\n")
            
        }
        
    }
    NextAvalibleSchedule(){
        let tiempo_actual = moment().format('DD/MM/YYYY HH:mm')
        let lugar = ""
        for(let i = 0; lugar!= "aprobado"; i++)
            if(moment(tiempo_actual).subtract(10,"m") < moment(this.horarios[i]).add(10,"m") && moment(tiempo_actual).add(10,"m") < moment(this.horarios[i]).subtract(10,"m") || moment(this.horarios[i]).subtract(10,"m") < moment(tiempo_actual).add(10,"m") && moment(this.horarios[i]).add(10,"m") < moment(tiempo_actual).subtract(10,"m")){
                lugar = "aprobado"
                document.write(tiempo_actual + "es el proximo horario disponible")
            // agregar menu desea agendar el vuelo?
            }
    }



}
module.exports ={
    Scheduler
}