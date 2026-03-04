import googleIcon from '@/app/assets/images/google.png'
import appleIcon from '@/app/assets/images/apple.png'
import facebookIcon from '@/app/assets/images/facebook.png'
import Image from 'next/image'

export default function SocialLogin() {
    return (
        <>
            <div className="flex justify-center items-center gap-12">
                <button>
                    <Image src={googleIcon} alt="Google" className='w-14.5' />
                </button>
                <button>
                    <Image src={appleIcon} alt="Apple" className='w-11.5' />
                </button>
                <button>
                    <Image src={facebookIcon} alt="Facebook" className='w-15' />
                </button>
            </div>
        </>
    )
}
