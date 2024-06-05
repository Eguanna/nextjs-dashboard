import { Card } from "@/app/ui/dashboard/cards";
import DashboardSkeleton from "@/app/ui/skeletons";
import LatestInvoices from "../ui/dashboard/latest-invoices";
import { lusitana } from "../ui/fonts";
import { fetchRevenue } from "../lib/data";
import RevenueChart from "../ui/dashboard/revenue-chart";

export default async function Page() {
    const revenue = await fetchRevenue();
    return (
        // <DashboardSkeleton />
    // <p>Dashboard Page</p>
    <RevenueChart revenue={revenue} ></RevenueChart>
    );
}