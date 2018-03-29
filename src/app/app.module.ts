import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Bootstrap } from 'bootstrap';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { ChatComponent } from './chat/chat.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { AccountActivatedComponent } from './account-activated/account-activated.component';
import { NotificationComponent } from './notification/notification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { AsideComponent } from './aside/aside.component';
import { MainPeopleComponent } from './main-people/main-people.component';
import { AsideLeftComponent } from './aside-left/aside-left.component';
import { ModalComponent } from './modal/modal.component';
import { MainComponent } from './main/main.component';
import { IndexComponent } from './index/index.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { IndustryItemComponent } from './industry-item/industry-item.component';
// import { AppRoutingModule } from './/app-routing.module';
const routes: Routes = [
  { path: '', component: ChatComponent },
  { path: 'mainpeoples', component: MainPeopleComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'index', component: IndexComponent },
  { path: '**', component: ChatComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ChatComponent,
    CheckoutComponent,
    BenefitsComponent,
    AccountActivatedComponent,
    NotificationComponent,
    MenuLeftComponent,
    ProfileComponent,
    AsideComponent,
    MainPeopleComponent,
    AsideLeftComponent,
    ModalComponent,
    MainComponent,
    IndexComponent,
    LoginFormComponent,
    PeoplesComponent,
    ChatListComponent,
    IndustryItemComponent,
  ],
  imports: [
    BrowserModule,NgbModule.forRoot(),BrowserAnimationsModule,RouterModule.forRoot(routes),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
