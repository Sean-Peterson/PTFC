import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  providers: [MemberService]
})
export class MemberComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private memberService: MemberService) {}

  memberId: string = null;
  members: Member[] = [];

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = (urlParameters['id']);
    });
    this.memberService.getMembers().subscribe(dataLastEmittedFromObserver => {
      for(var i = 0; i < dataLastEmittedFromObserver.length ; i++) {
        if(dataLastEmittedFromObserver[i].$key == this.memberId) {
          this.members.push(dataLastEmittedFromObserver[i]);
        }
      }
    })
  }

}
