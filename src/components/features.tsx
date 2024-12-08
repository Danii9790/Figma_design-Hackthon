// components/Features.js
export default function Features() {
    const features = [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 2.25a7.5 7.5 0 10-7.5 7.5 7.5 7.5 0 007.5-7.5zm0 0V7.5m0 0H5.25"
            />
          </svg>
        ),
        title: "High Quality",
        description: "Crafted from top materials",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 3.75v2.25M14.25 3.75v2.25m-9 10.5h13.5a3 3 0 100-6H5.25a3 3 0 100 6zM6 16.5a3.75 3.75 0 11-3 0m15 0a3.75 3.75 0 11-3 0"
            />
          </svg>
        ),
        title: "Warranty Protection",
        description: "Over 2 years",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 19.5H4.5A2.25 2.25 0 012.25 17V5.25A2.25 2.25 0 014.5 3h15a2.25 2.25 0 012.25 2.25V17a2.25 2.25 0 01-2.25 2.25H9zm0 0v3"
            />
          </svg>
        ),
        title: "Free Shipping",
        description: "Order over $150",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 8.25c0-3.45-2.55-6-6-6s-6 2.55-6 6m12 0a5.99 5.99 0 01-2.25 4.69m-7.5 0A5.992 5.992 0 016 8.25m5.25 9h1.5v4.5m-6 0h9"
            />
          </svg>
        ),
        title: "24/7 Support",
        description: "Dedicated support",
      },
    ];
  
    return (
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 border rounded-lg bg-white shadow-md"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  