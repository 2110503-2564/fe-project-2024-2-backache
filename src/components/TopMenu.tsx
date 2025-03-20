import Image from 'next/image'
import TopMenuItem from './TopMenuItem'

export default function TopMenu() {
    return (
        <div className="flex items-center h-[60px] z-30">
            <Image src={'/img/logo.png'} className="w-auto h-[70%] pl-3"
                alt='logo' width={0} height={0} sizes='100vh'/>
            <Image src={'/img/logoText.png'} className="w-auto h-[60%] pl-3"
                alt='logo text' width={0} height={0} sizes='100vh'/>
        </div>
        /*
        <TopMenuItem title='Booking' pageRef='/booking'/>
        */
    )
}