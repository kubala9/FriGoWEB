import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ExampleRoutingModule } from './example-routing.module';
import { AuthComponent } from './auth/auth.component';
import { IdComponent } from './id/id.component';
import { ExampleComponent } from './example/example.component';
import { AwesomeComponent } from './awesome/awesome.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  imports: [
    SharedModule,
    ExampleRoutingModule
  ],
  declarations: [AuthComponent, IdComponent, ExampleComponent, AwesomeComponent, WrapperComponent]
})
export class ExampleModule { }
