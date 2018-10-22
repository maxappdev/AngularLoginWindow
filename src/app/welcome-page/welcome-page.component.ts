import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  isSubmitted: boolean;
  model: User;
  receivedModel: User;
  data: any;

  constructor(private backend : BackendService) {
    this.isSubmitted = false;
    this.model = new User(null, null);
   }

  ngOnInit() {
  }

  onSubmit(){
    this.backend.postData(this.model).subscribe(
      (data: User) => {
        this.receivedModel=data;
        this.isSubmitted=true;
        console.log(this.receivedModel)
      },
      error => console.log(error)
  );
  }

}
