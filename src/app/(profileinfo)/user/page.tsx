import styles from './page.module.css'
import ProfileMenu from '@/components/ProfileMenu';

export default function Profile() {
    return (
        <main className="bg-[#D40303] h-screen">
            <div className='flex justify-center p-20'>
                <ProfileMenu/>    
            </div>
            
        </main>
    );
}