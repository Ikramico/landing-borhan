export default function FormField({ label, name, type = 'text', value, onChange, placeholder, required }) {
  return (
    <div className="mb-4">
      <label className="block text-xs font-medium text-[#1a1a1a] mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors bg-white"
      />
    </div>
  )
}