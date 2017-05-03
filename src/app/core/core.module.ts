import { NgModule,
  Optional, SkipSelf } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LoggedInGuard } from './logged-in.guard';

import { User } from '../shared/models/user';

@NgModule({
  imports:      [ SharedModule ],
  declarations: [ ],
  exports:      [ ],
  providers:    [ LoggedInGuard ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
