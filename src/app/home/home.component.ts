import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  form: FormGroup;
  
  constructor(private readonly fb: FormBuilder, private router: Router) { 
    
    this.form = this.fb.group ({
      FirstName: ['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      LastName: ['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      UserEmail: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(8)]],
      dob: []

    });
  }

  ngOnInit(): void {
  }

  passwordConfirming(fc: FormControl) {
    const value = fc.value as string;
    const isInvalid = 'password' === value.trim().toLowerCase();
    return isInvalid ? { passwordError: 'Password is not a strong password'} : null;
}


onSubmit() {  
  if (this.form.get('UserEmail').value == 'sashanka.singh@gmail.com' &&  this.form.get('password').value == 'sashanka1985'){
    console.log(this.form.get('UserEmail').value);
    console.log(this.form.get('password').value);
    this.router.navigate(['/exam-select']);
    //this.router.navigate(['/quiz']);
  }  

  else{
    console.log("Password Mismatch");
    alert("Password Mismatch");
  }

}

}
