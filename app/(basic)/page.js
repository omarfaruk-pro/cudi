'use client';

import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
    const newSoundProducts = [
        { id: 1, title: 'New sound', price: '€35' },
        { id: 2, title: 'New sound', price: '€45' },
        { id: 3, title: 'New sound', price: '€55' },
        { id: 4, title: 'New sound', price: '€85' }
    ];

    const templateProducts = [
        { id: 1, title: '10 Must-Have Facebook Canvas Templates' },
        { id: 2, title: 'Facebook Ad Quick Album' },
        { id: 3, title: 'Portfolio 3D' },
        { id: 4, title: 'Green Dark Theme' },
        { id: 5, title: 'Dark Blue Tech' }
    ];

    const exploreProducts = Array.from({ length: 16 }, (_, i) => ({ id: i + 1 }));

    const musicProducts = [
        { id: 1, title: 'Beat wave', price: '€25' },
        { id: 2, title: 'Mixtape', price: '€25' },
        { id: 3, title: 'New sound', price: '€25' },
        { id: 4, title: 'Magnito', price: '€26' },
        { id: 5, title: 'MIX 8', price: '€25' }
    ];

    return (
        <>
            <div className="bg-theme-white">
                {/* Hero Section */}
                <section className="relative w-full h-96 bg-gradient-to-r from-black to-gray-900 overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">CHOSE YOUR BEST PRODUCT</h1>
                        <p className="text-sm md:text-base max-w-2xl mb-8 text-gray-200">
                            Sell or buy the best digital product, you can<br />find different style from different artist
                        </p>
                        <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
                            Découvrir
                        </button>
                    </div>
                </section>

                {/* New Sound Products Carousel */}
                <section className="px-10 py-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative group">
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={24}
                                slidesPerView={1}
                                navigation={{
                                    nextEl: '.swiper-sound-next',
                                    prevEl: '.swiper-sound-prev',
                                    enabled: true,
                                }}
                                breakpoints={{
                                    640: { slidesPerView: 2 },
                                    768: { slidesPerView: 3 },
                                    1024: { slidesPerView: 4 },
                                }}
                            >
                                {newSoundProducts.map(product => (
                                    <SwiperSlide key={product.id}>
                                        <div className="cursor-pointer hover:opacity-90 transition">
                                            <div className="bg-gray-400 rounded-lg h-40 mb-3 flex items-center justify-center">
                                                <div className="text-gray-600 text-4xl">🎵</div>
                                            </div>
                                            <p className="text-center text-dark font-semibold mb-1 text-sm">{product.title}</p>
                                            <p className="text-center text-dark font-bold text-sm">{product.price}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <button className="swiper-sound-prev absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition z-20 -translate-x-4">
                                <FaChevronLeft className="text-dark text-lg" />
                            </button>
                            <button className="swiper-sound-next absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition z-20 translate-x-4">
                                <FaChevronRight className="text-dark text-lg" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Templates Carousel */}
                <section className="px-10 py-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative group">
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={20}
                                slidesPerView={2}
                                navigation={{
                                    nextEl: '.swiper-template-next',
                                    prevEl: '.swiper-template-prev',
                                    enabled: true,
                                }}
                                breakpoints={{
                                    640: { slidesPerView: 3 },
                                    768: { slidesPerView: 4 },
                                    1024: { slidesPerView: 5 },
                                }}
                            >
                                {templateProducts.map(product => (
                                    <SwiperSlide key={product.id}>
                                        <div className="cursor-pointer hover:opacity-90 transition">
                                            <div className="bg-gray-400 rounded-lg h-32 mb-3 flex items-center justify-center">
                                                <div className="text-gray-600 text-2xl">📋</div>
                                            </div>
                                            <p className="text-center text-dark text-xs font-semibold line-clamp-2">{product.title}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <button className="swiper-template-prev absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition z-20 -translate-x-4">
                                <FaChevronLeft className="text-dark text-lg" />
                            </button>
                            <button className="swiper-template-next absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition z-20 translate-x-4">
                                <FaChevronRight className="text-dark text-lg" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Best Courses Section */}
                <section className="px-10 py-12">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-center text-2xl font-bold text-dark mb-8">Les meilleurs courses !</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Course 1 */}
                            <div className="relative group cursor-pointer overflow-hidden rounded-lg h-64">
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-600 bg-opacity-70"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <FaPlay className="text-6xl text-white opacity-80 group-hover:opacity-100 transition" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                                    <p className="text-white text-2xl font-bold">HOW TO START<br />STARTUP</p>
                                    <p className="text-gray-300 text-sm">ENTREPRENEUR GUIDE</p>
                                </div>
                            </div>

                            {/* Course 2 */}
                            <div className="relative group cursor-pointer overflow-hidden rounded-lg h-64">
                                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-600 bg-opacity-70"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <FaPlay className="text-6xl text-white opacity-80 group-hover:opacity-100 transition" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                                    <p className="text-white text-2xl font-bold">FULL MOOD</p>
                                    <p className="text-gray-300 text-sm">COVER BY<br />DANIEL JOHNSON - ACOUSTIC SESSION</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-8">
                            <Link href="#" className="text-primary font-semibold hover:underline">
                                Voir plus
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Explore More Products */}
                <section className="px-10 py-12">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-center text-2xl font-bold text-dark mb-8">Explorez plus des produit</h2>

                        <div className="rounded-3xl border-4 border-primary p-8 bg-primary bg-opacity-10">
                            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                                {exploreProducts.map(product => (
                                    <div key={product.id} className="aspect-square bg-gray-400 rounded-lg cursor-pointer hover:opacity-80 transition flex items-center justify-center">
                                        <div className="text-2xl">🎨</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Best Wave Music Section */}
                <section className="px-10 py-12">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-center text-2xl font-bold text-dark mb-8">Best wave music</h2>

                        <div className="relative group">
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={20}
                                slidesPerView={1}
                                navigation={{
                                    nextEl: '.swiper-music-next',
                                    prevEl: '.swiper-music-prev',
                                    enabled: true,
                                }}
                                breakpoints={{
                                    640: { slidesPerView: 2 },
                                    768: { slidesPerView: 3 },
                                    1024: { slidesPerView: 4 },
                                    1280: { slidesPerView: 5 },
                                }}
                            >
                                {musicProducts.map(product => (
                                    <SwiperSlide key={product.id}>
                                        <div className="cursor-pointer hover:opacity-90 transition">
                                            <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg h-40 mb-3 flex items-center justify-center">
                                                <FaPlay className="text-4xl text-white" />
                                            </div>
                                            <p className="text-center text-dark font-semibold text-sm mb-1">{product.title}</p>
                                            <p className="text-center text-dark font-bold text-sm">{product.price}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <button className="swiper-music-prev absolute left-0 top-1/2 -translate-y-1/2 bg-dark rounded-full p-2 shadow-md hover:shadow-lg transition text-white z-20 -translate-x-4">
                                <FaChevronLeft className="text-lg" />
                            </button>
                            <button className="swiper-music-next absolute right-0 top-1/2 -translate-y-1/2 bg-dark rounded-full p-2 shadow-md hover:shadow-lg transition text-white z-20 translate-x-4">
                                <FaChevronRight className="text-lg" />
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
