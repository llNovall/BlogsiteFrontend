import {NgModule} from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
    imports: [
      
      MatFormFieldModule,
      MatInputModule
    ],
    exports: [

      MatProgressSpinnerModule,
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      MatCardModule,
      MatDividerModule,
      MatFormFieldModule,
      MatInputModule,
      MatCheckboxModule
    ]
  })
  export class MaterialModule {}