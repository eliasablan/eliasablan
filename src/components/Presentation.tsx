import React from 'react'

const Presentation = () => {
  return (
    <div className="py-8 md:pt-20">
      <h1 className="mb-3 text-3xl md:mb-4">
        <span className="opacity-65">Hi </span>
        <span>👋</span>
        <span className="opacity-65">, I&apos;m </span>
        <b className="text-accent-foreground">Elias Ablan!</b>
      </h1>
      <ul className="list-disc pl-4 opacity-80">
        <li className="pt-2">
          Web developer and entrepreneur based in Caracas, Venezuela
        </li>
        <li className="pt-2">
          Typescript, React, Next JS, Astro, Django, Supabase, SQL, Redis,
          Tailwind...
        </li>
        <li className="pt-2">
          4 years as a Netsuite Developer in Kavak.com
        </li>
        <li className="pt-2">Love to travel</li>
        <li className="pt-2">Sports fan</li>
      </ul>
    </div>
  )
}

export default Presentation
