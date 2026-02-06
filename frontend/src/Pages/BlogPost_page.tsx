import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import { ThemeProvider } from '../contexts/ThemeContext';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  fullContent: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  tags: string[];
}

const BlogPost_page: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blog data from JSON file
    fetch('/blog/blogs.json')
      .then((res) => res.json())
      .then((data) => {
        const blogs: BlogPost[] = Array.isArray(data?.blogs)
          ? data.blogs
          : data?.blog
          ? [data.blog]
          : [];
        const foundPost = blogs.find((blog: BlogPost) => blog.id === parseInt(id || '0'));
        setPost(foundPost || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading blog:', err);
        setLoading(false);
      });
  }, [id]);

  if (!post) {
    return (
      <ThemeProvider>
        <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <main className="pt-32 pb-20 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
            <div className="text-center py-12">
              <h1 className="text-3xl font-bold dark:text-white text-black mb-4">
                {loading ? 'Loading Blog Post...' : 'Blog Post Not Found'}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                {loading
                  ? 'Please wait while we fetch the blog post.'
                  : "Sorry, the blog post you're looking for doesn't exist."}
              </p>
              {!loading && (
                <button
                  onClick={() => navigate('/blog')}
                  className="px-6 py-3 bg-gradient-to-r from-[#00F5A0] to-[#00C6FF] text-black font-semibold rounded-lg hover:shadow-lg transition-all"
                >
                  Back to Blog
                </button>
              )}
            </div>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <Header />
        <main className="pt-40 pb-20">
          {/* Back to Blog Button */}
          <div className="px-4 md:px-8 lg:px-16 max-w-5xl mx-auto mb-12">
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-2 text-[#00F5A0] hover:text-[#00C6FF] font-semibold transition-colors text-lg"
            >
              ← Back to Blog
            </button>
          </div>

          {/* Article Content */}
          <article className="px-4 md:px-8 lg:px-16 max-w-5xl mx-auto">
            {/* Hero Image */}
            <div className="mb-12 rounded-xl overflow-hidden shadow-2xl h-80 md:h-96 lg:h-[450px]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src =
                    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"%3E%3Cstop offset="0%" style="stop-color:%2300F5A0;stop-opacity:0.3" /%3E%3Cstop offset="100%" style="stop-color:%2300C6FF;stop-opacity:0.3" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="%23111827" width="800" height="400"/%3E%3Crect fill="url(%23grad)" width="800" height="400"/%3E%3Ctext x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="%23999" font-size="24" font-weight="bold"%3EBlog Image%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>

            {/* Title and Meta Section */}
            <div className="mb-12 pb-8 border-b-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-[#00F5A0] to-[#00C6FF] text-black capitalize shadow-lg">
                  {post.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white text-black mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Article Metadata */}
              <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 text-base md:text-lg">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00F5A0]"></span>
                  <span className="font-semibold text-black dark:text-white">
                    {post.author}
                  </span>
                </div>
                <span className="text-gray-400">•</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span className="text-gray-400">•</span>
                <span className="flex items-center gap-1">
                  <span className="text-[#00F5A0]">⏱</span>
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Article Body */}
            <div className="mb-16 prose-lg">
              <div
                className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 text-lg"
                dangerouslySetInnerHTML={{
                  __html: (post.fullContent || '')
                    .replace(/<h3>/g, '<h3 class="text-2xl font-bold text-black dark:text-white mt-10 mb-4">')
                    .replace(/<p>/g, '<p class="mb-6 text-justify leading-8 text-base md:text-lg">')
                    .replace(/<ul>/g, '<ul class="list-disc list-inside mb-6 space-y-3 ml-4">')
                    .replace(/<li>/g, '<li class="text-gray-700 dark:text-gray-300 mb-2 text-base md:text-lg">')
                    .replace(/<strong>/g, '<strong class="font-bold text-black dark:text-white">')
                    .replace(/<a /g, '<a class="text-[#00F5A0] hover:text-[#00C6FF] font-semibold underline" '),
                }}
              />
            </div>

            {/* Tags */}
            <div className="mb-16 pb-12 border-b-2 border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-600 dark:text-gray-400 mb-6 uppercase tracking-widest">
                📌 Tags
              </h3>
              <div className="flex flex-wrap gap-3">
                {(post.tags || []).map((tag) => (
                  <span
                    key={tag}
                    className="px-5 py-2 rounded-full text-sm font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-[#00F5A0] hover:to-[#00C6FF] hover:text-black transition-all duration-300 cursor-pointer shadow-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            {/* <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 mb-16 shadow-lg border border-gray-200 dark:border-gray-600">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#00F5A0] to-[#00C6FF] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold text-3xl">
                    {post.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                    {post.author}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                    Passionate about robotics education and innovation. Contributor to Bidyut Innovation's mission of transforming STEM learning and inspiring the next generation of innovators.
                  </p>
                </div>
              </div>
            </div> */}

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-[#00F5A0] to-[#00C6FF] rounded-xl p-10 text-center shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Ready to Start Your STEM Journey?
              </h3>
              <p className="text-black mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Join Bidyut Innovation's robotics and STEM programs. Transform your learning experience and become part of our community of innovators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-8 py-4 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition-all duration-300 shadow-lg text-lg"
                >
                  Get In Touch
                </button>
                <button
                  onClick={() => navigate('/about')}
                  className="px-8 py-4 bg-white text-black rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg text-lg"
                >
                  Learn More About Us
                </button>
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default BlogPost_page;
