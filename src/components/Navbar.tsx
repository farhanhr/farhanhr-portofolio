
const HomeIcon = () => (
    <i className="ri-home-2-line ri-lg"></i>
);

const NotesIcon = () => (
    <i className="ri-code-s-slash-line ri-lg"></i>
);

const GithubIcon = () => (
    <i className="ri-github-fill ri-lg"></i>
);

const LinkedInIcon = () => (
    <i className="ri-linkedin-fill ri-lg"></i>
);


const Navbar = () => {

    const navItems = [
        { name: 'Home', icon: HomeIcon, href: '/' },
        { name: 'Projects', icon: NotesIcon, href: '#' }
    ];

    const socialItems = [
        { name: 'GitHub', icon: GithubIcon, href: '#' },
        { name: 'LinkedIn', icon: LinkedInIcon, href: '#' },
    ]

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
            <div
                className="
          flex items-center space-x-2
          backdrop-blur-md rounded-full px-4 py-2
          shadow-lg bg-gray-800/70 shadow-black/30
          border border-gray-700
        "
            >
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : '_self'}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="
                        p-2 rounded-full
                        text-gray-300 hover:text-blue-400
                        hover:bg-gray-700
                        transition-colors duration-200
                        flex items-center justify-center
                        transform-gpu
                        "
                        title={item.name}
                    >
                        <item.icon />
                    </a>
                ))}
                 <div className="w-px h-6 bg-gray-600 mx-1"></div>
                {socialItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : '_self'}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="
                        p-2 rounded-full
                        text-gray-300 hover:text-blue-400
                        hover:bg-gray-700
                        transition-colors duration-200
                        flex items-center justify-center
                        "
                        title={item.name}
                    >
                        <item.icon />
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;