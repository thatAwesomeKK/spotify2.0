/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { getProviders, signIn } from 'next-auth/react'

function login({ providers }) {
  return (
    <div className='flex flex-col items-center justify-center bg-black min-h-screen w-full'>
      <img className='w-52 mb-5' src='https://links.papareact.com/9xl' alt='' />

      {/* Getting all the Login Providers */}
      {Object.values(providers).map((provider, index) => (
        <div key={index}>
          <button className='bg-[#18D860] p-3 rounded-2xl text-white' onClick={() => { signIn(provider.id, { callbackUrl: '/' }) }}>Login with {provider.name}</button>
        </div>
      ))}

    </div>
  )
}

export default login

//using server side rendering to fetch the login providers
export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    }
  }
}