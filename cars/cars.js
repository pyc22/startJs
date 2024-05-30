class CarApp{
    addCarBtn;
  
    constructor(){
        this.addCarBtn = document.getElementById('addCar');
    }
   




}

const car = new CarApp();


car.addCarBtn.addEventListener('click',function(){
    console.log("pushed");
})