import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MemberService]
})
export class HomeComponent implements OnInit {
  members: FirebaseListObservable<any[]>;

  constructor(private router: Router, private memberService: MemberService) {}

  ngOnInit() {
    this.members = this.memberService.getMembers()
  }

  goToMemberPage(clickedMember) {
    this.router.navigate(['member', clickedMember.$key]);
  }

  desiredSearch: string = "all";

  searchToLower (search) {
    this.desiredSearch = search.toLowerCase();
  }

  displayAll() {
    this.desiredSearch = "all";
  }
}
