import Image from 'next/image'
import TopMenuItem from './TopMenuItem'
import Link from 'next/link'

export default function TopMenu() {
    return (
        <div className="flex justify-between items-center h-[60px] z-30">
            <div className="flex items-center">
                <Link href={'/'} className="flex flex-row items-center">
                    <Image src={'/img/logo.png'} alt='logo' width={0} height={0} sizes='100vh'
                        className="w-auto h-auto max-w-[70px] max-h-[70px] pl-2"/>
                    <Image src={'/img/logoText.png'} alt='logo text' width={0} height={0} sizes='100vh'
                        className="w-auto h-[60%] pl-6"/>
                </Link>
            </div>
            <div className="flex items-center">
                <TopMenuItem title='Home' pageRef='/'/>
                <TopMenuItem title='Restaurants' pageRef='/restaurants'/>
                <TopMenuItem title='Reservations' pageRef='/reservations'/>

                <Link href={'/user'}>
                    <Image src={'/img/profile.png'} alt='logo text' width={0} height={0} sizes='100vh'
                        className="w-auto h-auto max-w-[60px] max-h-[60px] object-contain pl-2 pr-2"/>
                </Link>
            </div>
        </div>
    )
}