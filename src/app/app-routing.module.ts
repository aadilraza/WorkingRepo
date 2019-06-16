import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { _homeComponent } from './_home/_home.component';
import { AuthGuard } from './_guards';
import { LoginRegisterComponent } from './login-register/login-register.component';
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

const routes: Routes = [
  { path: '', component: _homeComponent, pathMatch: 'full' , canActivate:[AuthGuard]},
  { path: 'login-register', component: LoginRegisterComponent },
  { path: 'agencies-list', component: AgenciesListComponent  },
  { path: 'agency-page', component: AgencyPageComponent  },
  { path: 'agent-page', component: AgentPageComponent  },
  { path: 'agents-list', component: AgentsListComponent },
  { path: 'blog-full-width-single-post', component: BlogFullWidthSinglePostComponent },
  { path: 'blog-post', component: BlogPostComponent },
  { path: 'blog', component: BlogComponent},
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'compare-properties', component: ComparePropertiesComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'index-2', component: Index2Component},
  { path: 'index-3', component: Index3Component},
  { path: 'index-4', component: Index4Component},
  { path: 'index-5', component: Index5Component},
  { path: 'listings-grid-compact-with-sidebar', component: ListingsGridCompactWithSidebarComponent },
  { path: 'listings-grid-full-width', component: ListingsGridFullWidthComponent},
  { path: 'listings-grid-standard-with-sidebar', component: ListingsGridStandardWithSidebarComponent},
  { path: 'listings-grid-with-map', component: ListingsGridWithMapComponent },
  { path: 'listings-half-map-grid-compact', component: ListingsHalfMapGridCompactComponent },
  { path: 'listings-half-map-grid-standard', component: ListingsHalfMapGridStandardComponent},
  { path: 'listings-half-map-list', component: ListingsHalfMapListComponent},
  { path: 'listings-list-full-width', component: ListingsListFullWidthComponent },
  { path: 'listings-list-with-map', component: ListingsListWithMapComponent},
  { path: 'listings-list-with-sidebar', component: ListingsListWithSidebarComponent},
  { path: 'my-bookmarks', component: MyBookmarksComponent },
  { path: 'my-profile', component: MyProfileComponent  },
  { path: 'my-properties', component: MyPropertiesComponent  },
  { path: 'pricing-tables', component: PricingTablesComponent  },
  { path: 'single-property-page-1', component: SinglePropertyPage1Component },
  { path: 'single-property-page-2', component: SinglePropertyPage2Component },
  { path: 'single-property-page-3', component: SinglePropertyPage3Component },
  { path: 'submit-property', component: SubmitPropertyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
