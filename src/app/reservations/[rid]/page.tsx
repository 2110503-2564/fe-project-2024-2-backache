import ReservationPage from "@/components/ReservationPage";

export default function Home({params} : {params: {rid: string}}) {
    return (
        <main>
            <ReservationPage/>
        </main>
    )
}