import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
@Component({
  selector: 'app-quill-editor',
  standalone: true,
  imports: [QuillModule,FormsModule],
  templateUrl: './quill-editor.component.html',
  styleUrl: './quill-editor.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class QuillEditorComponent {
  editorContent = '';

  ngOnInit() {
    const quillEditor = document.querySelector('.ql-editor') as HTMLElement;

    quillEditor.addEventListener('dragover', (event: DragEvent) => {
      event.preventDefault();
    });

    quillEditor.addEventListener('drop', (event: DragEvent) => {
      event.preventDefault();
      const draggingElement = quillEditor.querySelector('.dragging') as HTMLElement;
      if (draggingElement) {
        const range = document.caretRangeFromPoint(event.clientX, event.clientY);
        if (range) {
          const { startContainer, startOffset } = range;
          const textNode = document.createTextNode(' ');
          startContainer.insertBefore(textNode, startContainer.childNodes[startOffset]);
          startContainer.insertBefore(draggingElement, textNode);
        }
      }
    });
  }
}
