import React from 'react'

const Videosidebar2 = ({info}) => {
    const {playlistId}=info;
  return (
    <div>
        <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+playlistId+"?si=-lTTXcgaYoupTO98"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default Videosidebar2