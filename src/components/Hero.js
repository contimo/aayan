import React from "react"
import About from "../Models/About.json"

function Hero() {
  return (
    <div>
      <section class="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
        {About.map(item => (
          <div class={item.class} key={item.id}>
            <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
              <img
                src={item.image}
                class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "
                alt={"ts"}
              />
            </div>

            <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
              <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                {item["head:"]}
              </h2>
              <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg text-justify">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Hero
