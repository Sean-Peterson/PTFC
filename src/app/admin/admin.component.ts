import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {
  members: FirebaseListObservable<any[]>;

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers()
  }

  submitForm(firstName: string, lastName: string, role: string, bio: string, ) {
    if (firstName != '' && lastName != '' && role != '' && bio != '') {
      var newMember: Member = new Member(firstName, lastName, role, bio);
      this.memberService.addMember(newMember);
      this.router.navigateByUrl('/');
    } else {
      alert("Please provide values for all fields");
    }
  }

  submitUpdate(memberToUpdate) {
    this.memberService.updateMember(memberToUpdate);
    this.router.navigateByUrl('admin');
  }

  beginDeletingMember(memberToDelete){
    if(confirm("Are you sure you want delete this member?")){
      this.memberService.deleteMember(memberToDelete);
    }
    this.router.navigateByUrl('admin');
  }

}
