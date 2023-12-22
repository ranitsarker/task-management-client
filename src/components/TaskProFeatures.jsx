const TaskProFeatures = () => {
  return (
    <div className="bg-green-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-green-800">TaskPro: Your All-in-One Task Management Solution</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-green-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-700 mt-8">TaskPro is the ultimate task management application designed for professionals across diverse industries. Sign up today and experience the power of seamless organization, collaboration, and progress tracking!</p>
      </div>
    </div>
  );
};

const features = [
  {
    title: 'Intuitive Task Dashboard',
    description: 'Efficiently manage coding tasks, bug fixes, project milestones, and corporate projects. Delegate tasks seamlessly for effective team collaboration.'
  },
  {
    title: 'Agile Project Management',
    description: 'Implement Agile methodologies with user stories, sprint planning, and project boards for developers and corporate professionals.'
  },
  {
    title: 'Client Relationship Management (CRM)',
    description: 'Maintain client relationships by organizing tasks for client interactions, financial consultations, and compliance deadlines.'
  },
  {
    title: 'Marketing Campaign Planning',
    description: 'Plan and execute marketing campaigns with task organization and performance tracking for marketing specialists.'
  },
  {
    title: 'Human Resources Operations',
    description: 'Streamline HR operations, including recruitment, onboarding, training schedules, and strategic initiatives for HR managers.'
  },
  {
    title: 'Freelancer/Consultant Management',
    description: 'Efficiently manage multiple client projects, invoicing, and deadlines for freelancers and consultants.'
  },
  {
    title: "Educator's Task Organizer",
    description: 'Plan lesson schedules, create assignments, and track student progress for educators.'
  },
  {
    title: 'Event Coordination Platform',
    description: 'Organize events, manage vendor contracts, and oversee event timelines for event coordinators.'
  },
  {
    title: 'Sales Pipeline Management',
    description: 'Manage leads, customer interactions, and sales follow-ups for sales professionals.'
  },
];

export default TaskProFeatures;
