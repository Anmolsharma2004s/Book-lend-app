import React from 'react'

const LendBook = () => {
  return (
    <div>
        <h1 className="text-2xl font-bold text-center mt-10">Lend a Book</h1>
        <p className="text-center mt-4 text-lg">
            Fill out the form below to lend your book to a fellow reader.
        </p>
        <form className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookTitle">
                    Book Title
                </label>
                <input
                    type="text"
                    id="bookTitle"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter the title of the book"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="authorName">
                    Author Name
                </label>
                <input
                    type="text"
                    id="authorName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter the author's name"
                />
            </div>
        </form>
        <div className="text-center mt-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit
            </button>
        </div>
    </div>
  )
}

export default LendBook