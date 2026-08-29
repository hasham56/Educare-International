// EduCare logo ("eic | EduCare — Where Education Meets Care").
// The artwork is dark purple/charcoal on transparency, so it drops straight
// onto light surfaces; on dark surfaces pass `plate` to sit it on a white card.

export default function Logo({ className = 'h-10', plate = false }) {
  const img = (
    <img
      src="/educare-logo.png"
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
