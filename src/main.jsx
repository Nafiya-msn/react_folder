import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function Heading() {
  return (
    <>
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Our Amazing Products</h1>
      <p className="text-xl text-gray-600">Discover a wide range of high-quality items designed to enhance your life.</p>
    </>
  );
}


function SectionHeading(props) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{props.heading}</h2>
        <p className="text-gray-600 text-sm mb-4">{props.para}</p>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold text-indigo-700 mr-2">{props.discount}</span>
          <span className="text-sm text-gray-500 line-through">{props.amount}</span>
        </div>
        <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-indigo-700 transition duration-300 shadow-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
}


function Footer() {
  return (
    <footer className="text-center mt-12 py-6 border-t border-gray-200 text-gray-500 text-sm">
      <p>&copy; 2025 Component Labs. All rights reserved.</p>
    </footer>
  );
}


const products = [
  {
    heading: 'Stylish Noise-Cancelling Headphones',
    para: 'Immerse yourself in pure audio bliss with our premium noise-cancelling headphones. Perfect for travel or focused work.',
    discount: '$149.99',
    amount: '$199.99'
  },
  {
    heading: 'Advanced Fitness Smartwatch',
    para: 'Track your health and stay connected with our feature-packed smartwatch. Waterproof and long-lasting battery.',
    discount: '$99.00',
    amount: '$120.00'
  },
  {
    heading: 'Mechanical RGB Gaming Keyboard',
    para: 'Experience lightning-fast responsiveness with our customizable RGB gaming keyboard. Built for champions.',
    discount: '$75.50',
    amount: '$90.00'
  },
  {
    heading: 'Ergonomic Wireless Mouse',
    para: 'Work comfortably for hours with our precision ergonomic mouse. Say goodbye to wrist strain.',
    discount: '$35.99',
    amount: '$45.00'
  },
  {
    heading: 'Compact Portable Bluetooth Speaker',
    para: 'Enjoy your music anywhere with this powerful and portable Bluetooth speaker. Great bass and battery life.',
    discount: '$59.99',
    amount: '$70.00'
  },
  {
    heading: 'Universal Smart Home Hub',
    para: 'Control all your smart devices from one central hub. Simplify your home automation.',
    discount: '$119.99',
    amount: '$150.00'
  }
];

function App() {
  return (
    <div className="p-9 space-y-4">
      <header className="text-center mb-12">
        <Heading />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <SectionHeading
            key={index}
            heading={product.heading}
            para={product.para}
            discount={product.discount}
            amount={product.amount}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
