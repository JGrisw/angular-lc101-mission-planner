import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: object[] = [
    {name: "Habitat dome"},
    {name: "Drones"},
    {name: "Food containers"},
    {name: 'Oxygen tanks' }

  ];
  equipmentBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  add(equipmentName: string) {
    this.equipment.push({name: equipmentName});
  }  

  remove(tool: object) {
    let index = this.equipment.indexOf(tool);
    this.equipment.splice(index, 1);
  } 

  edit(tool: object) {
    this.equipmentBeingEdited = tool;
  }

  save(name: string, tool: object) {
    tool['name'] = name;
    this.equipmentBeingEdited = null;
    }

}
