import React from 'react';
import { ShoppingBag, Star, ArrowRight } from 'lucide-react';

export const HeroSection = () => {
    const description="Shop the latest trends and find everything you need in one place. Quality products, great prices, fast delivery";


    
  return (
    <div className="relative flex items-center justify-center min-h-screen w-full bg-gradient-to-r from-blue-50 to-indigo-100">
      
      {/* Main content */}
      <div className="text-center px-6 max-w-4xl">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-indigo-700 bg-white border border-indigo-200 rounded-full shadow-sm">
          <Star className="w-4 h-4 fill-current" />
          <span>New Collection Available</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Discover Amazing
          <br />
          <span className="text-indigo-600">Products</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg">
            <ShoppingBag className="w-5 h-5" />
            <span>Shop Now</span>
          </button>
          
          <button className="flex items-center gap-2 px-8 py-4 text-lg font-semibold text-indigo-600 border-2 border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
            <span>View Catalog</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="text-2xl font-bold text-indigo-600 mb-2">Free Shipping</div>
            <p className="text-gray-600">On orders over $50</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="text-2xl font-bold text-indigo-600 mb-2">30-Day Returns</div>
            <p className="text-gray-600">Easy returns policy</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="text-2xl font-bold text-indigo-600 mb-2">24/7 Support</div>
            <p className="text-gray-600">Always here to help</p>
          </div>
        </div>
      </div>
    </div>
  );
};