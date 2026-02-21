import { FaInstagram } from "react-icons/fa";
import { TbBrandTelegram, TbBrandLinkedin } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";

const socialLinks = [
    {
        href: "https://instagram.com/uluumbch",
        icon: FaInstagram,
        event: "instagram button",
    },
    {
        href: "https://github.com/uluumbch",
        icon: FiGithub,
        event: "github button",
    },
    {
        href: "https://linkedin.com/in/bachrul-uluum",
        icon: TbBrandLinkedin,
        event: "linkedin button",
        size: "1.15em",
    },
    {
        href: "https://t.me/uluumbch",
        icon: TbBrandTelegram,
        event: "telegram button",
    },
];

const SocialLinks = () => {
    return (
        <div className="text-slate-900 flex pt-4 px-8 justify-center gap-4">
            {socialLinks.map((link) => (
                <a
                    key={link.event}
                    className="p-3 bg-white border-4 border-slate-900 drop-shadow-[4px_4px_0px_black] transition-all duration-200 hover:drop-shadow-none hover:translate-x-1 hover:translate-y-1 text-3xl"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-umami-event={link.event}
                >
                    <link.icon size={link.size} />
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
