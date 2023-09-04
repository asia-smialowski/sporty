import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { COMPONENTS } from './components';
import { NavBarComponent } from './components/navigation/nav-bar/nav-bar.component';
import { NavBarButtonsComponent } from './components/navigation/nav-bar-buttons/nav-bar-buttons.component';
import { CodeSnippetComponent } from './components/code-snippet/code-snippet.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    ...COMPONENTS,
    NavBarComponent,
    NavBarButtonsComponent,
    CodeSnippetComponent,
    PageFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    ...COMPONENTS,
    NavBarComponent,
    NavBarButtonsComponent,
    CodeSnippetComponent,
    PageFooterComponent
  ],
})
export class SharedModule {}
