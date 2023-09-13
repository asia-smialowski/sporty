import { NAVIGATION_COMPONENTS } from "./navigation";
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { CodeSnippetComponent } from './code-snippet/code-snippet.component';


export const COMPONENTS = [
  ...NAVIGATION_COMPONENTS,
  PageFooterComponent,
  PageLayoutComponent,
  CodeSnippetComponent
];
