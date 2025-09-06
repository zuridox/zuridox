import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../../data/blogData";
import { BlogPost } from "../../types";
import { useTheme } from "../../ThemeContext"; // Assuming you have a ThemeContext

const Post: React.FC = () => {
  const { slug } = useParams<{ slug: string }>(); // Type the slug
  const { theme } = useTheme(); // Get the current theme from context
  const post = blogData.find((p: BlogPost) => p.slug === slug);

  if (!post) {
    return <p className="text-center text-gray-600">Post not found!</p>;
  }

  return (
    <div
      className={`mx-auto px-6 py-10 sm:px-10 lg:px-20 pt-28 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <h1
        className={`text-4xl font-extrabold ${
          theme === "dark" ? "text-white" : "text-gray-900"
        } mb-6`}
      >
        {post.title}
      </h1>
      <p
        className={`text-sm mb-6 ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}
      >
        Published on {post.date} by {post.author}
      </p>
      <div className="flex justify-center mb-8">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-3/4 sm:w-1/2 lg:w-1/3 h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
      <div
        className={`prose prose-lg ${
          theme === "dark" ? "prose-invert" : "prose-dark"
        } max-w-none`}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default Post;
