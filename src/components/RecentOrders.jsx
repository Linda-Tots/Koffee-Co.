function RecentOrders() {
    return (
        <div className="mt-8 bg-white rounded-lg p-6 border border-gray-200">
            <h2 className="text-lg font-bold text-[#4A1F16] mb-5" >
                Recent Orders
            </h2>

            {/* Table headings */}
            <div className="grid grid-cols-4 gap-4 text-sm font-bold text-gray-500 border-b pb-3">
                <p>Order ID</p>
                <p>Customer</p>
                <p>Product</p>
                <p>Status</p>
            </div>

            {/* First order */}
            <div className="grid grid-cols-4 gap-4 text-sm tex-gray-700 py-4 border-gray-100">
                <p>#001</p>
                <p>Customer 1</p>
                <p>Ethiopian Arabica</p>
                <p>Completed</p>
            </div>

            {/* Second Order */}
            <div className="grid grid-cols-4 gap-4 text-sm text-gray-700 py-4">
                <p>#002</p>
                <p>Customer 2</p>
                <p>Kenyan Arabica</p>
                <p>Pending</p>
            </div>
        </div>
    );
}

export default RecentOrders;