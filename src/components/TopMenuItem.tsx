import Link from 'next/link';

export default function TopMenuItem ({title, pageRef} : {title: string, pageRef: string}) {

    return (
        <Link href={pageRef}
            className='text-center text-[#d42d2d] text-[19px] font-semibold mx-5 my-auto hover:underline hover:text-myred' >
                {title}
        </Link>
    )
}