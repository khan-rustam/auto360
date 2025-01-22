import React from 'react';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "Essential Pre-Purchase Inspection Checklist",
    excerpt: "Learn about the key points to check before buying a used car. Our comprehensive guide will help you make an informed decision.",
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "Mar 15, 2024",
    author: "David Wilson",
    readTime: "5 min read",
    category: "Buying Guide"
  },
  {
    title: "Common Car Problems and How to Spot Them",
    excerpt: "Discover the most common vehicle issues and learn how to identify them early. Save money and prevent major repairs.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "Mar 12, 2024",
    author: "Sarah Chen",
    readTime: "7 min read",
    category: "Maintenance"
  },
  {
    title: "Understanding Your Vehicle's Safety Features",
    excerpt: "A comprehensive guide to modern vehicle safety features and how they protect you on the road.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "Mar 10, 2024",
    author: "Michael Brown",
    readTime: "6 min read",
    category: "Safety"
  }
];

const Blog = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Auto360 Blog
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            Expert insights, maintenance tips, and automotive industry trends
          </p>
        </div>
      </div>

      {/* Featured Post */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-96"
                src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Featured post"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">Featured Article</div>
              <h2 className="mt-2 text-2xl font-semibold text-gray-900">
                The Future of Vehicle Inspections: AI and Machine Learning
              </h2>
              <p className="mt-4 text-gray-600">
                Explore how artificial intelligence and machine learning are revolutionizing vehicle inspections, making them more accurate and efficient than ever before.
              </p>
              <div className="mt-6 flex items-center">
                <Calendar className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-sm text-gray-500">Mar 18, 2024</span>
                <User className="h-5 w-5 ml-6 text-gray-400" />
                <span className="ml-2 text-sm text-gray-500">John Anderson</span>
                <Clock className="h-5 w-5 ml-6 text-gray-400" />
                <span className="ml-2 text-sm text-gray-500">8 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <img
                className="h-48 w-full object-cover"
                src={post.image}
                alt={post.title}
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                  <User className="h-4 w-4 ml-4 mr-2" />
                  <span>{post.author}</span>
                  <Clock className="h-4 w-4 ml-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <button className="text-blue-600 font-semibold inline-flex items-center hover:text-blue-700">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">
              Get the latest automotive news, maintenance tips, and industry updates delivered to your inbox.
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;