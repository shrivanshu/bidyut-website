"use client"

import { motion } from "framer-motion"

export default function TrustedPartners() {
  return (
    <section className="min-h-screen flex items-center justify-center p-2 sm:p-8 bg-white dark:bg-black">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-center">
          {/* Left Section */}
          <div className="space-y-8 relative">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.3 }}>
              <h1 className="text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4">Trusted Partners</h1>
              <p className="text-xl lg:text-2xl text-gray-500 dark:text-gray-300 mb-8">list of companies</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
              className="backdrop-blur-sm bg-gray-100 dark:bg-gray-800 border border-white/20 rounded-2xl p-8 shadow-xl"
            >
              {/* Large placeholder bar */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-64 h-4 bg-gray-600 dark:bg-gray-200 rounded-sm mb-6"
              />

              {/* Three smaller frosted boxes */}
              <div className="grid grid-cols-3 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="backdrop-blur-sm bg-white dark:bg-gray-900 border border-white/30 rounded-xl p-4 shadow-lg text-center"
                >
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">30+</div>
                  <div className="text-sm text-gray-700 dark:text-gray-200 mt-1">Partners</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="backdrop-blur-sm bg-white dark:bg-gray-900 border border-white/30 rounded-xl p-4 shadow-lg text-center"
                >
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">50M+</div>
                  <div className="text-sm text-gray-700 dark:text-gray-200 mt-1">Users</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="backdrop-blur-sm bg-white dark:bg-gray-900 border border-white/30 rounded-xl p-4 shadow-lg text-center"
                >
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">99.9%</div>
                  <div className="text-sm text-gray-700 dark:text-gray-200 mt-1">Uptime</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Arrow - hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, pathLength: 0 }}
              whileInView={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute -right-8 top-1/2 -translate-y-1/2 lg:-right-16 hidden sm:block"
            >
              <svg width="150" height="100" viewBox="0 0 150 100" className="text-gray-900 dark:text-white">
                <path
                  d="M10 50 Q75 25 140 50"
                  stroke="currentColor"
                  strokeWidth="3.125"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                <defs>
                  <marker id="arrowhead" markerWidth="12.5" markerHeight="8.75" refX="11.25" refY="4.375" orient="auto">
                    <polygon points="0 0, 12.5 4.375, 0 8.75" fill="currentColor" />
                  </marker>
                </defs>
              </svg>
            </motion.div>
          </div>

          {/* Right Section - Globe */}
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{
                opacity: { duration: 0.8, delay: 0.6 },
                scale: { duration: 0.8, delay: 0.6 },
                rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative flex items-center justify-center"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 520 520"
                className="text-gray-300 dark:text-gray-700 w-[90vw] h-[90vw] sm:w-[520px] sm:h-[520px] md:w-[400px] md:h-[400px] lg:w-[520px] lg:h-[520px]"
                style={{ maxWidth: '100vw', maxHeight: '100vw' }}
              >
                {/* Outer circle */}
                <circle cx="260" cy="260" r="210" stroke="currentColor" strokeWidth="2" fill="none" />

                {/* Longitude lines */}
                <ellipse cx="260" cy="260" rx="105" ry="210" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <ellipse cx="260" cy="260" rx="55" ry="210" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <line x1="260" y1="50" x2="260" y2="470" stroke="currentColor" strokeWidth="1.5" />

                {/* Latitude lines */}
                <ellipse cx="260" cy="260" rx="210" ry="105" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <ellipse cx="260" cy="260" rx="210" ry="55" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <line x1="50" y1="260" x2="470" y2="260" stroke="currentColor" strokeWidth="1.5" />
              </svg>

              {/* Center logo rotates in opposite direction at same speed */}
              <motion.div
                initial={{ opacity: 1, rotate: 0 }}
                whileInView={{ opacity: 1, rotate: -360 }}
                transition={{
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute inset-0 m-auto w-[30vw] h-[30vw] sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 z-20"
                style={{ pointerEvents: 'none' }}
              >
                <img src="/public/bidyut_logo_green 1.svg" alt="Center Logo" className="w-full h-full object-contain" />
              </motion.div>

              {/* Logos - responsive size and spacing */}
              <motion.div className="absolute top-[8vw] left-1/2 -translate-x-1/2 w-[10vw] h-[10vw] sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10">
                {/* Google logo */}
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </motion.div>

              <motion.div className="absolute top-[28vw] right-[8vw] w-[10vw] h-[10vw] sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10">
                {/* Microsoft logo */}
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#F25022" d="M0 0h11.377v11.372H0z" />
                  <path fill="#00A4EF" d="M12.623 0H24v11.372H12.623z" />
                  <path fill="#7FBA00" d="M0 12.628h11.377V24H0z" />
                  <path fill="#FFB900" d="M12.623 12.628H24V24H12.623z" />
                </svg>
              </motion.div>

              <motion.div className="absolute right-[4vw] top-1/2 -translate-y-1/2 w-[10vw] h-[10vw] sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10">
                {/* Apple logo */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#000000">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </motion.div>

              <motion.div className="absolute bottom-[28vw] right-[8vw] w-[10vw] h-[10vw] sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10">
                {/* Amazon logo */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF9900">
                  <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595 2.779-1.062 5.12-2.574 7.024-4.534.062-.062.11-.062.14 0 .031.062 0 .125-.093.187-2.434 2.263-5.25 4.048-8.447 5.357-3.197 1.309-6.487 1.963-9.87 1.963-4.2 0-8.26-1.025-12.18-3.075-.124-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </motion.div>

              <motion.div className="absolute bottom-[8vw] left-1/2 -translate-x-1/2 w-[10vw] h-[10vw] sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10">
                {/* Netflix logo */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#E50914">
                  <path d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.71.002-22.95zM5.398 1.05V24c2.873-.086 5.81-.406 8.487-.606V1.05z" />
                </svg>
              </motion.div>

              <motion.div className="absolute bottom-[28vw] left-[8vw] w-[10vw] h-[10vw] sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10">
                {/* Spotify logo */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1DB954">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </motion.div>

              <motion.div className="absolute left-[4vw] top-1/2 -translate-y-1/2 w-[10vw] h-[10vw] sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10">
                {/* Adobe logo */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF0000">
                  <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624z" />
                </svg>
              </motion.div>

              <motion.div className="absolute top-[28vw] left-[8vw] w-[10vw] h-[10vw] sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10">
                {/* Tesla logo */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#CC0000">
                  <path d="M12 5.362L2.4 8.638v6.724L12 18.638l9.6-3.276V8.638L12 5.362zM12 0l12 4.095v15.81L12 24 0 19.905V4.095L12 0z" />
                </svg>
              </motion.div>

              {/* Slack - Additional positions */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -360 }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.0 },
                  scale: { duration: 0.5, delay: 2.0 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute top-20 right-20 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    fill="#E01E5A"
                    d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z"
                  />
                  <path
                    fill="#36C5F0"
                    d="M6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"
                  />
                  <path
                    fill="#2EB67D"
                    d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834z"
                  />
                  <path
                    fill="#ECB22E"
                    d="M8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"
                  />
                </svg>
              </motion.div>

              {/* GitHub */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -360 }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.1 },
                  scale: { duration: 0.5, delay: 2.1 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute bottom-20 right-20 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#181717">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.div>

              {/* LinkedIn */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -360 }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.2 },
                  scale: { duration: 0.5, delay: 2.2 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute bottom-20 left-20 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.div>

              {/* Twitter/X */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -360 }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.3 },
                  scale: { duration: 0.5, delay: 2.3 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute top-20 left-20 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#000000">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.div>

              {/* Facebook */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -360 }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.4 },
                  scale: { duration: 0.5, delay: 2.4 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute top-32 right-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </motion.div>

              {/* Instagram */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -360 }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.5 },
                  scale: { duration: 0.5, delay: 2.5 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute bottom-32 left-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="url(#instagram-gradient)">
                  <defs>
                    <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#833AB4" />
                      <stop offset="50%" stopColor="#FD1D1D" />
                      <stop offset="100%" stopColor="#FCB045" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919 1.266.058 1.644.07 4.85.07 3.204 0 3.584-.012 4.849-.07 4.358-.2 6.78 2.618 6.98 6.98.058 1.281.073 1.689.073 4.948 0 3.205.013 3.663.072 4.948.149 3.227 1.664 4.771 4.919 4.919 1.266.057 1.645.069 4.948.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.057-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.div>

              {/* YouTube */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -360 }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.6 },
                  scale: { duration: 0.5, delay: 2.6 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute top-1/3 right-12 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF0000">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </motion.div>

              {/* Discord */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -360 }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.7 },
                  scale: { duration: 0.5, delay: 2.7 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute bottom-1/3 left-12 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#5865F2">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.756-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.076.076 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
                </svg>
              </motion.div>

              {/* Uber */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -360 }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.8 },
                  scale: { duration: 0.5, delay: 2.8 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute top-1/4 left-6 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#000000">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 14.568a5.968 5.968 0 01-11.136 0 5.968 5.968 0 010-5.136 5.968 5.968 0 0111.136 0 5.968 5.968 0 010 5.136z" />
                </svg>
              </motion.div>

              {/* Airbnb */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -360 }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.9 },
                  scale: { duration: 0.5, delay: 2.9 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute bottom-1/4 right-6 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF5A5F">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7z" />
                </svg>
              </motion.div>

              {/* Dropbox */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -360 }}
                transition={{
                  opacity: { duration: 0.5, delay: 3.0 },
                  scale: { duration: 0.5, delay: 3.0 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute top-1/4 right-6 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#0061FF">
                  <path d="M6 2l6 4 6-4-6-2zm0 6l6 4 6-4-6-2zm6 6l-6-4v6l6 4 6-4v-6z" />
                </svg>
              </motion.div>

              {/* Zoom */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -360 }}
                transition={{
                  opacity: { duration: 0.5, delay: 3.1 },
                  scale: { duration: 0.5, delay: 3.1 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute bottom-1/4 left-6 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#2D8CFF">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 16.894H6.106V7.106h11.788v9.788z" />
                </svg>
              </motion.div>

              {/* Shopify */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -360 }}
                transition={{
                  opacity: { duration: 0.5, delay: 3.2 },
                  scale: { duration: 0.5, delay: 3.2 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute top-8 left-1/3 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#7AB55C">
                  <path d="M15.337 2.136c-.168-.042-.336-.042-.504 0-1.176.294-2.184.966-2.856 1.932-.504.714-.84 1.554-.966 2.436-.378-.126-.798-.21-1.218-.21-2.394 0-4.326 1.932-4.326 4.326 0 .378.042.756.126 1.134C2.394 12.378 0 15.234 0 18.636c0 2.982 2.394 5.364 5.376 5.364h13.248C21.606 24 24 21.606 24 18.636c0-2.982-2.394-5.364-5.376-5.364-.378 0-.756.042-1.134.126-.084-.378-.126-.756-.126-1.134 0-2.394-1.932-4.326-4.326-4.326-.378 0-.756.042-1.134.126.126-.882.462-1.722.966-2.436.672-.966 1.68-1.638 2.856-1.932.168-.042.336-.042.504 0z" />
                </svg>
              </motion.div>

              {/* PayPal */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -360 }}
                transition={{
                  opacity: { duration: 0.5, delay: 3.3 },
                  scale: { duration: 0.5, delay: 3.3 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute bottom-8 right-1/3 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#00457C">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.26-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81.849.97 1.213 2.115 1.074 3.907z" />
                </svg>
              </motion.div>

              {/* Stripe */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -360 }}
                transition={{
                  opacity: { duration: 0.5, delay: 3.4 },
                  scale: { duration: 0.5, delay: 3.4 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute top-8 right-1/3 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#635BFF">
                  <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.274 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" />
                </svg>
              </motion.div>

              {/* Twitch */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -360 }}
                transition={{
                  opacity: { duration: 0.5, delay: 3.5 },
                  scale: { duration: 0.5, delay: 3.5 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute bottom-8 left-1/3 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#9146FF">
                  <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
                </svg>
              </motion.div>

              {/* TikTok */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -360 }}
                transition={{
                  opacity: { duration: 0.5, delay: 3.6 },
                  scale: { duration: 0.5, delay: 3.6 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute left-8 top-2/3 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#000000">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </motion.div>

              {/* Pinterest */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -360 }}
                transition={{
                  opacity: { duration: 0.5, delay: 3.7 },
                  scale: { duration: 0.5, delay: 3.7 },
                  rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute right-8 bottom-2/3 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#BD081C">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
