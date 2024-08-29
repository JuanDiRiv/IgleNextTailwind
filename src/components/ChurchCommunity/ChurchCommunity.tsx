import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function ChurchCommunity() {
    return (
        <div className='text-center mx-auto  md:w-[70%] lg:w-[60%]'>
            <h2 className='font-bold text-2xl lg:text-4xl'>Church Community</h2>
            <p className='font-light pt-8 lg:text-lg pb-12 '>
                For Jesus said, Go, sell your possessions and give to the poor, and you will have treasure in heaven.” Truly he said and blindly we follow the words
                of the Savior. Our church community constantly contributes to the church fund that is being risen for charity purposes. In the meantime, our group
                of faithful volunteers organizes fundraising events to help the poor with essentials. For we know that whoever is kind to the poor lends to the Lord,
                and he will reward them for what they have done
            </p>
            

            <Carousel  showThumbs={true} autoPlay infiniteLoop>

                <div>
                    <Image className='filter grayscale' width={800} height={800} src="https://hosting.renderforestsites.com/images/5699226/135134/284fbfc4cc2e05fb0fe23adc053ac610.jpg" alt="Image 1" />

                </div>
                <div>
                    <Image className='filter grayscale' width={800} height={800} src="https://hosting.renderforestsites.com/images/5699226/135134/284fbfc4cc2e05fb0fe23adc053ac610.jpg" alt="Image 2" />

                </div>
                <div>
                    <Image className='filter grayscale' width={800} height={800} src="https://hosting.renderforestsites.com/images/5699226/135134/284fbfc4cc2e05fb0fe23adc053ac610.jpg" alt="Image 3" />

                </div>
            </Carousel>
        </div>
    )
}

export default ChurchCommunity