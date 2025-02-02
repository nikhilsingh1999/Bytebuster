import { useEffect } from "react";

const JobApplicationPage = () => {
  useEffect(() => {
    // Reset scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);

  const handleViewAssignment = () => {
    window.open("https://docs.google.com/document/example-link", "_blank");
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Application Submitted");
  };

  return (
    <div className="container  mx-auto my-11 pt-20 p-6 bg-gray-800 text-white min-h-screen">
      <div className="max-w-2xl mx-auto border border-gray-700 rounded-lg p-6 bg-gray-900 shadow-lg hover:scale-105 transform transition-transform duration-300">
        <h1 className="text-2xl font-bold text-center mb-4">Job Application</h1>
        <form onSubmit={handleSubmitApplication} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-600 text-white"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-600 text-white"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">GitHub Profile Link</label>
            <input
              type="url"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-600 text-white"
              placeholder="https://github.com/username"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Cover Letter</label>
            <textarea
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-600 text-white"
              rows="4"
              placeholder="Write your cover letter here..."
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">View Assignment</span>
            <button
              type="button"
              onClick={handleViewAssignment}
              className="px-4 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-600"
            >
              View
            </button>
          </div>
          <div>
            <label className="block font-medium mb-1">GitHub Assignment Link</label>
            <input
              type="url"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-600 text-white"
              placeholder="https://github.com/assignment-repo"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Project Description Document Link</label>
            <input
              type="url"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-600 text-white"
              placeholder="https://docs.google.com/document/project-description"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-md text-white font-semibold hover:shadow-lg"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationPage;
