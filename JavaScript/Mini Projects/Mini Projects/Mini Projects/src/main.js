// document.getElementsByTagName("header")[0].innerHTML = `

// `;

document.getElementsByTagName("footer")[0].innerHTML = `
<footer class="bg-gray-900 text-gray-400">
    <div class="relative max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div id="toTop" class="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8">
            <a class="inline-block p-2 text-indigo-500 transition bg-gray-700 rounded-full sm:p-3 lg:p-4 hover:bg-gray-600">
                <span class="sr-only">Back to top</span>

                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                </svg>
            </a>
        </div>

        <div class="lg:flex lg:items-end lg:justify-between">
            <div>
                <div class="md:flex md:items-center md:gap-12">
                    <a class="flex title-font font-medium items-center text-white md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span class="ml-3 text-lg">Pratham</span>
                    </a>
                </div>
            </div>

            <nav class="mt-12 lg:mt-0 text-sm" aria-labelledby="footer-navigation">
                <ul class="flex flex-wrap justify-center gap-6 lg:justify-end md:gap-8 lg:gap-12">
                    <li>
                        <a class="transition hover:text-white" href="/">About</a>
                    </li>

                    <li>
                        <a class="transition hover:text-white" href="/">Services</a>
                    </li>

                    <li>
                        <a class="transition hover:text-white" href="/">Projects</a>
                    </li>

                    <li>
                        <a class="transition hover:text-white" href="/">Blog</a>
                    </li>
                </ul>
            </nav>
        </div>

        <p class="mt-8 text-sm text-center text-gray-600 lg:text-right">Copyright &copy; 2022. All rights reserved.</p>
    </div>
</footer>
`;

document.getElementById("toTop").addEventListener("click", function () {
    document.body.scrollIntoView({
        behavior: "smooth",
    });
});
