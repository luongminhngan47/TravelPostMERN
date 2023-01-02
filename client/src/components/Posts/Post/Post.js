import React from "react";

import moment from 'moment';

import {Card, CardMedia, CardContent, Button, Typography, Box } from '@mui/material';
import styles from './styles';

export const Post = ({ post }) => {
    return (
        <Card sx={styles.card}>
            <CardMedia sx={styles.media} image={post.selectedFile} title={post.title}/>
        <Box sx={styles.overlay}>
            <Typography variant="h6">{post.creator}</Typography>
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </Box>
        <Box sx={styles.overlay2}>
            <Button 
                style={{ color: 'white' }} 
                size="small" 
                onClick={() => {}}
            >
                
            </Button>
        </Box>
        <Box sx={styles.details}>
            <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
        </Box>
        <Typography sx={styles.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
        </CardContent>
        </Card>
    )
}