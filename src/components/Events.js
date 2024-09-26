import React from "react"

function Events() {
  return (
    <div>
      <section class="box-border py-8 leading-7 text-gray-900 bg-white border-0 border-gray-200 border-solid sm:py-12 md:py-16 lg:py-24">
        <div class="box-border max-w-6xl px-4 pb-12 mx-auto border-solid sm:px-6 md:px-6 lg:px-4">
          <div class="flex flex-col items-center leading-7 text-center text-gray-900">
            <h2 class="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
              How We Collected the Funds
            </h2>
            <p class="box-border mt-4 text-2xl leading-normal text-gray-900 border-solid">
              We've got a plan for anyone of any size
            </p>
          </div>
          <div class="grid max-w-md mx-auto mt-6 overflow-hidden leading-7 text-gray-900 border border-b-4 border-gray-300 border-blue-600 rounded-xl md:max-w-lg lg:max-w-none sm:mt-10 lg:grid-cols-3">
            <div class="box-border px-4 py-8 mb-6 text-center bg-white border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
              <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                Basic Gaming Events
              </h3>
              <p class="mt-3 leading-7 text-gray-900 border-0 border-solid">
                Wiz-Arcade – Gaming Championship which included tournaments for
                games like Fortnite, Call of Duty, etc.
              </p>

              <button class="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-b-2 border-blue-600 rounded-md cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white sm:text-base sm:mt-8 md:text-lg">
                Donate Now
              </button>
            </div>
            <div class="box-border px-4 py-8 mb-6 text-center bg-gray-100 border border-gray-300 border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
              <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                Plus Gaming Events
              </h3>
              <p class="mt-3 leading-7 text-gray-900 border-0 border-solid">
                Concord 2021- This segment included a Netflix-based MUN
                conference, Football Auction House (UEFA) and Cricket Auction
                House
              </p>

              <button class="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-white no-underline bg-blue-600 border-b-4 border-blue-700 rounded cursor-pointer hover:text-white sm:text-base sm:mt-8 md:text-lg">
                Donate Now
              </button>
            </div>
            <div class="box-border px-4 py-8 text-center bg-white border-solid sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
              <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                Music Event
              </h3>
              <p class="mt-3 leading-7 text-gray-900 border-0 border-solid">
                Euphoria- A Live Musical Concert to provide a platform to the
                amateur singers and artists; Guest of Honour- D Soldierz; famous
                Music composer The Happy Excuse- A fun session for kids with
                various exciting activities and sessions including storytelling
                sessions, drawing challenge, dance competition, etc.
              </p>

              <button class="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-b-2 border-blue-600 rounded cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white sm:text-base sm:mt-8 md:text-lg">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events
