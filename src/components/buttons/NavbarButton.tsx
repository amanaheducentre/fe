import Link from "next/link";

export default function NavbarButton({
  text,
  to,
  additionalClasses = "",
}: {
  text: string;
  to: string;
  additionalClasses: string;
}) {
  return (
    <Link href={to} className={`${additionalClasses} transition-colors duration-200`}>
      {text}
    </Link>
  );
}
