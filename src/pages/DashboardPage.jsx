import StatCard from "../components/StatCard";
import SalesOverview from "../components/SalesOverview";
import RecentOrders from "../components/RecentOrders";

function DashboardPage() {
    return (
        <div className="w-full max-w-6xl mx-auto">

            <header className="mb-8">
                    <h1 className="text-3xl font-bold text-[#4A1F16]">
                        Dashboard
                    </h1>
                    <p className="text-base text-gray-500 mt-1">
                        Welcome back to Koffee & Co.
                    </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5 min-h-[320px]">

                <div className="min-h-[320px]">
                  <SalesOverview />
                </div>

                <div className="grid grid-rows-2 gap-5 min-h-[320px]">
                  <StatCard 
                    title="Most Ordered"
                    value="Arabica"
                    description="Popular coffee variety"
                />
                
                <StatCard
                  title="Out of Stock"
                  value="7"
                  description="Stock status"
                />
              </div>
             </div>

            <div className="mt-5">
            <RecentOrders />
            </div>
      </div>
    );
}

export default DashboardPage;