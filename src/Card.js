import React from 'react';

const card = () => {
    return (
        <div className="container m-auto">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <figure class="md:flex bg-gray-100 rounded p-8 md:p-0 my-3">
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
                <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0 my-3">
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
                <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0 my-3">
                    <img class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg" alt="" width="384" height="512" />
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p class="text-lg text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500 font-bold">
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
            </div>
        </div>
    );
};

export default card;