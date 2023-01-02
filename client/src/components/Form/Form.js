import React, {useState} from 'react';

import {Button, Paper, TextField, Typography, Box, FormGroup} from '@mui/material';
import FileBase64 from 'react-file-base64';
import styles from './styles';

import { createPost } from '../../actions/posts';
import { useDispatch } from 'react-redux';

export const Form = () => {
    const dispatch = useDispatch();

    // post data to input in the form
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(createPost(postData))

        clear();
    }


    const clear = () => {
        //clear all field in the form
        setPostData({
            creator: '', title: '', message: '', tags: '', selectedFile: ''
        });
    }

    return (
        <Paper sx={styles.paper}>
            <form autoComplete='off' noValidate onSubmit={handleSubmit}>
            <FormGroup sx={styles.form}>
            <Typography variant='h6'>Creating a memory</Typography>
            <TextField label="creator" name="creator" variant='outlined' fullWidth value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.value})}></TextField>
            <TextField label="title"name="title" variant='outlined' fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})}></TextField>
            <TextField label="message"name="message" variant='outlined' fullWidth value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})}></TextField>
            <TextField label="tags" name="tags" variant='outlined' fullWidth value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})}></TextField>
            <Box sx={styles.fileInput} >
                <FileBase64 
                    type='file' 
                    mutiple={false} 
                    onDone={({ base64 }) => setPostData({...postData, selectedFile : base64})}
                > 
                </FileBase64>
            </Box>
            <Button color='primary' size='large' sx={styles.buttonSubmit} variant="contained"  type='submit' fullWidth>Submit</Button>
            <Button variant="contained" color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
            </FormGroup>
            </form>
        </Paper>
    )
}