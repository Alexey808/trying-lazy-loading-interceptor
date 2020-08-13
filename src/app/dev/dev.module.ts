import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DevComponent} from './dev.component';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {DevInterceptorService} from '../core/interceptors/dev-interceptor.service';
import {AppModule} from '../app.module';


@NgModule({
  declarations: [
    DevComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevComponent }]),
  ],
  exports: [
    DevComponent,
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: DevInterceptorService,
    //   multi: true,
    // }
  ]
})
export class DevModule {
  // static forRoot(): ModuleWithProviders<DevModule> {
  //   return {
  //     ngModule: DevModule,
  //     providers: [
  //       {
  //         provide: HTTP_INTERCEPTORS,
  //         useClass: DevInterceptorService,
  //         multi: true,
  //       }
  //     ]
  //   };
  // }
}
