import react from "react";

const App = () => {
  return (
    <div class="text-black">
      <header class="bg-[#ADA0A6] p-4 text-xl flex justify-between">
        <h1 class="text-4xl font-bold">Landing Page</h1>
        <nav class="">
          <ul class="flex justify-end gap-4 mr-8">
            <li class="hover:underline hover:decoration-[#7D938A]-400 hover:decoration-3 hover:underline-offset-7">
              <a href="#home" class="hover:text-gray-600">
                Home
              </a>
            </li>
            <li class="hover:underline hover:decoration-[#7D938A]-400 hover:decoration-3 hover:underline-offset-7">
              <a href="#about" class="hover:text-gray-600">
                About
              </a>
            </li>
            <li class="hover:underline hover:decoration-[#7D938A]-400 hover:decoration-3 hover:underline-offset-7">
              <a href="#contactUs" class="hover:text-gray-600">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main class="">
        <h2 class="text-5xl text-center mt-50 mb-8">
          Welcome to our Landing page.
        </h2>
        <p class="text-center text-2xl">
          A simple, clean, and modern landing page built with React and
          Tailwind.
        </p>
        <button class="bg-[#7D938A] mx-auto block p-2 rounded-lg m-5">
          Getting Started
        </button>
      </main>
      <section id="about" class="text-center mt-50 mb-50">
        <h3 class="text-3xl font-semibold">About Us</h3>
        <p class="mt-5 text-2xl">
          We provide solutions that help you grow your business
        </p>
      </section>
      <footer id="Contact" class="bg-[#ADA0A6] p-4 text-center text-xl">
        Contact us at{" "}
        <a
          href="mailto:salilp379@gmail.com"
          class="text-blue-600 hover:underline"
        >
          salilp379@gmail.com
        </a>
      </footer>
    </div>
  );
};

export default App;
