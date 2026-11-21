import "./App.css";

function App() {
  return (
    <>
      <h1>Welcome to React</h1>
      <div className="bg-blue-500 text-white p-4 rounded">
        <p>This is a simple React application.</p>
        <p>
          Feel free to explore and modify the code to learn more about React!
        </p>
        <h2>Features:</h2>
      </div>
      <div className="mt-8 bg-white rounded-xl shadow-md max-w-sm overflow-hidden border border-gray-200  transition-shadow">
        <img
          className="w-full h-48 object-cover"
          src="https://images.unsplash.com/photo-1780174604929-42437e465a44?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          alt="Placeholder"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">Card Title</h2>
          <p className="text-gray-600 mt-2 text-sm">
            This is a placeholder image. You can replace it with your own image
            by changing the <code>src</code> attribute.
          </p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
