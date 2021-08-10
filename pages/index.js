function index() {
  return (
    <div className="relative py-12 px-32 bg-gray-100 min-h-screen">
      <div className="z-100 p-12 h-full bg-white shadow-md rounded-3xl">
        <div>
          <img src="/logo.svg" className="h-7 mb-5"></img>
        </div>
        <div className="space-y-4 py-4 text-lg text-gray-700">
          An advanced online playground for Tailwind CSS, including support for
          things like:
        </div>
        <ul className="list-disc space-y-3 ">
          <li className=" text-md text-gray-700 flex items-center">
            <svg
              class="flex-shrink-0 mr-2 h-5 w-5 text-cyan-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            Customizing your
            <code className="mx-2 text-sm font-bold translate-y-0.5">
              tailwind.config.js
            </code>
            file
          </li>
          <li className=" text-md text-gray-700 flex items-center">
            <svg
              class="flex-shrink-0 mr-2 h-5 w-5 text-cyan-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            Extracting classes with
            <code className="mx-2 text-sm font-bold translate-y-0.5">
              @apply
            </code>
          </li>
          <li className=" text-md text-gray-700 flex items-center">
            <svg
              class="flex-shrink-0 mr-2 h-5 w-5 text-cyan-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            Code completion with instant view
          </li>
        </ul>
        <div className="text-lg leading-8 text-gray-700 pt-7 pb-10 border-b-2 border-gray-200">
          Perfect for learning how the framework works, prototyping a new idea,
          or creating a demo to share online.
        </div>
        <div className="mt-7 text-gray-900 font-bold text-xl">
          Want to dig deeper into Tailwind?
        </div>
        <a className="text-cyan-500" href="#">
          Read the docs
        </a>
        <button className="block mt-4 px-4 py-2 transition-all bg-cyan-500 rounded-md text-white hover:-translate-y-0.5 hover:bg-gray-700">
          Press Me
        </button>
      </div>
    </div>
  );
}

export default index;
