import Link from 'next/link';

export default function TopMenuItem ({title, pageRef} : {title: string, pageRef: string}) {
    return (
        <Link 
        className='text-center text-myred text-lg font-semibold mx-5 my-auto hover:underline' 
        href={pageRef}>
            {title}
        </Link>
    )
}