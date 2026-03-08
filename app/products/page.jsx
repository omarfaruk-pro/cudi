import { FaStar, FaShoppingCart } from 'react-icons/fa';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ProductPage() {
    const reviews = [
        {
            name: 'Sophie Marlin',
            text: 'Franchement super pratique ! Le template est clair, facile à utiliser et ma vraiment aidée à mieux organiser mes finances. Je recommande à 100 %.',
            rating: 5
        },
        {
            name: 'Sophie Marlin',
            text: 'Très professionnel et bien structuré, j&apos;a économisé beaucoup de temps grâce à ce modèle. Support quasi excellent.',
            rating: 5
        },
        {
            name: 'Sophie Marlin',
            text: 'L&apos;outil est ce que je cherchais ! Simple, efficace et bien pensé. Même sans être expert, j&apos;ai pu l&apos;utiliser facilement.',
            rating: 5
        },
        {
            name: 'Sophie Marlin',
            text: 'Completes et modernes. On voit que c&apos;est bien travaillé. Ça m&apos;aide énormément dans l&apos;organisation quotidienne.',
            rating: 5
        }
    ];

    const relatedProducts = [
        {
            id: 1,
            title: 'Initiation au montage en cinérama diapo',
            subtitle: 'Heures détaillées et socio de cine',
            price: '62.30 €'
        },
        {
            id: 2,
            title: 'Initiation au montage en cinérama diapo',
            subtitle: 'Heures détaillées et socio de cine',
            price: '40.95 €'
        },
        {
            id: 3,
            title: 'Initiation au montage en cinérama diapo',
            subtitle: 'Heures détaillées et socio de cine',
            price: '25.00 €'
        }
    ];

    return (
        <>
        <Header />
        <div className="px-10 pt-10 pb-10">
            {/* Product Section */}
            <div className="mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Product Image */}
                    <div className="rounded-lg overflow-hidden bg-gray-700 flex items-center justify-center min-h-96">
                        <FaShoppingCart className="text-6xl text-gray-500" />
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col justify-center">
                        <h1 className="text-3xl font-bold mb-4">Social Media Content Planner</h1>

                        {/* Store Badge */}
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs">📦</div>
                            <span className="text-sm font-medium">JAMES STORE</span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400" size={18} />
                                ))}
                            </div>
                            <span className="text-sm text-gray-300">29 reviews</span>
                        </div>

                        {/* Price */}
                        <div className="mb-6">
                            <p className="text-4xl font-bold text-theme-white">€25</p>
                        </div>

                        {/* Description Label */}
                        <div className="mb-4">
                            <h3 className="text-primary font-semibold mb-2">Description</h3>
                            <p className="text-sm font-semibold text-gray-300 mb-3">90-Day Content Strategy Planner</p>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Plan and organize your Instagram, TikTok, or YouTube posts with a structured 3-month calendar. Includes content ideas, posting tracker, and engagement analytics sheet.
                            </p>
                        </div>

                        {/* Add to Cart Button */}
                        <button className="button_design w-full mt-8">
                            Ajouter au panier
                        </button>

                        {/* Thumbnail Images */}
                        <div className="flex gap-3 mt-6">
                            <div className="w-16 h-16 rounded bg-gray-700 flex items-center justify-center border border-gray-600 cursor-pointer hover:border-primary transition">
                                <FaShoppingCart className="text-2xl text-gray-500" />
                            </div>
                            <div className="w-16 h-16 rounded bg-gray-700 flex items-center justify-center border border-gray-600 cursor-pointer hover:border-primary transition">
                                <FaShoppingCart className="text-2xl text-gray-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="mb-16 border-t border-gray-700 pt-12">
                <h2 className="text-2xl font-bold text-primary mb-2">Avis sur cet article (20)</h2>

                {/* Rating Summary */}
                <div className="flex items-center gap-8 mb-10 py-6">
                    <div>
                        <div className="flex items-baseline gap-2">
                            <FaStar className="text-yellow-400" size={24} />
                            <span className="text-3xl font-bold">4.8/5</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">moyennes de l&apos;article</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <span className="text-sm font-semibold">4.8</span>
                        <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-yellow-400" style={{ width: '96%' }}></div>
                        </div>
                    </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-6">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="border-b border-gray-700 pb-6 last:border-b-0">
                            <div className="flex gap-4">
                                {/* User Avatar */}
                                <div className="w-10 h-10 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                                    <FaShoppingCart className="text-gray-300" size={18} />
                                </div>

                                {/* Review Content */}
                                <div className="flex-1">
                                    <p className="font-semibold text-sm mb-2">{review.name}</p>
                                    <p className="text-sm text-gray-300 mb-3">{review.text}</p>

                                    {/* Stars */}
                                    <div className="flex">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <FaStar key={i} className="text-yellow-400" size={14} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Related Products Section */}
            <div className="border-t border-gray-700 pt-12">
                <h2 className="text-2xl font-bold text-primary mb-8">Autre article</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {relatedProducts.map((product) => (
                        <div key={product.id} className="rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition">
                            {/* Product Image Placeholder */}
                            <div className="bg-gray-700 aspect-square flex items-center justify-center mb-4 rounded-lg">
                                <FaShoppingCart className="text-5xl text-gray-500" />
                            </div>

                            {/* Product Info */}
                            <h3 className="font-semibold text-sm mb-2">{product.title}</h3>
                            <p className="text-xs text-gray-400 mb-4">{product.subtitle}</p>
                            <p className="font-semibold text-sm text-theme-white">{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}