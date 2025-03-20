import styles from './page.module.css'
import ProfileMenu from '@/components/ProfileMenu';
import EditingMenu from '@/components/EditingMenu';

export default function Editing() {
    return (
        <main className="bg-[#D40303] h-screen">
            <div className='flex justify-left p-10'>
                <div className='pt-10'>
                    <ProfileMenu/>     
                </div>
                 
                <div className='ml-10'>
                    <EditingMenu/>
                </div>      
            </div>

        </main>
    );
}