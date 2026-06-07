export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-700 text-white font-bold">
        GN
      </div>

      <div>
        <p className="font-bold text-green-900">Gilfport Nutrition</p>
        <p className="text-xs text-gray-500">
          Healthy Energy • Better Nutrition
        </p>
      </div>
    </div>
  );
}
