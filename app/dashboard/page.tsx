import { Card } from "@/app/ui/dashboard/cards";
import DashboardSkeleton from "@/app/ui/skeletons";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { lusitana } from "@/app/ui/fonts";
import { fetchCardData, fetchLatestInvoices, fetchRevenue } from "@/app/lib/data";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";

export default async function Page() {
    // DB에서는 useEffect, useState, axios 등등을 쓰지 않고 가져온다?
    const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();
    const {
        numberOfInvoices,
        numberOfCustomers,
        totalPaidInvoices,
        totalPendingInvoices
    } = await fetchCardData();
    return (
    <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`} >Dashboard </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card title="collected" value={totalPaidInvoices} type="collected" />
            <Card title="pending" value={totalPendingInvoices} type="pending" />
            <Card title="invoices" value={numberOfInvoices} type="invoices" />
            <Card title="customers" value={numberOfCustomers} type="customers" />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            <RevenueChart revenue={revenue} />
            <LatestInvoices latestInvoices={latestInvoices} />
        </div>
        
    </main>
    );
}