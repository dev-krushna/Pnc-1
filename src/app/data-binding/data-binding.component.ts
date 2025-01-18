import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  courceName: string = 'Angular';

  isActive: boolean = true;

  price: number = 2000;

  inputType : String = 'password';

  stateName : String = 'Gujarat';

  constructor (){
    console.log('data-binding works!');
  }

  showMessage(message: string){
    alert(message);
  }

  changeCourceName(){
    this.courceName = 'React JS';
  }

}
