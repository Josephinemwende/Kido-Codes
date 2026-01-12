interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}
const TestimonialCard = ({ quote, name, role }: TestimonialCardProps) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
      <p className="text-gray-700 italic">“{quote}”</p>

      <div className="mt-4">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
};
export default TestimonialCard;