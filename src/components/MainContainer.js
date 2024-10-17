import React, { useEffect } from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useDispatch } from 'react-redux'
import { openMenu } from '../utils/appSlice'
import { Suspense } from 'react'

const MainContainer = () => {
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(openMenu());
  },[])
  return (
    <div><ButtonList/>
    <Suspense fallback={<div>Loading...</div>}><VideoContainer/></Suspense>
    </div>
  )
}

export default MainContainer;