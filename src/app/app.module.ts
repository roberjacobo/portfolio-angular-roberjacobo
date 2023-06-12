import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HomeModule } from "./home/home.module";
// Components
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
