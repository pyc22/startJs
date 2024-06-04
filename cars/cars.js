class CarApp{
    addCarBtn;
    brand;
    model;
    listOfCars;
  
    constructor(car){
        this.cardEl=document.getElementById('cardx');
        this.addCarBtn = document.getElementById('addCar');
        this.listOfCars = car;
        this.createCard();
    }
     
    createCard(){
        this.cardEl.innerHTML='';
        this.listOfCars.forEach((car) => {

            const card=document.createElement('div');
            card.setAttribute('class','card');
            card.innerHTML="<h3>Brand </h3>" 
            + car.brand + "<h3> <h3>Model </h3>"
             + car.model;
    
            this.cardEl.appendChild(card);
            
        });
       
        

    }




}

const car = new CarApp([{
    brand: 'Toyota',
    model: 'Corolla'
},{
    brand: 'Hyundai',
    model: 'Tucson'
}]
);


car.addCarBtn.addEventListener('click',function(){
    console.log("pushed");
})