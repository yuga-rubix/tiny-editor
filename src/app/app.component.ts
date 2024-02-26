import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InteractiveEditorComponent } from "./interactive-editor/interactive-editor.component";
import { CustomRichTextEditorComponent } from './custom-rich-text-editor/custom-rich-text-editor.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, InteractiveEditorComponent,CustomRichTextEditorComponent]
})
export class AppComponent  {
  title = 'custom-editor';
  
 



}
