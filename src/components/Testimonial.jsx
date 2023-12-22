const Testimonials = () => {
  const testimonialsData = [
    {
      content:
        "TaskZen has transformed the way our team collaborates on projects. The intuitive interface and powerful features make task management a breeze. We have seen a significant improvement in productivity since using TaskZen.",
      author: "John Doe",
      position: "Senior Project Manager, XYZ Corporation",
    },
    {
      content:
        "I highly recommend TaskZen for its simplicity and effectiveness. It has become an integral part of our project management workflow. The drag-and-drop functionality makes organizing tasks a joy.",
      author: "Jane Smith",
      position: "Product Development Lead, ABC Solutions",
    },
    {
      content:
        "TaskZen is a game-changer. It provides a centralized platform for task management, making it easy to keep track of project progress. The customizable boards and intuitive design are unmatched.",
      author: "Alex Johnson",
      position: "CEO, InnovateTech",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">What Our Users Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-xl text-gray-800 mb-4">{testimonial.content}</p>
              <div className="flex items-center justify-center">
                <div>
                  <p className="text-gray-600 font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
