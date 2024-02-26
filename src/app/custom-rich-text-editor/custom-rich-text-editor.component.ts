import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-rich-text-editor',
  standalone: true,
  imports: [],
  templateUrl: './custom-rich-text-editor.component.html',
  styleUrl: './custom-rich-text-editor.component.css'
})
export class CustomRichTextEditorComponent {
  editorContent = '';

  toggleBold() {
    document.execCommand('bold', false, "");
  }

  toggleItalic() {
    document.execCommand('italic', false, "");
  }

  toggleUnderline() {
    document.execCommand('underline', false, "");
  }

  changeTextColor() {
    const color = prompt('Enter text color:');
    if (color) {
      document.execCommand('foreColor', false, color);
    }
  }

  uploadImage(event: any) {
    const file = event?.target?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const img = document.createElement('img');
        img.src = e.target.result;
        document.execCommand('insertHTML', false, img.outerHTML);
      };
      reader.readAsDataURL(file);
    }
  }

  updateContent() {
    this.editorContent = document.querySelector('.editor')?.innerHTML || '';
  }
}
