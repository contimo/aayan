import React from "react"
import Patner from "../Models/Patners.json"

function Patners() {
  return (
    <div>
      <section class="bg-white pt-7 pb-14">
        <div class="container px-8 mx-auto sm:px-12 lg:px-20">
          <h1 class="text-sm font-bold tracking-wide text-center text-gray-800 uppercase mb-7">
            Trusted Patners.
          </h1>
          <div class="flex grid items-center justify-center grid-cols-4 grid-cols-12 gap-y-8">
            {Patner.map(item => (
              <div class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
                <img
                  src={item.url}
                  alt="Disney Plus"
                  class="block object-contain h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Patners
