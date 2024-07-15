

const ShortsVideo = ({info}) => {
    if(!info){
        return;
    }
    const {videoId}=info;
    
  return (
    <div className="flex items-center justify-center h-screen">
        <div className="flex items-center justify-center border border-black h-[700px] w-[510px] mx-72 ">
        <iframe width="500" height="700" src={"https://www.youtube.com/embed/"+videoId+"?si=ZpPes8D8idSfJ1Vj"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        
        </div>

        
    </div>
  )
}

export default ShortsVideo