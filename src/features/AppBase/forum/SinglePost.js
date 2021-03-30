import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AddComment from './AddComment'
import CommentItem from './CommentItem'
import { addLike, getOnePost, selectForum, selectPost } from './ForumSlice'
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import StarsIcon from '@material-ui/icons/Stars';
import { useParams } from "react-router";
import ReactHtmlParser from 'react-html-parser'
import './SingePost.css'
import moment from 'moment'
import {  Box, Card , CardContent,   IconButton, makeStyles, Typography } from '@material-ui/core'
import { Fragment } from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useState } from 'react'
import { Rating } from '@material-ui/lab'

function SinglePost({ Posts}) {
    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 2500,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    }));
    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };
    const P = useSelector(selectForum)
    const post = useSelector(selectPost)
    const dispatch = useDispatch()
    let { id } = useParams(); 
    const [rating, setValue] = useState(1);

    const onsubmit = (e) => {
            e.preventDefault(); 

        addLike(P._id, { rating })

    }
    const [hover, setHover] = useState(-1);

    useEffect(() => { 
       
        dispatch(getOnePost(id)) 
       
    }, [ dispatch , id  ] ) 
    console.log(post)

    return (
<div> 
        <div className="post" >
            
             <Typography style= {{padding:'20px'}} variant="h4" color="textprimary" component="h4">
                    {post.title}
                </Typography>
               
            <CardContent>
                 <Fragment> <h3 style={{marginLeft:'-20px'}} >
                 <Typography variant="h4" color="textprimary" component="h4">
                    {ReactHtmlParser(post.text)}
                </Typography>
                </h3>
                </Fragment>
            </CardContent>  
                         <div className='items'> 
                         <div className='tags'> 
                 <p>  asked : {moment(post.date).format('MMMM Do YYYY')}  </p>  
                  <p className=''>  Owner : Med habib Dridi</p>
                  <p> Viewed : 20 </p>
                  <p> 30 likes</p>
                  </div>
                  <div> 
                      
                  <Link  className='decoarion' to='/app/forum' >

                <IconButton  aria-label="view" >
                <DynamicFeedIcon  style={{color:'blue'}}  />  all Posts
                </IconButton> 
                </Link>
                </div>
                </div>
                <Fragment> <h3 >
                    <Rating
                        name="hover-feedback"
                        value={rating}
                        precision={0.5}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                            setHover(newHover);
                        }}

                    />

                    {rating !== null && <Box ml={2}>{labels[hover !== -1 ? hover : rating]}</Box>}
                </h3>
                        <button onClick={e => onsubmit(e)}> </button>
                    <IconButton aria-label="view" onClick={e => onsubmit(e)}>
                        <DynamicFeedIcon /> send feedback
                    </IconButton>
                </Fragment>

                 <div className="commentsection"></div>
              
           
        </div>

        {post?.comments?.map(comment => (
                <CommentItem key={comment._id} comment={comment} postId={post._id} />
            ))}
        <AddComment  postId={post._id}/>

        </div>
    )
}

export default SinglePost
