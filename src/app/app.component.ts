import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  CreateUser:string = "Enter 16 Digit Card N0."

  userlist = []

  onclick(prouser){
     
   

    if(prouser.value.length > 0  )
    {
      
      this.userlist.push(prouser.value);
      prouser.value = '';
    }
  }

  ondelete(deleteme)
  {
    this.userlist.splice(deleteme,1)
  }
}
