import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/service/email.service';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  data={
    to:"",
    from:"",
    message:""
  }

  flag:boolean=false;
  
  constructor(private email:EmailService,private snake:MatSnackBar) { }

  ngOnInit() {
  }

  doSubmit() {
    console.log("Everything is working fine");   
    if(this.data.to=='' || this.data.from=='' || this.data.message==''){
      this.snake.open("All Field Requird","OK");
      return
    }
    this.flag=true;
    this.email.sendEmail(this.data).subscribe(
      response=>{
        this.flag=false;
        this.snake.open("Send Success","OK");
        console.log(response);
      },
      error=>{
        this.flag=false;
        this.snake.open("Error Message Not Send","OK");
        console.log(error);
      }

    )
}
}
