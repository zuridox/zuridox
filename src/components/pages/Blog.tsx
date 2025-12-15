import React from "react";
import { Link } from "react-router-dom";
import blogData from "../../data/blogData";
import { BlogPost } from "../../types";
import { useTheme } from "../../ThemeContext";

const Blog: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full px-4 py-8 pt-20 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <header className="text-center mb-12">
        <h1
          className={`text-4xl font-bold ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          Zuridox Blog
        </h1>
        <p
          className={`text-gray-600 mt-2 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Insights on technology, web development
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogData.map((post: BlogPost) => (
          <div
            key={post.id}
            className={`${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-900"
            } shadow-lg rounded-xl overflow-hidden`}
          >
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-25 h-52 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p
                className={`text-sm mb-3 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Published on {post.date} by {post.author}
              </p>
              <p
                className={`text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {post.content.substring(0, 100)}...
              </p>
              <Link
                to={`/blog/${post.slug}`}
                className={`inline-block mt-3 ${
                  theme === "dark" ? "text-blue-400" : "text-blue-600"
                } font-medium hover:underline`}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
