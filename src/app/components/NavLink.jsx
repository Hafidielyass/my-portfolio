import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link href={href} className="group relative inline-block py-2.5">
      {/* base text (purple), fades and moves up on hover */}
      <span className="block text-foreground [text-shadow:none] transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:opacity-0 group-focus:-translate-y-0.5 group-focus:opacity-0">
        {title}
      </span>

      {/* hover text (white) shown above, appears and moves into place */}
      <span className="pointer-events-none absolute left-0 top-0 text-foreground [text-shadow:0_0_1px_rgba(255,255,255,1)] opacity-0 translate-y-0.5 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0">
        {title}
      </span>

      {/* underline that slides into place on hover */}
      <span className="pointer-events-none absolute left-0 right-0 bottom-0 h-[2px] w-full bg-accent opacity-0 translate-y-1 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0" />
    </Link>
  );
};

export default NavLink;
