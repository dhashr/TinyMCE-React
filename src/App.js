
import './App.css';
import { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

function App() {
  const [content, SetContent] = useState()
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      SetContent(editorRef.current.getContent());
    }
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code>TinyMCE Self Hosted using React</code>
        </p>
        <>
          <Editor
            onChange={log}
            tinymceScriptSrc='/tinymce/tinymce.min.js'
            licenseKey='gpl'
            onInit={(_evt, editor) => editorRef.current = editor}
            initialValue='<p>This is the initial content of the editor.</p>'
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />
        </>
      </header>
    </div>
  );
}

export default App;
