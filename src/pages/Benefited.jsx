const Benefited = () => {
  const userTypes = [
    {
      title: 'Developers',
      description: 'Enhance your coding skills and stay updated with the latest technologies.',
    },
    {
      title: 'Corporate Professionals',
      description: 'Optimize your workflow and stay organized with our productivity tools.',
    },
    {
      title: 'Bankers',
      description: 'Access financial tools and resources to streamline your banking tasks.',
    },
    // Add more user types as needed
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Who Can Benefit?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userTypes.map((userType, index) => (
            <div key={index} className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{userType.title}</h3>
              <p className="text-gray-600">{userType.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefited;
