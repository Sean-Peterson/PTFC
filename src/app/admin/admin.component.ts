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

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(firstName: string, lastName: string, role: string, bio: string, ) {
    var newMember: Member = new Member(firstName, lastName, role, bio);
    this.memberService.addMember(newMember);
    this.router.navigateByUrl('/');
  }

}
