import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PopupModule } from 'ng2-opd-popup';

import { ExampleRoutingModule } from './example-routing.module';
import { AuthComponent } from './auth/auth.component';
import { IdComponent } from './id/id.component';
import { ExampleComponent } from './example/example.component';
import { AwesomeComponent } from './awesome/awesome.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ModalsComponent } from './modals/modals.component';

@NgModule({
  imports: [
    SharedModule,
    ExampleRoutingModule,
    PopupModule.forRoot()
  ],
  declarations: [AuthComponent, IdComponent, ExampleComponent, AwesomeComponent, WrapperComponent, ModalsComponent]
})
export class ExampleModule { }
