import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import { ThemeProvider } from '../contexts/ThemeContext';
import { SEO } from '../hooks/useSEO';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category?: string;
  image: string;
  readTime?: string;
  fullContent?: string;
}

// Skeleton Loader Component
const SkeletonLoader: React.FC<{ type: 'hero' | 'featured' | 'grid' }> = ({ type }) => {
  if (type === 'hero') {
    return (
      <div className="container mx-auto px-4">
        <div className="sticky rounded-3xl overflow-hidden">
          <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-pulse" />
          <div className="sticky bottom-60 left-8 right-8 md:left-[45%] md:right-8 md:max-w-3xl bg-gray-800 rounded-3xl p-8 md:p-5 animate-pulse">
            <div className="h-4 bg-gray-700 w-20 mb-4 rounded" />
            <div className="h-8 bg-gray-700 w-3/4 mb-4 rounded" />
            <div className="space-y-2 mb-6">
              <div className="h-4 bg-gray-700 w-full rounded" />
              <div className="h-4 bg-gray-700 w-5/6 rounded" />
            </div>
            <div className="h-10 bg-gray-700 w-32 rounded" />
          </div>
        </div>
      </div>
    );
  }
  if (type === 'featured') {
    return (
      <div className="bg-zinc-900 rounded-3xl overflow-hidden h-full min-h-[400px]">
        <div className="grid md:grid-cols-2 gap-0 h-full">
          <div className="h-48 md:h-full min-h-[250px] bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-pulse" />
          <div className="p-6 md:p-8 space-y-4">
            <div className="h-4 bg-gray-700 w-24 rounded" />
            <div className="h-6 bg-gray-700 w-3/4 rounded" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-700 w-full rounded" />
              <div className="h-4 bg-gray-700 w-5/6 rounded" />
            </div>
            <div className="h-8 bg-gray-700 w-28 rounded" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-zinc-900 rounded-3xl overflow-hidden">
      <div className="h-56 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-pulse" />
      <div className="p-6 space-y-3">
        <div className="h-4 bg-gray-700 w-24 rounded" />
        <div className="h-5 bg-gray-700 w-3/4 rounded" />
        <div className="space-y-2">
          <div className="h-3 bg-gray-700 w-full rounded" />
          <div className="h-3 bg-gray-700 w-5/6 rounded" />
        </div>
        <div className="h-6 bg-gray-700 w-24 rounded" />
      </div>
    </div>
  );
};

// Placeholder image SVG
const PLACEHOLDER_SVG = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23333" width="800" height="600"/%3E%3C/svg%3E';

const Blog_page: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Preload hero image for better performance
  const preloadImage = useCallback((src: string) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    // Fetch blog data with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    fetch('/blog/blogs.json', { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        // support both shapes
        const blogData = (data.blogs && Array.isArray(data.blogs)) ? data.blogs : (data.blog ? [data.blog] : []);
        setPosts(blogData);
        
        // Preload hero image if available
        if (blogData.length > 0 && blogData[0].image) {
          preloadImage(blogData[0].image);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading blogs:', err);
        setLoading(false);
      })
      .finally(() => clearTimeout(timeoutId));
  }, [preloadImage]);

  // Memoized navigation handlers
  const handleNavigation = useCallback((title: string) => {
    navigate(`/blog/${title.toLowerCase().replace(/\s+/g, '-')}`);
  }, [navigate]);

  // Memoize posts data
  const heroPost = useMemo(() => posts[0] || null, [posts]);
  const featuredPost = useMemo(() => posts[1] || null, [posts]);
  const gridPosts = useMemo(() => posts.slice(2, 5), [posts]);

  return (
    <ThemeProvider>
      <SEO
        title="Blog | Bidyut Innovation"
        description="Insights and updates from Bidyut Innovation"
        canonical="https://bidyutinnovation.com/blog"
      />
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main className="pt-24">
          {loading ? (
            <>
              <SkeletonLoader type="hero" />
              <div className="container mx-auto px-4 mb-5 -mt-32">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Recent Post</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-3">
                    <SkeletonLoader type="featured" />
                  </div>
                  <div className="flex flex-col gap-6">
                    {[1, 2, 3].map((i) => (
                      <SkeletonLoader key={i} type="grid" />
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Hero Section */}
              {heroPost && (
                <div className="container mx-auto px-4">
                  <div className="sticky rounded-3xl overflow-hidden">
                    <img 
                      src={heroPost.image}
                      alt={heroPost.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-[400px] md:h-[500px] object-cover"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.src = PLACEHOLDER_SVG;
                      }}
                    />
                    
                    <div className="sticky bottom-60 left-8 right-8 md:left-[45%] md:right-8 md:max-w-3xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 rounded-3xl p-8 md:p-5 shadow-2xl">
                      <span className="inline-block text-xs font-bold tracking-wider text-gray-300 bg-white/10 px-3 py-1 rounded mb-4">
                        {heroPost.category || 'education'}
                      </span>
                      
                      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                        {heroPost.title}
                      </h1>
                      
                      <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6">
                        {heroPost.excerpt}
                      </p>
                      
                      <button 
                        onClick={() => handleNavigation(heroPost.title)}
                        className="bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label={`Read more: ${heroPost.title}`}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Recent Posts Section */}
              <div className="container mx-auto px-4 mb-5 -mt-32">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                  <h2 className="text-3xl md:text-4xl font-bold">Our Recent Post</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Featured Post - Left Side - Full Height */}
                  {featuredPost && (
                    <div className="lg:col-span-3">
                      <div className="bg-zinc-900 rounded-3xl overflow-hidden h-full min-h-[400px]">
                        <div className="grid md:grid-cols-2 gap-0 h-full">
                          <div className="relative h-48 md:h-full min-h-[250px]"> 
                            <img 
                              src={featuredPost.image}
                              alt={featuredPost.title}
                              loading="lazy"
                              decoding="async"
                              className="w-[700px] h-[400px] object-cover m-5"
                              onError={(e) => {
                                const img = e.target as HTMLImageElement;
                                img.src = PLACEHOLDER_SVG;
                              }}
                            />
                          </div>
                          
                          <div className="p-6 md:p-8 flex flex-col justify-center">
                            <div className="space-y-4">
                              <div className="flex items-center gap-3 text-xs text-gray-400">
                                <span className="font-bold text-[#00F5A0]">{featuredPost.category || 'education'}</span>
                                <span>•</span>
                                <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                              </div>
                              
                              <h3 className="text-xl md:text-2xl font-bold leading-tight">
                                {featuredPost.title}
                              </h3>
                              
                              <p className="text-gray-400 text-sm leading-relaxed">
                                {featuredPost.excerpt}
                              </p>
                              
                              <button 
                                onClick={() => handleNavigation(featuredPost.title)}
                                className="text-[#00F5A0] font-semibold text-sm hover:text-[#00d68f] transition-colors inline-flex items-center gap-2"
                                aria-label={`Read more: ${featuredPost.title}`}
                              >
                                Read More →
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Small Posts Grid - Right Side - Match Left Height */}
                  <div className="flex flex-col gap-6">
                    {gridPosts.map((post) => (
                      <div key={post.id} className="bg-zinc-900 rounded-3xl overflow-hidden flex-1">
                        <div className="relative h-56">
                          <img 
                            src={post.image}
                            alt={post.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const img = e.target as HTMLImageElement;
                              img.src = PLACEHOLDER_SVG;
                            }}
                          />
                        </div>
                        
                        <div className="p-6 space-y-3">
                          <div className="flex items-center gap-3 text-xs text-gray-400">
                            <span className="font-bold text-[#00F5A0]">{post.category || 'education'}</span>
                            <span>•</span>
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          
                          <h3 className="text-base font-bold leading-tight line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                            {post.excerpt}
                          </p>
                          
                          <button 
                            onClick={() => handleNavigation(post.title)}
                            className="text-[#00F5A0] font-semibold text-sm hover:text-[#00d68f] transition-colors inline-flex items-center gap-2"
                            aria-label={`Read more: ${post.title}`}
                          >
                            Read More →
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Blog_page;
