import React from 'react';

function Home() {
  return (
    <div className="relative flex flex-col md:flex-row h-[85vh] mx-5 mt-5 rounded-3xl shadow-2xl overflow-hidden">
     
      <img 
        className="w-full h-full object-cover rounded-3xl brightness-75" 
        src="pizza.jpg" 
        alt="Delicious Pizza" 
      />

      <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-16 space-y-5">
        <h1 className="font-serif text-4xl md:text-6xl text-white uppercase drop-shadow-lg">
          Pokhara's Best Pizza
        </h1>

        <p className="font-serif text-white text-base md:text-lg max-w-xl drop-shadow-md">
          Welcome to Slice of Heaven, where every bite tells a story of tradition, flavor, and love for authentic pizza. We bring you handcrafted pizzas made with the freshest ingredients, homemade sauces, and dough.
        </p>

        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-serif font-semibold transition shadow-lg">
          Order Now
        </button>

        <p className="bg-white text-green-700 px-5 py-1 rounded-lg font-serif text-sm md:text-base shadow-md">
          Get 20% discount every weekend
        </p>
      </div>
    </div>
  );
}

export default Home;
