import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/frontend/homepage/homepage.component';
import { SearchPageComponent } from './pages/frontend/search-page/search-page.component';
import { BlogPageComponent } from './pages/frontend/blog-page/blog-page.component';
import { ContactPageComponent } from './pages/frontend/contact-page/contact-page.component';
import { ProjectsPageComponent } from './pages/frontend/projects-page/projects-page.component';
import { LoginPageComponent } from './pages/backend/login-page/login-page.component';
import { DashboardPageComponent } from './pages/backend/dashboard-page/dashboard-page.component';
import { ManageTagsPageComponent } from './pages/backend/tags/manage-tags-page/manage-tags-page.component';
import { EditTagPageComponent } from './pages/backend/tags/edit-tag-page/edit-tag-page.component';
import { AddTagPageComponent } from './pages/backend/tags/add-tag-page/add-tag-page.component';
import { ManageBlogsPageComponent } from './pages/backend/blog/manage-blogs-page/manage-blogs-page.component';
import { AddBlogPageComponent } from './pages/backend/blog/add-blog-page/add-blog-page.component';
import { EditBlogPageComponent } from './pages/backend/blog/edit-blog-page/edit-blog-page.component';
import { ManageProjectsPageComponent } from './pages/backend/projects/manage-projects-page/manage-projects-page.component';
import { AddProjectsPageComponent } from './pages/backend/projects/add-projects-page/add-projects-page.component';
import { EditProjectsPageComponent } from './pages/backend/projects/edit-projects-page/edit-projects-page.component';
import { canAccessRoute } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  {path:'page/:id', component: BlogPageComponent},
  {path:'search', component: SearchPageComponent},
  {path:'search/:tagId', component: SearchPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'projects', component: ProjectsPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'dashboard', component: DashboardPageComponent, canActivate : [canAccessRoute], data: {'role': 'admin'}},
  {path: 'dashboard/tags', component: ManageTagsPageComponent , canActivate : [canAccessRoute], data: {'role': 'admin'}},
  {path: 'dashboard/tags/add', component: AddTagPageComponent, canActivate : [canAccessRoute], data: {'role': 'admin'}} ,
  {path: 'dashboard/tags/edit/:id', component: EditTagPageComponent, canActivate : [canAccessRoute], data: {'role': 'admin'}},
  {path: 'dashboard/blogs', component: ManageBlogsPageComponent, canActivate : [canAccessRoute], data: {'role': 'admin'}},
  {path: 'dashboard/blogs/add', component: AddBlogPageComponent, canActivate : [canAccessRoute], data: {'role': 'admin'}},
  {path: 'dashboard/blogs/edit/:id', component: EditBlogPageComponent, canActivate : [canAccessRoute], data: {'role': 'admin'}},
  {path: 'dashboard/projects', component: ManageProjectsPageComponent, canActivate : [canAccessRoute], data: {'role': 'admin'}},
  {path: 'dashboard/projects/add', component: AddProjectsPageComponent, canActivate : [canAccessRoute], data: {'role': 'admin'}},
  {path: 'dashboard/projects/edit/:id', component: EditProjectsPageComponent, canActivate : [canAccessRoute], data: {'role': 'admin'}},
  {path: '**', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
