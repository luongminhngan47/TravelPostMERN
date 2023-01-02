import React from "react";

import {  useSelector } from "react-redux";
import { CircularProgress, Grid } from "@mui/material";

import { Post } from "./Post/Post";
import styles from "./styles";

export const Posts = () => {
    const posts = useSelector(state => state.posts);
    return(
        !posts.length ? <CircularProgress /> :
        <Grid sx={styles.mainContainer} container alignItems="stretch" spacing={3}>
            {posts.map((post) => (
                <Grid key={post._id} item xs={12} sm={6} md={6}>
                    <Post post={post}></Post>
                </Grid>
            ))}
        </Grid>
    )
}