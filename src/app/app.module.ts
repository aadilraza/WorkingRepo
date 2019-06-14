import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { XTestService } from './xtest.service';
import { _homeComponent } from './_home/_home.component';
import { AuthGuard } from './_guards';
import { AuthenticationService } from './_services';

import { _footerComponent } from './_footer/_footer.component';
import { _headerComponent } from './_header/_header.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AgenciesListComponent } from './agencies-list/agencies-list.component';
import { AgencyPageComponent } from './agency-page/agency-page.component';
import { AgentPageComponent } from './agent-page/agent-page.component';
import { AgentsListComponent } from './agents-list/agents-list.component';
import { BlogFullWidthSinglePostComponent } from './blog-full-width-single-post/blog-full-width-single-post.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogComponent } from './blog/blog.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ComparePropertiesComponent } from './compare-properties/compare-properties.component';
import { ContactComponent } from './contact/contact.component';
import { Index2Component } from './index2/index2.component';
import { Index3Component } from './index3/index3.component';
import { Index4Component } from './index4/index4.component';
import { Index5Component } from './index5/index5.component';
import { ListingsGridCompactWithSidebarComponent } from './listings-grid-compact-with-sidebar/listings-grid-compact-with-sidebar.component';
import { ListingsGridFullWidthComponent } from './listings-grid-full-width/listings-grid-full-width.component';
import { ListingsGridStandardWithSidebarComponent } from './listings-grid-standard-with-sidebar/listings-grid-standard-with-sidebar.component';
import { ListingsGridWithMapComponent } from './listings-grid-with-map/listings-grid-with-map.component';
import { ListingsHalfMapGridCompactComponent } from './listings-half-map-grid-compact/listings-half-map-grid-compact.component';
import { ListingsHalfMapGridStandardComponent } from './listings-half-map-grid-standard/listings-half-map-grid-standard.component';
import { ListingsHalfMapListComponent } from './listings-half-map-list/listings-half-map-list.component';
import { ListingsListFullWidthComponent } from './listings-list-full-width/listings-list-full-width.component';
import { ListingsListWithMapComponent } from './listings-list-with-map/listings-list-with-map.component';
import { ListingsListWithSidebarComponent } from './listings-list-with-sidebar/listings-list-with-sidebar.component';
import { MyBookmarksComponent } from './my-bookmarks/my-bookmarks.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyPropertiesComponent } from './my-properties/my-properties.component';
import { PricingTablesComponent } from './pricing-tables/pricing-tables.component';
import { SinglePropertyPage1Component } from './single-property-page-1/single-property-page-1.component';
import { SinglePropertyPage2Component } from './single-property-page-2/single-property-page-2.component';
import { SinglePropertyPage3Component } from './single-property-page-3/single-property-page-3.component';
import { SubmitPropertyComponent } from './submit-property/submit-property.component';
import { ComparePropertyComponent } from './compare-property/compare-property.component';
import { TitleBarComponent } from './title-bar/title-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    _headerComponent,
    _footerComponent,
    _homeComponent,
    LoginRegisterComponent,
    NavigationComponent,
    AgenciesListComponent,
    AgencyPageComponent,
    AgentPageComponent,
    AgentsListComponent,
    BlogFullWidthSinglePostComponent,
    BlogPostComponent,
    BlogComponent,
    ChangePasswordComponent,
    ComparePropertiesComponent,
    ContactComponent,
    Index2Component,
    Index3Component,
    Index4Component,
    Index5Component,
    ListingsGridCompactWithSidebarComponent,
    ListingsGridFullWidthComponent,
    ListingsGridStandardWithSidebarComponent,
    ListingsGridWithMapComponent,
    ListingsHalfMapGridCompactComponent,
    ListingsHalfMapGridStandardComponent,
    ListingsHalfMapListComponent,
    ListingsListFullWidthComponent,
    ListingsListWithMapComponent,
    ListingsListWithSidebarComponent,
    MyBookmarksComponent,
    MyProfileComponent,
    MyPropertiesComponent,
    PricingTablesComponent,
    SinglePropertyPage1Component,
    SinglePropertyPage2Component,
    SinglePropertyPage3Component,
    SubmitPropertyComponent,
    ComparePropertyComponent,
    TitleBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [XTestService, AuthGuard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
