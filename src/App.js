import React, { useEffect, useState } from 'react';
import Card from './Card';
import ShopContextProvider from './context/ShopContext';
import Nav from './Nav';
import ShowProducts from './showProducts';
import Speacing from './Speacing';

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('UseEffect method called');
  }, [count])
  return (
    <div>
      <Nav />
      <ShopContextProvider>
        <ShowProducts />
      </ShopContextProvider>
      <p>{count}</p>
      <Card />
      <Speacing />
      <div className="container m-auto mt-10 rounded">
        <button className="bg-blue-500 text-white px-5 py-2 rounded font-bold">Login</button>&nbsp;&nbsp;
        <button className="bg-green-500 text-white px-5 py-2 rounded font-bold">Login</button>&nbsp;&nbsp;
        <button className="bg-indigo-500 text-white px-5 py-2 rounded font-bold">Login</button>&nbsp;&nbsp;
        <button className="bg-pink-500 text-white px-5 py-2 rounded font-bold">Login</button>&nbsp;&nbsp;
        <button className="bg-yellow-500 text-white px-5 py-2 rounded font-bold hover:bg-green-600 focus:outline-none" onClick={() => setCount(count + 1)}>Register</button><br /><br />

        <form className="max-w-screen-md mt-5 mb-5 bg-gray-100 p-5 ">
          <div className="mb-4">
            <h2 className="text-2xl text-gray-500">Create a new account</h2>
          </div>
          <div className="mb-3">
            <input type="text" className="border w-full rounded px-2 py-2 bg-gray-200 outline-none" placeholder="Enter your name..." />
          </div>
          <div className="mb-3">
            <input type="email" className="border w-full rounded px-2 py-2 bg-gray-200 outline-none" placeholder="Enter your email..." />
          </div>
          <div className="mb-3">
            <input type="password" className="border w-full rounded px-2 py-2 bg-gray-200 outline-none" placeholder="Enter your password..." />
          </div>
          <div className="mb-3">
            <input type="submit" className="w-full py-3 cursor-pointer font-bold bg-green-500 rounded text-white outline-none" value="Register" />
          </div>
        </form>

        <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
          <img class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg" alt="" width="384" height="512" />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-semibold">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
      </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-cyan-600">
                Sarah Dayan
      </div>
              <div class="text-gray-500">
                Staff Engineer, Algolia
      </div>
            </figcaption>
          </div>
        </figure>

        <div className="bg-green-500 max-w-screen-md p-3 rounded text-green-900">
          <strong>Success!</strong> Your account has been created successfully.
        </div>
        <div className="flex bg-gray-200 h-20 items-center justify-center">
          <div className="item">i</div>
          <div className="item">i</div>
          <div className="item">i</div>
          <div className="item">i</div>
          <div className="item">i</div>
        </div>

        <div className="bg-white-100 mt-5 rounded border-gray-500">
          <div className="bg-gray-300 p-5">
            <h1>how are you</h1>
          </div>
        </div>

      </div>

      
    </div>
  );
}

export default App;
