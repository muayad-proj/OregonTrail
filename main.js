console.log("LLLLOO")
class Traveler {
    constructor(name, food =1, isHealthy= true ){
        this.name=name
        this.food= food
        this.isHealthy= isHealthy
    }

    hunt() {
        this.food = this.food + 2 
    }
    eat(){
        if (this.food < 1) {
            this.isHealthy = false    
        }else {
        this.food= this.food -1
        }
}
}
class Wagon{
    constructor (capacity, passengersList=[]){

        this.capacity=capacity
        this.passengersList=passengersList
    }
    getAvailableSeatCount(){
        //for(let i =0 ; i<= this.capacity; i++){
        return this.capacity - this.passengersList.length 

    }

    join(traveler){
        if(this.passengersList.length < this.capacity ){
            ///push traviler direct
            this.passengersList.push(traveler)           
            // let count = this.passengersList.length
           // traveler= this.passengersList[count +1]

        }
    }
    shouldQuarantine() {
        // loop 
        //check each pass ishelthy
        /*if(this.isHealthy === false){
            return true
        }
        else{

            return false
        } */

          for (let i = 0; i < this.passengersList.length; i++) {

            if (this.passengersList[i].isHealthy=== false) {
                return true
            }
        } return false
    }  
        
        totalFood(){
            // for and sumition
            let sum = 0
            for (let i = 0; i < this.passengersList.length; i++) {
                sum = sum + this.passengersList[i].food
            }
    
    
            return sum

            }



        }


    
// Add the wagons and the travelers to the DOM.



/*ShowHTML(){}
    let wagonsElement = document.createElement('wdetails')
    let travelElement = document.createElement('tdetails')
    
    wagonsElement.append(this.Wagon)
    travelElement.append(this.traveler)
    
}*/
