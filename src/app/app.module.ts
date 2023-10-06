import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

//#region layout
import { HeaderComponent } from './layout/header/header.component';
import { BlogCardComponent } from './layout/blog-card/blog-card.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BlogContentComponent } from './layout/blog-content/blog-content.component';
import { CommentSectionComponent } from './layout/comments-layout/comment-section/comment-section.component';
import { CommentItemComponent } from './layout/comments-layout/comment-item/comment-item.component';
import { ProjectItemComponent } from './layout/project-item/project-item.component';
//#endregion

//#region forms template
import { CommentFormComponent } from './forms/comment-form/comment-form.component';
import { ContactFormComponent } from './forms/contact-form/contact-form.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { AddEditTagFormComponent } from './forms/add-edit-tag-form/add-edit-tag-form.component';
import { AddEditProjectFormComponent } from './forms/add-edit-project-form/add-edit-project-form.component';
import { AddEditBlogFormComponent } from './forms/add-edit-blog-form/add-edit-blog-form.component';
//#endregion

//#region pages
import { HomepageComponent } from './pages/frontend/homepage/homepage.component';
import { SearchPageComponent } from './pages/frontend/search-page/search-page.component';
import { BlogPageComponent } from './pages/frontend/blog-page/blog-page.component';
import { ContactPageComponent } from './pages/frontend/contact-page/contact-page.component';
import { ProjectsPageComponent } from './pages/frontend/projects-page/projects-page.component';
import { LoginPageComponent } from './pages/backend/login-page/login-page.component';
import { DashboardPageComponent } from './pages/backend/dashboard-page/dashboard-page.component';
import { ManageTagsPageComponent } from './pages/backend/tags/manage-tags-page/manage-tags-page.component';
import { AddTagPageComponent } from './pages/backend/tags/add-tag-page/add-tag-page.component';
import { EditTagPageComponent } from './pages/backend/tags/edit-tag-page/edit-tag-page.component';
import { ManageBlogsPageComponent } from './pages/backend/blog/manage-blogs-page/manage-blogs-page.component';
import { AddBlogPageComponent } from './pages/backend/blog/add-blog-page/add-blog-page.component';
import { EditBlogPageComponent } from './pages/backend/blog/edit-blog-page/edit-blog-page.component';
import { ManageProjectsPageComponent } from './pages/backend/projects/manage-projects-page/manage-projects-page.component';
import { AddProjectsPageComponent } from './pages/backend/projects/add-projects-page/add-projects-page.component';
import { EditProjectsPageComponent } from './pages/backend/projects/edit-projects-page/edit-projects-page.component';
//#endregion

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { environment } from 'src/environment';


export function tokenGetter() { 
  return localStorage.getItem("token"); 
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    BlogCardComponent,
    FooterComponent,
    SearchPageComponent,
    BlogPageComponent,
    BlogContentComponent,
    CommentFormComponent,
    CommentSectionComponent,
    CommentItemComponent,
    ContactPageComponent,
    ContactFormComponent,
    ProjectsPageComponent,
    ProjectItemComponent,
    LoginPageComponent,
    LoginFormComponent,
    DashboardPageComponent,
    ManageTagsPageComponent,
    AddTagPageComponent,
    EditTagPageComponent,
    AddEditTagFormComponent,
    ManageBlogsPageComponent,
    AddBlogPageComponent,
    EditBlogPageComponent,
    ManageProjectsPageComponent,
    AddProjectsPageComponent,
    EditProjectsPageComponent,
    AddEditProjectFormComponent,
    AddEditBlogFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    JwtModule.forRoot(
      {
        config: {
          tokenGetter : tokenGetter,
          allowedDomains : ["localhost:7256"],
          disallowedRoutes : []
        }
      }
    ),
    HttpClientModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [{provide: 'environment', useValue: environment}],
  bootstrap: [AppComponent]
})
export class AppModule { }
