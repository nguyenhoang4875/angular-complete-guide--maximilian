import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HeaderComponent } from "./header/header.component";
import { AlertComponent } from "./shared/alert/alert.component";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core.module";
import { LoggingService } from "./logging.service";
import { MyRecpiesComponent } from "./my-recpies/my-recpies.component";
import { MyRecipesListComponent } from "./my-recpies/my-recipes-list/my-recipes-list.component";
import { MyRecipesItemComponent } from './my-recpies/my-recipes-item/my-recipes-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyRecpiesComponent,
    MyRecipesListComponent,
    MyRecipesItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
  ],
  bootstrap: [AppComponent],
  // providers:[LoggingService],
  entryComponents: [AlertComponent],
})
export class AppModule {}
