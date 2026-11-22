import StatCard from "../components/StatCard";
import SalesOverview from "../components/SalesOverview";
import RecentOrders from "../components/RecentOrders";

function DashboardPage() {
    return (
        <div>
            <header className="flex item-center justify-between mb-8">
                <div>
                    <h1 className="text-2x1 font-bold text-gray-900">
                        Dashboard
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Welcome back to Koffee & Co.
                    </p>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

                <div className="md:col-span-2">
                  <SalesOverview />
                </div>

                <div className="flex flex-col gap-4"></div>
                  <StatCard 
                    title="Most Ordered"
                    value="Arabica"
                    description="Popular coffee variety"
                />
                
                <StatCard
                  title="Out of Stock"
                  value="-"
                  description="Stock status"
                />
            </div>
            <RecentOrders />
        </div>
    );
}

export default DashboardPage;