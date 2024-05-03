import { Component } from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrl: './user-name.component.css'
})
export class UserNameComponent {
  username=''
  showSecret=false
  log=[]
  
  onToggleDetails(){
    this.showSecret=!this.showSecret
    // this.log.push(this.log.length + 1)
    this.log.push(new Date())
  }

}
