import { Component, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DataStoreService } from '../services/data-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  isLoading = false;
  avatarPreview:string = ''
  coverImagePreview:string = ''
  signupForm = this.fb.group({
    fullName: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    avatar: [null, Validators.required],
    coverImage: [null],

  })

  constructor(private authService: AuthService, private fb: FormBuilder, private dataStore:DataStoreService, private router:Router){
    dataStore.showHeader.next(false);
    dataStore.showSideBar.next(false);
  }

  // to fix bug when we pressed back button in browser and header and side-bar are still hidden
  @HostListener('window:popstate', ['$event'])
  onPopState(event:Event) {
    console.log('Back button pressed');
    this.dataStore.showHeader.next(true);
    this.dataStore.showSideBar.next(true);
  }

  onSignup(){
    const fullName = this.signupForm.value.fullName
    const username = this.signupForm.value.username
    const email = this.signupForm.value.email
    const password = this.signupForm.value.password
    
    const avatar = this.signupForm.value.avatar
    const coverImage = this.signupForm.value.coverImage
    this.authService.register(fullName!,username!,email!,password!,avatar!,coverImage!).subscribe(res => {
      this.router.navigate(['/login'])
    })
  }

  onImagePicked(event:Event, fileName:string){
    
    // TODO: Validate that file type is only image and not pdf etc.

    const htmlInput = (event.target as HTMLInputElement)
    if (htmlInput.files){
      const file = htmlInput.files[0]
      this.signupForm.patchValue({[fileName]:file})
      // informs form that I have changed the value for below field, so validate it again
      this.signupForm.get(fileName)?.updateValueAndValidity()
      const reader = new FileReader()
      reader.onload = () =>{
        if(fileName == "avatar"){
          this.avatarPreview = reader.result as string;
        }
        else{
          this.coverImagePreview = reader.result as string;
        }
      }
      reader.readAsDataURL(file)
    }
    
  }
}
