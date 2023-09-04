import {NgModule} from "@angular/core";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";

let materialModules: any[] = [MatFormFieldModule, MatInputModule, MatButtonModule];
@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule {}
