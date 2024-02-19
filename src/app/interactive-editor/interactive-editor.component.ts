import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
@Component({
  selector: 'app-interactive-editor',
  standalone: true,
  imports: [EditorModule,FormsModule],
  templateUrl: './interactive-editor.component.html',
  styleUrl: './interactive-editor.component.css'
})
export class InteractiveEditorComponent implements OnInit {
  constructor(){
  }

  headerContent = `<div style="color: #1976D2;font-size: 2.4em;position: relative;
  text-align: center;
  margin: 10px;"contenteditable="true"  spellcheck="false"><h2>
  The latest and greatest from TinyMCE
  </h2></div>`; // ngModel binding for header content
  bodyContent = `<div style="position: relative; width: auto; box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2); text-align: left; color: #626262; font-size: 14px; padding: 20px;">
  <div contenteditable="true" style="position: relative;" spellcheck="false">
      <p><img src="https://tiny.cloud/images/medium-pic.jpg" style="display: block; margin-left: auto; margin-right: auto; width: 100%;"></p>
      <br/>
      <h2 style="color: #1976D2; font-size: 2em;">The world’s first rich text editor in the cloud</h2>
  
      <p>
          Have you heard about Tiny Cloud? 
          It’s the first step in our journey to help you deliver great content creation experiences, no matter your level of expertise. 
          50,000 developers already agree. 
          They get free access to our global CDN, image proxy services and auto updates to the TinyMCE editor. 
          They’re also ready for some exciting updates coming soon.
      </p>
    
      <p>
          One of these enhancements is <strong>Tiny Drive</strong>: imagine file management for TinyMCE, in the cloud, made super easy. 
          Learn more at <a href="https://www.tiny.cloud/tinydrive/" style="text-decoration: underline;">tiny.cloud/tinydrive</a>, where you’ll find a working demo and an opportunity to provide feedback to the product team.
      </p>
    
      <h3 style="font-size: 1.5em; color: #403f42;">An editor for every project</h3>
    
      <p>
          Here are some of our customer’s most common use cases for TinyMCE:    
      </p>
      <ul style="padding-left: 20px; list-style: disc;">
          <li>Content Management Systems (<em>e.g. WordPress, Umbraco</em>)</li>
          <li>Learning Management Systems (<em>e.g. Blackboard</em>)</li>
          <li>Customer Relationship Management and marketing automation (<em>e.g. Marketo</em>)</li>
          <li>Email marketing (<em>e.g. Constant Contact</em>)</li>
          <li>Content creation in SaaS systems (<em>e.g. Eventbrite, Evernote, GoFundMe, Zendesk</em>)</li>
      </ul>
  
      <p>
          And those use cases are just the start. 
          TinyMCE is incredibly flexible, and with hundreds of APIs there’s likely a solution for your editor project. 
          If you haven’t experienced Tiny Cloud, get started today. 
          You’ll even get a free trial of our premium plugins – no credit card required!
      </p>
  </div>
</div>`; // ngModel binding for body content
  ngOnInit(): void {
  }
  handleEventForBody(){
    console.log(this.bodyContent)
  }
  handleEventForheader(){
    console.log(this.headerContent)
  }
}
