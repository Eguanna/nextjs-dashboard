import { Card } from "../ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices"
import { lusitana } from "@/app/ui/fonts";
import { fetchLatestInvoices, fetchCardData, fetchRevenue } from "@/app/lib/data";

export default async function Page() {
    const revenue = await fetchRevenue
    const latestInvoices = await fetchLatestInvoices();
    const {
        numberOfInvoices,
        numberOfCustomers,
        totalPaidInvoices,
        totalPendingInvoices,
    } = await fetchCardData();
    return (
       <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}></h1>
       </main> 
    // <p>Dashboard Page</p>
    );
}