import React, { useState } from 'react';
import { TextField, Container, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: '100%',
      margin: '10px 0',
    },
    mt: {
      marginTop: '10px',
    },
    widthFull: {
      width: '100%',
    },
  },
}));

export default function Writeblog() {
  const classes = useStyles();
  const [blog, setBlog] = useState({});
  const [title, setTitle] = useState('');
  const [thumb, setThumb] = useState(null);

  const handelSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append('file', thumb[0]);
    data.append('title', title);
    data.append('blog', blog);
    data.append('thumb', thumb[0].name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    axios
      .post('/api/writeblog', data, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handelChange = (e) => {
    setThumb(e.target.files);
  };

  console.log(blog);

  return (
    <Container maxWidth="sm" style={{ marginTop: '10px', background: '#fff' }} className="artical-content">
      <Box component="div" m={1}>
        <h3>WRITE A NEW POST HERE</h3>
      </Box>
      <form action="/api/writeblog" className={classes.root} noValidate autoComplete="off" encType="multipart/form-data">
        <Box m={1}>
          <input type="file" name="file" onChange={(e) => handelChange(e)} />
        </Box>
        <Box xs={12}>
          <TextField id="standard-required" label="Title" value={title} name="title" onChange={(e) => setTitle(e.target.value)} variant="outlined" />
        </Box>
        {/* <div>
          <TextField id="standard-multiline-flexible" label="Your Blog Body" multiline rowsMax={4} value={blog} onChange={(e) => setBlog(e.target.value)} name="blog" />
        </div>  */}

        <Box id="myElement">
          {/* <CKEditor
            name="blogEditor"
            type="classic"
            editor={ClassicEditor}
            data={blog}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}

            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
              setBlog(data);
            }}
            // onBlur={ ( event, editor ) => {
            //     console.log( 'Blur.', editor );
            // } }
            // onFocus={ ( event, editor ) => {
            //     console.log( 'Focus.', editor );
            // } }
            setStyle={{
              'margin-top': '100px',
              'border': '5px solid red',
            }}
            onInit={editor => {
            // You can store the "editor" and use when it is needed.
            // console.log("Editor is ready to use!", editor);
            editor.editing.view.change(writer => {
              writer.setStyle(
                "border",
                "120px solid red",
                editor.editing.view.document.getRoot()
              );
            });
          }}
          /> */}
        </Box>
        <Box width="100%">
          <Button variant="contained" color="primary" type="submit" onClick={handelSubmit} style={{ width: '100%', margin: '10px 0' }}>
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
}
