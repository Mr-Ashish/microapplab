// components/Button.js
export default function Button({ href, children, variant }) {
  const baseClasses =
    "btn text-white shadow rounded-full px-6 py-3 transition duration-300";

  const variantClasses = {
    primary: "bg-color-7B6D8D hover:bg-color-8499B1",
    secondary: "bg-color-8499B1 hover:bg-color-A5C4D4",
  };

  return (
    <a href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </a>
  );
}
