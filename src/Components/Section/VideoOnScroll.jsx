import React, { useRef, useEffect, useState } from 'react'

const VideoOnScroll = ({ videoSrc }) => {
  const videoRef = useRef(null)
  const containerRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current
      const video = videoRef.current

      if (!container || !video) return

      const containerTop = container.getBoundingClientRect().top
      const containerBottom = container.getBoundingClientRect().bottom
      const videoTop = video.getBoundingClientRect().top
      const videoBottom = video.getBoundingClientRect().bottom

      if (containerTop < window.innerHeight && containerBottom > 0) {
        if (videoTop < window.innerHeight && videoBottom > 0) {
          if (!isPlaying) {
            setIsPlaying(true)
            video.play()
          }
        } else {
          if (isPlaying) {
            setIsPlaying(false)
            video.pause()
          }
        }
      } else {
        if (isPlaying) {
          setIsPlaying(false)
          video.pause()
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isPlaying])

  return (
    <div
      ref={containerRef}
      style={{ position: 'fixed', top: 0, left: 0, zIndex: 1 }}
    >
      <video ref={videoRef} src={videoSrc} controls />
    </div>
  )
}

export default VideoOnScroll
