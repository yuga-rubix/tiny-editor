import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-editor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.css'
})
export class TextEditorComponent {
  editorContent: string = '';

  addParagraph() {
    this.editorContent += '<p>New Paragraph</p>';
  }

  addImage() {
    // You can customize this method based on how you want to handle image insertion.
    const imageUrl = prompt('Enter image URL:');
    if (imageUrl) {
      this.editorContent += `<img src="${imageUrl}" alt="Image" />`;
    }
  }

  addBulletPoint() {
    this.editorContent += '<ul><li>Bullet Point</li></ul>';
  }
  updateContent() {
    this.editorContent = document.querySelector('.editor-content')?.innerHTML || '';
  }
}
