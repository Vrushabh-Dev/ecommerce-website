import { useEffect, useState } from "react"

const Hero = () => {

    const heroImages = [

        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",

        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",

        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",

        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",

        "https://images.unsplash.com/photo-1483985988355-763728e1935b",

        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",

        "https://images.unsplash.com/photo-1441986300917-64674bd600d8",

    ]

    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentImage((previousImage) => {

                return (previousImage + 1) % heroImages.length

            })

        }, 2000)

        return () => clearInterval(interval)

    }, [heroImages.length])

    return(

        <>

            <section
                className="relative min-h-[90vh] flex items-center overflow-hidden"
            >

                {/* BACKGROUND IMAGE */}

                <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-1000 scale-110"
                    style={{
                        backgroundImage: `url(${heroImages[currentImage]})`
                    }}
                ></div>

                {/* BLUR OVERLAY */}

                <div className="absolute inset-0  bg-black/50"></div>

                {/* CONTENT */}

                <div className="relative z-10 max-w-7xl mx-auto px-8">

                    <div className="max-w-3xl">

                        <p className="text-orange-400 font-semibold text-lg mb-4 uppercase tracking-[5px]">

                            Trending Collection 2026

                        </p>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">

                            Discover The Best Products For You

                        </h1>

                        <p className="text-gray-200 text-lg mt-6 leading-8">

                            Explore premium quality products with the latest trends and best prices. Upgrade your lifestyle with our exclusive collections.

                        </p>

                        {/* BUTTONS */}

                        <div className="flex gap-5 mt-10 flex-wrap">

                            <button className="bg-orange-500 text-white px-8 py-4 rounded-xl hover:bg-orange-600 transition duration-300 text-lg font-medium shadow-lg">

                                Shop Now

                            </button>

                            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition duration-300 text-lg font-medium">

                                Explore More

                            </button>

                        </div>

                    </div>

                </div>

            </section>

        </>

    )

}

export default Hero