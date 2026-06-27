// New EduCare logo ("eic | EduCare — Where Education Meets Care").
// The source jpeg has a near-white background, so on dark surfaces we sit it
// inside a soft white plate; on light surfaces it blends directly.

export default function Logo({ className = 'h-10', plate = false }) {
  const img = (
    <img
      src="/new_logo_trimmed.png"
      alt="EduCare — Where Education Meets Care"
      className={`${className} w-auto object-contain`}
      draggable={false}
    />
  );

  if (!plate) return img;

  return (
    <span className="inline-flex items-center bg-white rounded-xl px-3 py-2 shadow-sm">
      {img}
    </span>
  );
}
