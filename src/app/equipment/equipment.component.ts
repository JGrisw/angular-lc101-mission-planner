import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   

   constructor() { }

   ngOnInit() { }

  addItem(equipmentItem: object, equipmentMass: number ) {
    this.cargoHold.push(equipmentItem);
    this.cargoMass += equipmentMass
    if(this.cargoMass >=1800){
      return true;
    } else {
      return false;
    }
  }

  disableButton(itemMass: number ){
    if(this.cargoHold.length === this.maxItems){
      return true; 
    } else if  (this.cargoMass + itemMass > this.maximumAllowedMass){
      return true;
    }else {

      return false;
    }
  }

  nearMassCap(){
    if(this.cargoMass >= 1800){
      return true;
    }else {
      return false;
    }
  }

  clearCargo(){
    this.cargoHold = [];
    this.cargoMass=0;
  }
   
}
