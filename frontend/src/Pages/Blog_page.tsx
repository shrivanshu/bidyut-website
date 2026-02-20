import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Component/FooterUnanimated'
import Header from '../Component/Header'
import { ThemeProvider } from '../contexts/ThemeContext'
import { SEO } from '../hooks/useSEO'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  category?: string
  image: string
  readTime?: string
  fullContent?: string
}

const PLACEHOLDER_SVG =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23333" width="800" height="600"/%3E%3C/svg%3E'

const Blog_page: React.FC = () => {
  const navigate = useNavigate()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/blog/blogs.json')
      .then(res => res.json())
      .then(data => {
        const blogData =
          data.blogs && Array.isArray(data.blogs)
            ? data.blogs
            : data.blog
            ? [data.blog]
            : []
        setPosts(blogData)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const handleNavigation = useCallback(
    (title: string) => {
      navigate(`/blog/${title.toLowerCase().replace(/\s+/g, '-')}`)
    },
    [navigate]
  )

  const heroPost = useMemo(() => posts[0] || null, [posts])
  const featuredPost = useMemo(() => posts[1] || null, [posts])
  const gridPosts = useMemo(() => posts.slice(2, 5), [posts])

  return (
    <ThemeProvider>
      <SEO
        title='Blog | Bidyut Innovation'
        description='Insights and updates from Bidyut Innovation'
        canonical='https://bidyutinnovation.com/blog'
      />

      <div className='min-h-screen bg-black text-white'>
        <Header />
        <main className='pt-24'>
          {/* HERO SECTION */}
          {heroPost && (
            <div className='container mx-auto px-4'>
              <div className='rounded-xl overflow-hidden'>
                <img
                  src={heroPost.image}
                  alt={heroPost.title}
                  className='w-full h-[400px] md:h-[500px] object-cover rounded-b-xl'
                  onError={e => {
                    const img = e.target as HTMLImageElement
                    img.src = PLACEHOLDER_SVG
                  }}
                />

                <div className='sticky bottom-60 left-8 right-8 md:left-[35%] md:right-8 md:max-w-5xl bg-white rounded-xl p-8 md:p-5 shadow-2xl'>
                  <span className='inline-block text-xs font-bold tracking-wider text-gray-600 bg-gray-100 px-3 py-1 rounded mb-4'>
                    {heroPost.category || 'education'}
                  </span>

                  <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight mb-4'>
                    {heroPost.title}
                  </h1>

                  <p className='text-gray-700 text-sm md:text-base leading-relaxed mb-6'>
                    {heroPost.excerpt}
                  </p>

                  {/* UPDATED HERO BUTTON */}
                  <button
                    onClick={() => handleNavigation(heroPost.title)}
                    className='border border-purple-600 text-purple-600 bg-transparent font-semibold px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300'
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* RECENT POSTS */}
          <div className='container mx-auto px-4 mb-5 -mt-32'>
            <h2 className='text-3xl md:text-4xl font-bold mb-8'>
              Our Recent Post
            </h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
              {/* FEATURED POST */}
              {featuredPost && (
                <div className='lg:col-span-3'>
                  <div className='bg-black rounded-3xl overflow-hidden min-h-[400px]'>
                    <div className='grid md:grid-cols-2 gap-0'>
                      <div className='relative h-48 md:h-full md:p-5'>
                        <img
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className='w-full h-full object-cover rounded-xl'
                          onError={e => {
                            const img = e.target as HTMLImageElement
                            img.src = PLACEHOLDER_SVG
                          }}
                        />
                      </div>

                      <div className='p-6 md:p-10 flex flex-col justify-center'>
                        <div className='space-y-5'>
                          <div className='flex items-center gap-3 text-base text-gray-400'>
                            <span className='font-bold text-[#00F5A0]'>
                              {featuredPost.category || 'education'}
                            </span>
                            <span>•</span>
                            <span>
                              {new Date(featuredPost.date).toLocaleDateString()}
                            </span>
                          </div>

                          <h3 className='text-3xl md:text-4xl font-bold leading-tight'>
                            {featuredPost.title}
                          </h3>

                          <p className='text-gray-300 text-lg leading-relaxed text-justify'>
                            {featuredPost.excerpt}
                          </p>

                          <button
                            onClick={() => handleNavigation(featuredPost.title)}
                            className='border border-[#00F5A0] text-[#00F5A0] px-5 py-2 rounded-md font-semibold text-base hover:bg-[#00F5A0] hover:text-black transition-all duration-300'
                          >
                            Read More →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SMALL GRID POSTS */}
              <div className='flex flex-col gap-6 md:ml-5'>
                {gridPosts.map(post => (
                  <div
                    key={post.id}
                    className='bg-black rounded-xl overflow-hidden'
                  >
                    <div className='relative h-56 md:h-80'>
                      <img
                        src={post.image}
                        alt={post.title}
                        className='w-full h-full object-cover rounded-xl'
                        onError={e => {
                          const img = e.target as HTMLImageElement
                          img.src = PLACEHOLDER_SVG
                        }}
                      />
                    </div>

                    <div className='p-6 space-y-4'>
                      <div className='flex items-center gap-3 text-base text-gray-400'>
                        <span className='font-bold text-[#00F5A0]'>
                          {post.category || 'education'}
                        </span>
                        <span>•</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>

                      <h3 className='text-xl md:text-xl font-bold leading-tight w-full'>
                        {post.title}
                      </h3>

                      <p className='text-gray-300 text-base leading-relaxed text-justify'>
                        {post.excerpt}
                      </p>

                      <button
                        onClick={() => handleNavigation(post.title)}
                        className='border border-[#00F5A0] text-[#00F5A0] px-4 py-1 rounded-md text-base font-semibold hover:bg-[#00F5A0] hover:text-black transition-all duration-300'
                      >
                        Read More →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Blog_page
