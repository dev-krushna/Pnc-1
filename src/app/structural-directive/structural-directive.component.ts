import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  imports: [CommonModule , FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.scss'
})
export class StructuralDirectiveComponent {

  isAtive: boolean = true;  
  isOpen : boolean = true;

  num1 : String = '';
  num2 : String= '';

  divStyle : String = '';

  cityArray : String [] = ['Gujarat' , 'Maharashtra' , 'Punjab' , 'Goa' , 'Delhi', 'Other'];

  funHide(){
    this.isAtive =false;
  }

  funShow(){
    this.isAtive = true;
  }

  toggleme(){
    this.isOpen = !this.isOpen
  }

  addStyle(){
    this.divStyle = 'container';
  }
}
