function SalesOverview() {
    return (
        <div className="bg-[#4A1D16] text-[#F8EBCB] p-5 rounded-lg h-full">
            <h2 className="text-xl font-bold">
                Sales Overview
            </h2>

            <p className="text-3xl font-bold mt-2">
                Ksh 200,000
            </p>

            <p className="text-sm mt-1 text-[#E8D8B5]">
                Weekly Sales Performance
            </p>

            <div className="mt-6">
                <svg viewBox="0 0 300 120" className="w-full">
                    <polyline
                      points="10,100 65,75 115,90 170,35 225,65 285,15"
                      fill="none"
                      stroke="#F8EBCB"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
}

export default SalesOverview;