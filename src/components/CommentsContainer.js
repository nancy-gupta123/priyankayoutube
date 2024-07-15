import React from "react";

const commentData = [
  {
    name: "Priyanka Gupta",
    text: "This Video is Cool and amazing",
    replies: [],
  },
  {
    name: "Priyanka Gupta",
    text: "This Video is Cool and amazing",
    replies: [
      {
        name: "Priyanka Gupta",
        text: "This Video is Cool and amazing",
        replies: [
          {
            name: "Priyanka Gupta",
            text: "This Video is Cool and amazing",
            replies: [
              {
                name: "Priyanka Gupta",
                text: "This Video is Cool and amazing",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Priyanka Gupta",
    text: "This Video is Cool and amazing",
    replies: [],
  },
  {
    name: "Priyanka Gupta",
    text: "This Video is Cool and amazing",
    replies: [],
  },
  {
    name: "Priyanka Gupta",
    text: "This Video is Cool and amazing",
    replies: [],
  },
  {
    name: "Priyanka Gupta",
    text: "This Video is Cool and amazing",
    replies: [],
  },
];

const Comments=({data})=>{
    const {name,text,replies}=data;
    return(
        <div className="flex p-2 m-2 bg-gray-200 rounded-md shadow-sm">
            <img className="w-10 h-10"alt="user" src="https://th.bing.com/th/id/R.c3631c652abe1185b1874da24af0b7c7?rik=XBP%2fc%2fsPy7r3HQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-circled-user-icon-2240.png&ehk=z4ciEVsNoCZtWiFvQQ0k4C3KTQ6wt%2biSysxPKZHGrCc%3d&risl=&pid=ImgRaw&r=0"/>
            <div className="px-2 mx-2">
                <h3 className="font-bold">{name}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
    
}

const CommentList=({comments})=>{
    return comments.map((comment,index)=> (
        <div key={index}>
            <Comments  data={comment}/>
<div className="pl-5 ml-5 border border-l-black"> 
<CommentList  comments={comment.replies}/>
</div>
</div>)
    )
};

const CommentsContainer = () => {
  return (
    <div className="p-2 m-5">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentData}/>
    </div>
  );
};

export default CommentsContainer;
