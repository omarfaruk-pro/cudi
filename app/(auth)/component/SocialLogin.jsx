import googleIcon from '@/app/assets/images/google.png'
import appleIcon from '@/app/assets/images/apple.png'
import facebookIcon from '@/app/assets/images/facebook.png'
import Image from 'next/image'

export default function SocialLogin() {
    return (
        <>
            <div className="flex justify-center items-center gap-10">
                <button className='cursor-pointer'>
                    <Image src={googleIcon} alt="Google" className='h-12 w-auto' />
                </button>
                <button className='cursor-pointer'>
                    <Image src={appleIcon} alt="Apple" className='h-12 w-auto' />
                </button>
                <button className='cursor-pointer'>
                    <Image src={facebookIcon} alt="Facebook" className='h-12 w-auto' />
                </button>
            </div>
        </>
    )
}
