import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';;

import { ProfileRoutingModule } from './profile-routing.module';
import { OnBoardComponent } from './on-board/on-board.component';

@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule
  ],
  declarations: [OnBoardComponent]
})
export class ProfileModule { }
