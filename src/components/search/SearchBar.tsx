export default function SearchBar() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <input
        type="text"
        placeholder="Search Toyota, Nissan, Harrier..."
        className="w-full border rounded-lg p-4"
      />
    </div>
  );
}