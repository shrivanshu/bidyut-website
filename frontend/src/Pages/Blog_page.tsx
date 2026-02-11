import React, { useEffect, useState } from 'react';
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

const Blog_page: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/blog/blogs.json')
      .then((res) => res.json())
      .then((data) => {
        // support both shapes
        if (data.blogs && Array.isArray(data.blogs)) setPosts(data.blogs);
        else if (data.blog) setPosts([data.blog]);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading blogs:', err);
        setLoading(false);
      });
  }, []);

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
            <div className="text-center py-12">
              <p className="text-gray-400">Loading...</p>
            </div>
          ) : (
            <>
              {/* Hero Section */}
              {posts.length > 0 && (
                <div className="container mx-auto px-4">
                  <div className="sticky rounded-3xl overflow-hidden">
                    <img 
                      src={posts[0].image}
                      alt={posts[0].title}
                      className="w-full h-[400px] md:h-[500px] object-cover"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="450"%3E%3Crect fill="%23333" width="800" height="450"/%3E%3C/svg%3E';
                      }}
                    />
                    
                    <div className="sticky bottom-60 left-8 right-8 md:left-[45%] md:right-8 md:max-w-3xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 rounded-3xl p-8 md:p-5 shadow-2xl">
                      <span className="inline-block text-xs font-bold tracking-wider text-gray-300 bg-white/10 px-3 py-1 rounded mb-4">
                        {posts[0].category || 'education'}
                      </span>
                      
                      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                        {posts[0].title}
                      </h1>
                      
                      <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6">
                        {posts[0].excerpt}
                      </p>
                      
                      <button 
                        onClick={() => navigate(`/blog/${posts[0].title.toLowerCase().replace(/\s+/g, '-')}`)}
                        className="bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
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
                  {posts.length > 1 && (
                    <div className="lg:col-span-3">
                      <div className="bg-zinc-900 rounded-3xl overflow-hidden h-full min-h-[400px]">
                        <div className="grid md:grid-cols-2 gap-0 h-full">
                          <div className="relative h-48 md:h-full min-h-[250px]"> 
                            <img 
                              src={posts[1].image}
                              alt={posts[1].title}
                              className="w-[700px] h-[400px] object-cover m-5"
                              onError={(e) => {
                                const img = e.target as HTMLImageElement;
                                img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23333" width="800" height="600"/%3E%3C/svg%3E';
                              }}
                            />
                          </div>
                          
                          <div className="p-6 md:p-8 flex flex-col justify-center">
                            <div className="space-y-4">
                              <div className="flex items-center gap-3 text-xs text-gray-400">
                                <span className="font-bold text-[#00F5A0]">{posts[1].category || 'education'}</span>
                                <span>•</span>
                                <span>{new Date(posts[1].date).toLocaleDateString()}</span>
                              </div>
                              
                              <h3 className="text-xl md:text-2xl font-bold leading-tight">
                                {posts[1].title}
                              </h3>
                              
                              <p className="text-gray-400 text-sm leading-relaxed">
                                {posts[1].excerpt}
                              </p>
                              
                              <button 
                                onClick={() => navigate(`/blog/${posts[1].title.toLowerCase().replace(/\s+/g, '-')}`)}
                                className="text-[#00F5A0] font-semibold text-sm hover:text-[#00d68f] transition-colors inline-flex items-center gap-2"
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
                    {posts.slice(2, 5).map((post) => (
                      <div key={post.id} className="bg-zinc-900 rounded-3xl overflow-hidden flex-1">
                        <div className="relative h-56">
                          <img 
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const img = e.target as HTMLImageElement;
                              img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23333" width="400" height="300"/%3E%3C/svg%3E';
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
                            onClick={() => navigate(`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`)}
                            className="text-[#00F5A0] font-semibold text-sm hover:text-[#00d68f] transition-colors inline-flex items-center gap-2"
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
