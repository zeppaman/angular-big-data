
export class Stopwatch {

    starttime: Date
    stoptime:Date;
    constructor()
    {
        this.starttime== new Date();
    }

    

    start()
    {
        this.starttime= new Date();
        //console.log(this.starttime.getTime());
    }

    stop()
    {
        this.stoptime= new Date();
        //console.log(this.stoptime.getTime());
    }

    reset()
    {
        this.starttime= new Date();
        this.stoptime= new Date();
    }

    totalMilliseconds()
    {
      return  (this.stoptime.getTime() - this.starttime.getTime())   ;     
    }
}