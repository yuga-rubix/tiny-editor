import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-inline-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inline-editor.component.html',
  styleUrl: './inline-editor.component.css'
})
export class InlineEditorComponent {
  public selectedText: string|undefined = "";
  public contextMenuPosition = { x: '0px', y: '0px' };
  colorOptions: string[] = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
  headerContent: string="";
  @ViewChild('headerContent', { static: false }) headerContentElement!: ElementRef;
  @ViewChild('targetDivHeader', { static: false }) targetDivElement!: ElementRef;
  @ViewChild('bodyContent', { static: false }) bodyContentElement!: ElementRef;
  @ViewChild('targetDivBody', { static: false }) targetDivBodyElement!: ElementRef;
  constructor(private renderer: Renderer2,private sanitizer: DomSanitizer) {}
  ngAfterViewInit() {
    // Accessing innerHTML
    let headerContents = this.headerContentElement.nativeElement.innerHTML;
    console.log(headerContents)

    // Accessing styles (example: setting background color)
    //this.renderer.setStyle(this.headerContentElement.nativeElement, 'background-color', 'red');
  }
  updateContent() {
    console.log("update content")
    let headerContents = this.headerContentElement.nativeElement.innerHTML;
    this.renderer.setProperty(this.targetDivElement.nativeElement, 'innerHTML', headerContents);
    let bodyContents = this.bodyContentElement.nativeElement.innerHTML;
    console.log(bodyContents);
    this.renderer.setProperty(this.targetDivBodyElement.nativeElement, 'innerHTML', bodyContents);
  }
  showContextMenu(event: MouseEvent): void {
    event.preventDefault();
    console.log('Right-click event detected:', event);
    // Get selected text
    this.selectedText = window.getSelection()?.toString();

    if (this.selectedText) {
      this.contextMenuPosition = { x: event.clientX + 'px', y: event.clientY + 'px' };
      // Show a floating color tag or implement a context menu with color options
      // You can use a library like Angular CDK or a custom component for the floating tag
      // For simplicity, let's log the selected text to the console for now
      console.log(this.selectedText);
      console.log(this.contextMenuPosition)
    }
  }
  handleLeftClick(event: MouseEvent): void {
    console.log('Left click detected!',event);
    const selectedText = window.getSelection()?.toString();
    console.log(selectedText)
  }
  getContextMenuPosition(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`left: ${this.contextMenuPosition.x}; top: ${this.contextMenuPosition.y}`);
  }
  getContextMenuColor(color:string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`background-color: ${color};`);
  }

  changeTextColor(color: string): void {
    if (this.selectedText) {
      // Get the content of the editable div
      const content = this.bodyContentElement.nativeElement.innerHTML;
  
      // Replace the selected text with the colored text
      const coloredText = `<span style="color: ${color}">${this.selectedText}</span>`;
      const newContent = content.replace(this.selectedText, coloredText);
  
      // Set the updated content back to the editable div
      this.bodyContentElement.nativeElement.innerHTML = newContent;
    }
  
    this.selectedText = undefined;
  }
}
