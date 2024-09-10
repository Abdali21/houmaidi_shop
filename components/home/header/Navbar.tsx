import SearchBox from '@/components/helper/SearchBox'
import ShopingCartButton from '@/components/helper/ShopingCartButton'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { HeartIcon, UserIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-[12vh] sticky top-0 z-[1] bg-white shadow-md'>
      <div className='flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full'>
        <Link href='/'>
          <Image src='/images/logo.png' alt='logo' width={150} height={150} />
        </Link>
        <div className='flex items-center space-x-6'>
          <SearchBox />
          <HeartIcon size={26} cursor={"pointer"} />
          <ShopingCartButton />

          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <UserIcon size={26} cursor={'pointer'} />
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
