import { Component, OnInit,  Input } from '@angular/core';

@Component({
  selector: 'app-my-svg',
  templateUrl: './my-svg.component.svg',
  styleUrls: ['./my-svg.component.css']
})
export class MySvgComponent implements OnInit {

  @Input() item:string = ''; 

  constructor() { 
    debugger;
    console.log("HEllo");
    console.log(this.item);
  }

  fill = "#007f00";

  public changeColor() {
    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;
    this.fill = `rgb(${r}, ${g}, ${b})`;
  }

  ngOnInit(): void {

    console.log(this.item);
  }

}
