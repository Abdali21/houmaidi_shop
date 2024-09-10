import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='w-full h-[calc(100vh-12vh)] flex justify-center flex-col'>
            <div className='w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12'>
                <div>
                    <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold uppercase'>
                        mega sale <span className='text-rose-600'>Special</span> offer up to
                        <span className='text-orange-500'> 60%</span> off
                    </h1>
                    <p className='text-sm lg:text-lg md:text-base text-black text-opacity-70'>
                        Unlock amazing discounts on top-quality products. Hurry,
                        these offers wont last long! Take advantage of incredible
                        savings and elevate your shopping experience today.
                    </p>
                    <div className="flex items-center mt-6 space-x-4">
                        <Button size={'lg'} className='bg-blue-500'>Shop Now</Button>
                        <Button size={'lg'}>Explore More</Button>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <Image
                        src="/images/hero.png"
                        alt='hero'
                        width={600}
                        height={600}
                        className='lg:w-[50%] lg:h-[50%] xl:w-[80%] xl:h-[80%]' />
                </div>
            </div>
        </div>
    )
}

export default Hero
