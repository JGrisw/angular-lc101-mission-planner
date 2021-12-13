import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiment: object[] = [
    {name: "Mars soil Sample"},
    {name: "Plant growth in habitat"},
    {name: "Human bone density"}


  ];
  experimentBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  add(experimentName: string) {
    this.experiment.push({name: experimentName});
  }  

  remove(tool: object) {
    let index = this.experiment.indexOf(tool);
    this.experiment.splice(index, 1);
  } 

  edit(tool: object) {
    this.experimentBeingEdited = tool;
  }

  save(name: string, tool: object) {
    tool['name'] = name;
    this.experimentBeingEdited = null;
    }

}
