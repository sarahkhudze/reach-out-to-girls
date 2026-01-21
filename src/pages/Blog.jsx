
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const blogPosts = Object.values(
  import.meta.glob('../content/blog/*.json', { eager: true })
).map(mod => mod.default);

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [sortOrder, setSortOrder] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 4;

  useEffect(() => {
    AOS.init({ duration: 600, once: true });

    const sorted = [...blogPosts].sort((a, b) => {
      return sortOrder === 'latest'
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date);
    });
    setPosts(sorted);
  }, [sortOrder]);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-16 max-w-3xl mx-auto relative">
        
          <h1
            className="text-4xl md:text-5xl font-normal tracking-wide"
            style={{
              fontWeight: 700,
              color: "#292496",
              letterSpacing: "0.02em",
            }}
          >
            Let’s Connect Together
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#65a7b2] to-[#FFBE0B] mx-auto rounded-full mt-6"></div>
          <p className="text-gray-700 mt-8 leading-relaxed max-w-2xl mx-auto">
             A community of women lifting each other because your journey matters, and you don`t have to walk it alone. Share your thoughts, ask for advice, or just listen. Every conversation here builds a stronger, more empowered you. Welcome to where women connect genuinely.
          </p>
        </div>

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setSortOrder('latest')}
          className={`px-4 py-2 rounded-full ${sortOrder === 'latest'
              ? 'bg-[#292496] text-white'
              : 'bg-gray-200 text-gray-800'
            }`}
        >
          Latest
        </button>
        <button
          onClick={() => setSortOrder('oldest')}
          className={`px-4 py-2 rounded-full ${sortOrder === 'oldest'
              ? 'bg-[#292496] text-white'
              : 'bg-gray-200 text-gray-800'
            }`}
        >
          Oldest
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {currentPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="block"
            data-aos="fade-up"
          >
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <div className="text-sm text-[#65a7b2] mb-2">
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <h2 className="text-xl font-bold text-[#292496] mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#f0f9ff] text-[#292496] px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-12 space-x-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-10 h-10 rounded-full ${currentPage === i + 1
                  ? 'bg-[#292496] text-white'
                  : 'bg-gray-200 text-gray-800'
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;