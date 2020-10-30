import React from 'react';
import './style.css';
import { Editor } from '@tinymce/tinymce-react';

class DocumentEditor extends React.Component {
  handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  }

  render() {
    return (
      <div className="editor">
      <Editor 
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help'
        }}
        onEditorChange={this.handleEditorChange}
      />
      <div className="Attachment">
        <h4>Attachment ? </h4>
        <section className="uplaod-file">
          <img src="/file-icon.jpg" width="50" height="50" className="img" alt="icon"/>
          <h2>Click Here to upload File</h2>
        </section>

      </div>
      </div>
    );
  }
}

export default DocumentEditor;
