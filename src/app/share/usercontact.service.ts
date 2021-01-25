import { Injectable } from '@angular/core';
    import { UserContact } from './usercontact.model';

    @Injectable({
      providedIn: 'root'
    })
    export class UsercontactService {

      usercontacts: UserContact[] = [{
        id: 0,
        name: 'Alex',
        email: 'mdirshath12@gmail',
        
        username: 'BlaBla',
        address: 'chennai',
        phone:8148473280, 
        salary:5000,
        companyname:'kge'

      },
      {
        id: 1,
        name: 'Ottopeter',
        email: 'ashk@gmail',
        username: 'BlaBla',
        address: 'chennai',
        phone:8148473280, 
        salary:5000,
        companyname:'kge'

      },
      {
        id: 2,
        name: 'Peter',
        email: 'irshathask@gmail',
        username: 'BlaBla',
        address: 'chennai',
        phone:8148473280, 
        salary:5000,
        companyname:'kge'

      },
      {
        id: 3,
        name: 'irshpeter',
        email: 'irshathask@gmail',
        username: 'BlaBla',
        address: 'Pondicherry',
        phone:8148473280, 
        salary:5000,
        companyname:'kge'

      }];

      create(usercontact: UserContact) {
        const itemIndex = this.usercontacts.length;
        usercontact.id = this.getnextId();
        console.log(usercontact);
        this.usercontacts[itemIndex] = usercontact;
      }

      delete(usercontact: UserContact) {
        this.usercontacts.splice(this.usercontacts.indexOf(usercontact), 1);
      }

      update(usercontact: UserContact) {
        const itemIndex = this.usercontacts.findIndex(item => item.id === usercontact.id);
        console.log(itemIndex);
        this.usercontacts[itemIndex] = usercontact;
      }

      getall(): UserContact[] {
        console.log('usercontactservice:getall');
        console.log(this.usercontacts);
        return this.usercontacts;
      }

      reorderUserContacts(usercontact: UserContact) {
        console.log('Zur Info:', usercontact);
        this.usercontacts = this.usercontacts
          .map(uc => uc.id === usercontact.id ? usercontact : uc)
          .sort((a, uc) => uc.id - uc.id);
      }

      getUserById(id: number) {
        console.log(id);
        const itemIndex = this.usercontacts.findIndex(item => item.id === id);
        console.log(itemIndex);
        return this.usercontacts[itemIndex];
      }

      getnextId(): number {
        let highest = 0;
        this.usercontacts.forEach(function (item) {
          if (highest === 0) {
            highest = item.id;
          }
          if (highest < item.id) {
            highest = item.id;
          }
        });
        return highest + 1;
      }
    }
