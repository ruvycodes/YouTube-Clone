import React from 'react'
import Comment from './Comment'

//dummy data for nested comments
const commentsData = [
    {
        name : "User",
        message: "Wow its amazing",
        replies: [  {
            name : "User",
            message: "Wow its amazing",
            replies: [  {
                name : "User",
                message: "Wow its amazing",
                replies: [  {
                    name : "User",
                    message: "Wow its amazing",
                    replies: [  {
                        name : "User",
                        message: "Wow its amazing",
                        replies: []
                    }]
                }]
            }]
        }]
    },

    {
        name : "User 2",
        message: "Noooooo wayy its amazing",
        replies: []
    },

    {
        name : "User 2",
        message: "Wow its amazing",
        replies: [  {
            name : "User 2",
            message: "amazing",
            replies: [  {
                name : "User 2",
                message: "Wow its amazing",
                replies: []
            }]
        }]
    },
    {
        name : "User 3",
        message: "Wow its Blah",
        replies: []
    },
    {
        name : "Not a user",
        message: "Interesting !",
        replies: [  {
            name : "User",
            message: "Who are you?",
            replies: [  {
                name : "User 2",
                message: "He not a user.. he a maker lmao",
                replies: [  {
                    name : "User 3",
                    message: "User 2 thats so cringe bruddaa",
                    replies: []
                }]
            }]
        }]
    }
]

const NestedComments = ({nestedData})=> {
    return (
        <>
        {nestedData.map((comment , index)=>(
        <div key={index} className='my-2'><Comment data={comment}/>
        <div className='border-black ml-4 my-1 border-l-2'>
            {/*recursive call to component to show replies*/}
            <NestedComments nestedData={comment.replies}/>
        </div>
        </div>
        ))}
        </>
        )
}

const CommentsContainer = () => {
 return <NestedComments nestedData={commentsData}/>
}

export default CommentsContainer