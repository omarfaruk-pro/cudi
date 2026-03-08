'use client';

import { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { FaCirclePlus } from 'react-icons/fa6';
import BackButton from '@/app/plan/Back';
import Image from 'next/image';

export default function ProductUploadPage() {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        titre: '',
        category: '',
        description: '',
        prix: '',
        remise: ''
    });

    const [profileImage, setProfileImage] = useState(null);
    const [coverImage, setCoverImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleProfileImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setProfileImage(event.target?.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCoverImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setCoverImage(event.target?.result);
                setPreviewUrl(event.target?.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { formData, profileImage, coverImage });
        // Handle form submission here
    };

    return (
        <div className="min-h-screen bg-white text-dark">
            {/* Header with Back Button */}
            <BackButton></BackButton>
            <div className="px-10 pb-10">
                <div className="max-w-xl mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Profile Picture Section */}
                            <div className="flex flex-col items-center mb-8 sm:col-span-2">
                                <label htmlFor="profile-upload" className="cursor-pointer relative mb-4">
                                    <div className="w-47.5 aspect-square rounded-full bg-gray-700 flex items-center justify-center border-2 border-dashed border-gray-600 hover:border-primary transition overflow-hidden">
                                        {profileImage ? (
                                            <Image src={profileImage} width={80} height={80} alt="Profile" className="w-full h-full object-cover" />
                                        ) : (
                                            <FaCamera className="text-4xl text-gray-500" />
                                        )}
                                    </div>
                                    <input
                                        id="profile-upload"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleProfileImageChange}
                                        className="hidden"
                                    />
                                </label>
                            </div>

                            {/* Nom Field */}
                            <div className='sm:col-span-2'>
                                <input
                                    type="text"
                                    name="nom"
                                    placeholder="Nom"
                                    value={formData.nom}
                                    onChange={handleInputChange}
                                    className="input_design border-black! text-black! rounded-xl! py-4!"
                                />
                            </div>

                            {/* Prenom Field */}
                            <div className='sm:col-span-2'>
                                <input
                                    type="text"
                                    name="prenom"
                                    placeholder="Prenom"
                                    value={formData.prenom}
                                    onChange={handleInputChange}
                                    className="input_design border-black! text-black! rounded-xl! py-4!"
                                />
                            </div>

                            {/* Titre Field */}
                            <div className='sm:col-span-2'>
                                <input
                                    type="text"
                                    name="titre"
                                    placeholder="Titre"
                                    value={formData.titre}
                                    onChange={handleInputChange}
                                    className="input_design border-black! text-black! rounded-xl! py-4!"
                                />
                            </div>
                            <div className="flex gap-2.5 justify-center sm:col-span-2 py-4">
                                {/* Cover Image Upload */}
                                <label htmlFor="cover-upload" className="cursor-pointer shrink-0 text-center">
                                    <div className="w-36 mx-auto aspect-square rounded-xl flex items-center justify-center bg-gray-200 mb-2">
                                        <div className="text-center">
                                            <FaCirclePlus className='text-3xl text-black' />
                                        </div>
                                    </div>
                                    <input
                                        id="cover-upload"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleCoverImageChange}
                                        className="hidden"
                                    />
                                    <p className="text-sm text-black/50">Ajouter une couverture</p>
                                    <p className="text-sm text-black/50">1680 x 1680 px</p>
                                </label>

                                {/* Cover Image Preview */}
                                {previewUrl && (
                                    <div className="rounded-lg overflow-hidden">
                                        <Image
                                            src={previewUrl}
                                            alt="Cover Preview"
                                            width={270}
                                            height={270}
                                            className="w-67.5 aspect-square rounded-lg object-cover"
                                        />
                                    </div>
                                )}
                            </div>
                            {/* Description Field */}
                            <div className="sm:col-span-2">
                                <textarea
                                    name="description"
                                    placeholder="Description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    className="input_design block border-black! text-black! rounded-xl! py-4! resize-none"
                                    rows="14"
                                />
                            </div>

                            {/* Category Field */}
                            <div>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className="input_design border-black! text-black! rounded-xl! py-4!"
                                >
                                    <option value="">Catégorie</option>
                                    <option value="courses">Courses</option>
                                    <option value="ebooks">E-Books</option>
                                    <option value="music">Music</option>
                                    <option value="photos">Photos</option>
                                    <option value="software">Software</option>
                                    <option value="template">Templates</option>
                                    <option value="ui-kits">UI Kits</option>
                                </select>
                            </div>

                            {/* Prix Field */}
                            <div>
                                <input
                                    type="number"
                                    name="prix"
                                    placeholder="Prix"
                                    value={formData.prix}
                                    onChange={handleInputChange}
                                    className="input_design border-black! text-black! rounded-xl! py-4!"
                                    step="0.01"
                                />
                            </div>

                            {/* Remise % Field */}
                            <div className='sm:col-span-2'>
                                <input
                                    type="number"
                                    name="remise"
                                    placeholder="Remise %"
                                    value={formData.remise}
                                    onChange={handleInputChange}
                                    className="input_design border-black! text-black! rounded-xl! py-4!"
                                    min="0"
                                    max="100"
                                />
                            </div>


                            {/* Submit Button */}
                            <button type="submit" className="button_design rounded-xl! py-4.5! hover:bg-black! hover:text-white! sm:col-span-2">Enregistrer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}