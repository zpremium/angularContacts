import { Component, OnInit } from '@angular/core';
import { contacts } from '../contacts';

interface Contact {
  name: String;
  email: String;
  phoneNumber: string;
  image: String;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  state=true
  contacts: Object[];
  newContact: Contact;
  error: string;
  elementosFavoritos:Object[];

  constructor() {
    this.newContact = { name: '', email: '', phoneNumber: '', image: '' };
  }

  ngOnInit() {
    this.contacts = contacts;
  }

  addContact() {
    // add contact to contacts list

    if (this.newContact.name == '' || this.newContact.phoneNumber == '') {
      this.error =
        'Introduzca el nombre de la persona y/o el número de telefóno';
      return;
    }
    this.contacts.push(this.newContact);
    console.log(this.newContact);

    // clear inputs
    this.clearInputs();
  }
  clearInputs(): void {
    this.newContact = {} as Contact;
  }
  deleteContact(user) {
    // coge el index del usuario
    let index = this.contacts.indexOf(user);
    if (index > -1) {
      this.contacts.splice(index, 1);
    }
    console.log(index);

  }
  favorite(i:Contact){
    this.state = !this.state
    if (this.state === true) {
      document.getElementById('fav').className = 'bi bi-star icon'
    } else {
      document.getElementById('fav').className = 'bi bi-star_outline icon'
    }
  }


}
