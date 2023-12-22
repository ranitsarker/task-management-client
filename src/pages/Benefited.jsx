const Benefited = () => {
  const userTypes = [
    {
      title: 'Developers',
      description: 'Managing tasks related to coding, testing, bug fixes, and project milestones. The application helps developers prioritize and track progress during software development.',
    },
    {
      title: 'Corporate Professionals',
      description: 'Organizing and delegating tasks related to corporate projects, meetings, presentations, and deadlines. The application facilitates effective communication and collaboration among team members.',
    },
    {
      title: 'Bankers',
      description: 'Creating tasks for client meetings, financial consultations, document submissions, and follow-ups. The application ensures a systematic approach to client relationship management for bankers.',
    },
    {
      title: 'Marketing Specialist',
      description: 'Planning and executing marketing campaigns, content creation, social media management, and analyzing campaign performance. The application helps marketing professionals stay organized and ensure timely execution of marketing strategies.',
    },
    {
      title: 'HR Manager',
      description: 'Managing recruitment processes, employee onboarding, training schedules, and performance reviews. The application supports HR managers in streamlining HR operations and enhancing employee management.',
    },
    {
      title: 'Educator',
      description: 'Planning lesson schedules, creating assignments, tracking student progress, and managing classroom activities. The task management system helps educators stay organized and maintain an effective teaching workflow.',
    },
    
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
