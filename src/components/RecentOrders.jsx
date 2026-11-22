function RecentOrders() {
    return (
        <div className="mt-5 bg-[#4A1F16] rounded-lg p-6">
            <h2 className="text-xl font-bold text-[#F8EBCB] mb-5" >
                Recent Orders
            </h2>

            {/* Table headings */}
            <div className="grid grid-cols-4 gap-4 text-sm font-bold text-[#F8EBCB] px-3 pb-3">
                <p>Order ID</p>
                <p>Customer</p>
                <p>Product</p>
                <p>Status</p>
            </div>

            {/* First order */}
            <div className="grid grid-cols-4 gap-4 text-sm text-[#4A1F16] bg-[#F8EBCB] p-4 rounded-lg mb-3">
                <p>#001</p>
                <p>Customer 1</p>
                <p>Ethiopian Arabica</p>
                <p>Completed</p>
            </div>

            {/* Second Order */}
            <div className="grid grid-cols-4 gap-4 text-[#4A1F16] bg-[#F8EBCB] p-4 rounded-lg">
                <p>#002</p>
                <p>Customer 2</p>
                <p>Kenyan Arabica</p>
                <p>Pending</p>
            </div>
        </div>
    );
}

export default RecentOrders;