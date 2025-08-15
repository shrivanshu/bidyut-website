"use client"
import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import { PlayIcon, PauseIcon, Volume2Icon, VolumeXIcon } from "lucide-react"

export default function VideoSwitcher() {
  const [activeTab, setActiveTab] = useState("what-we-do")
  const [showControls, setShowControls] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const videoSources: { [key: string]: string } = {
    "what-we-do": "/robo-main.mp4", 
    "who-we-are": "robott.mp4",
    "where-we-are": "/robo-dance5.mp4",
  }
  const currentVideoSrc = videoSources[activeTab]

useEffect(() => {
  if (videoRef.current) {
    videoRef.current.load()
    videoRef.current.muted = true
    setIsMuted(true)
    videoRef.current
      .play()
      .then(() => {
        setIsPlaying(true)
      })
      .catch((error) => {
        console.log("Autoplay prevented or interrupted:", error.name, error.message)
        setIsPlaying(false)
      })
  }
}, [activeTab])

  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }, [])

  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }, [])

  const togglePlayPause = useCallback(() => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current
          .play()
          .then(() => {
            setIsPlaying(true)
          })
          .catch((error) => {
            console.log("Play prevented or interrupted:", error.name, error.message)
            setIsPlaying(false)
          })
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }, [])

  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const newTime = Number.parseFloat(e.target.value)
      videoRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }, [])

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
      if (!isMuted && videoRef.current.volume === 0) {
        videoRef.current.volume = volume > 0 ? volume : 0.5
        setVolume(videoRef.current.volume)
      }
    }
  }, [isMuted, volume])

  const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const newVolume = Number.parseFloat(e.target.value)
      videoRef.current.volume = newVolume
      setVolume(newVolume)
      setIsMuted(newVolume === 0)
    }
  }, [])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="relative flex items-center justify-center min-h-[600px] w-full overflow-hidden bg-white dark:bg-gray-900 py-12 md:py-24 lg:py-32 transition-colors duration-300">
      <div className="absolute right-0 bottom-[-77px] h-1/2 w-full -translate-y-1/2 bg-[#73946B] z-0" />

      {/* Video Section */}
      <div
        className="relative z-10 w-full max-w-[1000px] rounded-xl bg-gray-200 dark:bg-gray-800 shadow-lg overflow-hidden aspect-video"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <video
          key={currentVideoSrc}
          ref={videoRef}
          width="100%"
          height="100%"
          preload="none"
          loop
          muted={isMuted}
          playsInline
          aria-label="Video player"
          className="w-full h-full object-contain"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onVolumeChange={() => {
            if (videoRef.current) {
              setVolume(videoRef.current.volume)
              setIsMuted(videoRef.current.muted || videoRef.current.volume === 0)
            }
          }}
        >
          <source src={currentVideoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Custom Controls Overlay */}
        {showControls && (
          <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-30 transition-opacity duration-300 p-4">
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-2 bg-gray-400 rounded-lg appearance-none cursor-pointer accent-[#73946B]"
              aria-label="Video progress"
            />
            <div className="flex items-center justify-between mt-2 text-white">
              <button
                onClick={togglePlayPause}
                className="p-2 rounded-full bg-white bg-opacity-80 text-gray-900 hover:bg-opacity-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <PauseIcon size={24} /> : <PlayIcon size={24} />}
              </button>

              <div className="text-sm font-mono">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-full bg-white bg-opacity-80 text-gray-900 hover:bg-opacity-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted || volume === 0 ? <VolumeXIcon size={24} /> : <Volume2Icon size={24} />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-24 h-2 bg-gray-400 rounded-lg appearance-none cursor-pointer accent-[#73946B]"
                  aria-label="Volume control"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Clickable Text Elements */}
      <button
        onClick={() => setActiveTab("what-we-do")}
        className={`absolute left-[20%] top-[15%] sm:translate-x-[-100%] sm:translate-y-[-70%] rounded-xl px-4 sm:px-8 py-2 sm:py-10 font-semibold shadow-md transition-all duration-300 whitespace-nowrap z-20 text-lg sm:text-3xl
        ${activeTab === "what-we-do" ? "bg-[#73946B] text-white" : "bg-[#73946B] text-white hover:bg-green-600"}
        md:left-[20%] md:top-[20%] lg:left-[25%] lg:top-[20%]`}
      >
        What we do ?
      </button>
      <button
        onClick={() => setActiveTab("who-we-are")}
        className={`absolute left-[15%] bottom-[15%] translate-x-[-70%] translate-y-[-50%] rounded-xl px-4 sm:px-8 py-2 sm:py-10 text-lg sm:text-3xl font-semibold shadow-md transition-all duration-300 whitespace-nowrap z-20
        ${activeTab === "who-we-are" ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white" : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"}
        md:left-[20%] md:bottom-[20%] lg:left-[25%] lg:bottom-[20%]`}
      >
        Who we are?
      </button>
      <button
        onClick={() => setActiveTab("where-we-are")}
        className={`absolute right-[15%] top-1/2 -translate-y-1/2 translate-x-[100%] rounded-xl px-4 sm:px-8 py-2 sm:py-10 text-lg sm:text-3xl font-semibold shadow-md transition-all duration-300 whitespace-nowrap z-20
        ${activeTab === "where-we-are" ? "bg-green-600 text-white" : "bg-[#73946B] text-white hover:bg-green-600"}
        md:right-[20%] lg:right-[25%]`}
      >
        Where we are?
      </button>
    </div>
  )
}
