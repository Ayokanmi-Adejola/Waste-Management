
const WasteStats = () => {
  const stats = [
    {
      value: "21M",
      label: "Tons of waste generated annually in Nigeria",
    },
    {
      value: "68%",
      label: "of Nigerians lack access to proper waste disposal",
    },
    {
      value: "12%",
      label: "Recycling rate across the country",
    },
    {
      value: "500+",
      label: "Informal waste collectors on our platform",
    },
  ];

  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <div className="absolute inset-0 bg-white opacity-10 rounded-lg transform -rotate-3"></div>
              <div className="relative p-6">
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-primary-50">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WasteStats;
