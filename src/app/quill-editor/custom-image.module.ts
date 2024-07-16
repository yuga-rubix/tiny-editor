import Quill from 'quill';

const ImageBlot:any = Quill.import('formats/image');
class CustomImageBlot extends ImageBlot {
  static create(value:any) {
    const node = super.create(value);
    node.setAttribute('draggable', 'true');
    node.addEventListener('dragstart', (event:any) => {
      event.dataTransfer.setData('text/plain', null); // Required for Firefox
      node.classList.add('dragging');
    });
    node.addEventListener('dragend', () => {
      node.classList.remove('dragging');
    });
    return node;
  }
}
Quill.register(CustomImageBlot, true);
