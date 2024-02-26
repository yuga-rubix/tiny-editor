import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inline-editor',
  standalone: true,
  imports: [],
  templateUrl: './inline-editor.component.html',
  styleUrl: './inline-editor.component.css'
})
export class InlineEditorComponent {
  headerContent: string="";
  @ViewChild('headerContent', { static: false }) headerContentElement!: ElementRef;
  @ViewChild('targetDivHeader', { static: false }) targetDivElement!: ElementRef;
  @ViewChild('bodyContent', { static: false }) bodyContentElement!: ElementRef;
  @ViewChild('targetDivBody', { static: false }) targetDivBodyElement!: ElementRef;
  constructor(private renderer: Renderer2) {}
  ngAfterViewInit() {
    // Accessing innerHTML
    let headerContents = this.headerContentElement.nativeElement.innerHTML;
    console.log(headerContents)

    // Accessing styles (example: setting background color)
    //this.renderer.setStyle(this.headerContentElement.nativeElement, 'background-color', 'red');
  }
  updateContent() {
    let headerContents = this.headerContentElement.nativeElement.innerHTML;
    this.renderer.setProperty(this.targetDivElement.nativeElement, 'innerHTML', headerContents);
    let bodyContents = this.bodyContentElement.nativeElement.innerHTML;
    console.log(bodyContents);
    this.renderer.setProperty(this.targetDivBodyElement.nativeElement, 'innerHTML', bodyContents);
  }
}
