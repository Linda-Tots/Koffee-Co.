function Sidebar() {
    return (
        <aside className="w-64 min-h-screen bg-[#4A1F16] text-[#F8EBCB] p-6">
            <h1 className="text-2xl font-bold mb-10">
                Koffee & Co.
            </h1>

            <div className="relative mb-8">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-[#F8EBCB] text-[#4A1F16] placeholder-[#8B6B5C] rounded-lg py-3 pl-10 pr-3 outline-none focus:ring-[#C49A6C]"
                />
            </div>

            <nav className="flex flex-col gap-4">
                <a href="/" className="bg-[#6B3828] p-3 rounded-lg font-semibold">
                    Dashboard
                </a>

                <a href="/products" className="p-3 rounded-lg hover:bg-[#6B3828]">
                    Products
                </a>

                <a href="/add-product" className="p-3 rounded-lg hover:bg-[#6B3828]">
                    Add Product
                </a>

                <a href="/analytics" className="p-3 rounded-lg hover:bg-[#6B3828]">
                    Analytics
                </a>
            </nav>
        </aside>
    );
}

export default Sidebar;