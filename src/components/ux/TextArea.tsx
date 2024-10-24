// components/Input/TextArea.tsx
interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  ...props
}) => (
  <div className="mb-4">
    <label className="block text-sm font-medium mb-2">{label}</label>
    <textarea
      className={`w-full px-3 py-2 bg-gray-700 rounded-md border ${
        error ? "border-red-500" : "border-gray-600"
      }`}
      {...props}
    />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);
