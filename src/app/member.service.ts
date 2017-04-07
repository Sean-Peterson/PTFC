import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('members');
  }

  getMembers() {
    return this.members;
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  updateMember(localUpdatedMember){
    var memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
    console.log(memberEntryInFirebase);
    memberEntryInFirebase.update({
      firstName: localUpdatedMember.firstName,
      lastName: localUpdatedMember.lastName,
      role: localUpdatedMember.role,
      bio: localUpdatedMember.bio
    });

  }

  deleteMember(localMemberToDelete){
    var memberEntryInFirebase = this.getMemberById(localMemberToDelete.$key);
    console.log(localMemberToDelete.$key);
    memberEntryInFirebase.remove();
  }

  getMemberById(postId: string){
    return this.angularFire.database.object('/members/' + postId);
  }

}
