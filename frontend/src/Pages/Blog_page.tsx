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
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <Header />
        <main className="pt-40 pb-20">
          <section className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mb-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white text-black">Our Blog</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Insights, news and stories about robotics education and STEM learning.
              </p>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400">Loading...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    <div className="h-48 w-full overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="200"%3E%3Crect fill="%23333" width="400" height="200"/%3E%3C/text%3E%3C/svg%3E';
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-bold dark:text-white text-black mb-2">{post.title}</h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</div>
                        <button
                          onClick={() => navigate(`/blog/${post.id}`)}
                          className="text-[#00F5A0] font-semibold"
                        >
                          Read More →
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Blog_page;
