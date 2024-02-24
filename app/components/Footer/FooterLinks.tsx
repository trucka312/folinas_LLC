import Link from "next/link";
import Heading from "../Commons/Heading";
import { useRouter } from "next/navigation";

interface FooterLinkItemProps {
  label: string;
  href: string;
}

interface FooterLinksProps {
  items: FooterLinkItemProps[];
  title?: string;
}

const FooterLinks = ({ items, title }: FooterLinksProps) => {
  const router = useRouter();
  return (
    <div className="mt-[29px]">
      {title && <Heading headingTag="h4" heading={title} />}
      <ul id="footer-links" className="mt-5">
        {items.map((item, index) => (
          <li key={index} className="mb-2 last:mb-0">
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <div className="block md:hidden">
        <p
          onClick={() => {
            router.push("/policy");
          }}
          className="cursor-pointer underline"
        >
          Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default FooterLinks;
