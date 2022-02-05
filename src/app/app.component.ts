import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'homework2-new-advanced';
  public users: any = [];
  public userName!: string
  public userPassword!: string;
  public userEmail!: string;
  public buttonHideShow = false;
  public index!: number;
  public regExpGmail = /^\S{1,}@\D{1,}\.\D{2,}$/;
  public regExplogin = /\w{4,16}/;
  public regExpPassword = /\w{4,16}/;
  clearInputs() {
    this.userName = '';
    this.userPassword = '';
    this.userEmail = '';
  };

  addUser() {
    if (this.regExplogin.test(this.userName) !== true) {
      document.querySelector<HTMLElement>('.errorLogin')!.style.display = 'block';
    } else {
      document.querySelector<HTMLElement>('.errorLogin')!.style.display = 'none';
    }
    if (this.regExpPassword.test(this.userPassword) !== true) {
      document.querySelector<HTMLElement>('.errorPassword')!.style.display = 'block';
    } else {
      document.querySelector<HTMLElement>('.errorPassword')!.style.display = 'none';
    }
    if (this.regExpGmail.test(this.userEmail) !== true) {
      document.querySelector<HTMLElement>('.errorEmail')!.style.display = 'block';
    } else {
      document.querySelector<HTMLElement>('.errorEmail')!.style.display = 'none';
    }
    if (this.regExplogin.test(this.userName) === true && this.regExpPassword.test(this.userPassword) === true && this.regExpGmail.test(this.userEmail) === true) {
      const currentUser: object = {
        name: this.userName,
        password: this.userPassword,
        email: this.userEmail
      };
      this.users.push(currentUser);
      this.clearInputs();
    }
  };

  deleteUser(index: number) {
    this.users.splice(index, 1);
  };

  editUser(index: number) {
    this.index = index;
    this.userName = this.users[this.index].name;
    this.userPassword = this.users[this.index].password;
    this.userEmail = this.users[this.index].email;
    this.buttonHideShow = !this.buttonHideShow
  };

  saveUser() {
    const currentUser: object = {
      name: this.userName,
      password: this.userPassword,
      email: this.userEmail
    };
    this.users[this.index] = currentUser;
    this.buttonHideShow = !this.buttonHideShow;
    this.clearInputs();
  };
};