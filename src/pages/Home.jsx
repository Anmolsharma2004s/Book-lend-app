import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Home = () => {
return (
    <div className="font-sans min-h-screen bg-[#1a202c]">
        
        <div className="max-w-2xl mx-auto mt-10 bg-[#2d3748] bg-opacity-95 p-8 rounded-xl shadow-2xl animate-fade-in">
            <h1 className="text-[#cbd5e0] text-3xl font-bold mb-4 animate-slide-down">Welcome to Book Lend!</h1>
            <p className="text-lg text-[#cbd5e0] mb-2 animate-fade-in-delay">
                Your one-stop solution for lending and borrowing books.
            </p>
            <p className="text-base text-[#cbd5e0] mb-2 animate-fade-in-delay2">
                Explore our collection, lend your books, and connect with fellow book lovers!
            </p>
            <p className="text-base text-[#cbd5e0] mb-6 animate-fade-in-delay3">
                Get started by navigating through the links in the navbar.
            </p>
            <section className="mb-8 animate-fade-in-delay4">
                <h2 className="text-blue-400 text-xl font-semibold mb-3">Featured Books</h2>
                <ul className="list-disc pl-5 text-[#cbd5e0]">
                    <li>"Atomic Habits" by James Clear</li>
                    <li>"The Alchemist" by Paulo Coelho</li>
                    <li>"Educated" by Tara Westover</li>
                </ul>
            </section>
            <section className="mb-8 animate-fade-in-delay5">
                <h2 className="text-blue-400 text-xl font-semibold mb-3">How It Works</h2>
                <ol className="list-decimal pl-5 text-[#cbd5e0]">
                    <li>Sign up or log in to your account.</li>
                    <li>Browse available books or list your own.</li>
                    <li>Request to borrow or lend a book.</li>
                    <li>Connect and arrange the exchange.</li>
                </ol>
            </section>
            <section className="animate-fade-in-delay6">
                <h2 className="text-blue-400 text-xl font-semibold mb-3">Community Highlights</h2>
                <p className="text-base text-[#cbd5e0] mb-3">
                    Join discussions, share reviews, and make new friends in our book-loving community!
                </p>
                <Link
                    to="/community"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200"
                >
                    Go to Community
                </Link>
            </section>
        </div>
        {/* Tailwind custom animation classes */}
        <style>
            {`
                .animate-fade-in {
                    animation: fadeIn 0.8s ease;
                }
                .animate-slide-down {
                    animation: slideDown 0.8s cubic-bezier(.4,0,.2,1);
                }
                .animate-fade-in-delay { animation: fadeIn 1s 0.2s both; }
                .animate-fade-in-delay2 { animation: fadeIn 1s 0.4s both; }
                .animate-fade-in-delay3 { animation: fadeIn 1s 0.6s both; }
                .animate-fade-in-delay4 { animation: fadeIn 1s 0.8s both; }
                .animate-fade-in-delay5 { animation: fadeIn 1s 1s both; }
                .animate-fade-in-delay6 { animation: fadeIn 1s 1.2s both; }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-30px);}
                    to { opacity: 1; transform: translateY(0);}
                }
            `}
        </style>
    </div>
)
}

export default Home
