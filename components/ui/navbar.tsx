import {
    Menu,
    PaintRoller,
    Home,
    Brush,
    Wallpaper,
    Square,
    Layers,
    Grid,
    Sun,
} from "lucide-react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: React.ReactNode;
    items?: MenuItem[];
}

interface Navbar1Props {
    logo?: {
        url: string;
        src: string;
        alt: string;
    };
    menu?: MenuItem[];
    auth?: {
        login: {
            title: string;
            url: string;
        };
        signup: {
            title: string;
            url: string;
        };
    };
}

const Navbar1 = ({
    logo = {
        url: "/",
        src: "/logo-ideacolor.png",
        alt: "logo",
    },
    menu = [
        {
            title: "Pitture e Decorazioni",
            url: "#",
            items: [
                {
                    title: "Pitture per interni",
                    description: "Soluzioni per tinteggiare e decorare gli ambienti interni della tua casa.",
                    icon: <PaintRoller className="size-5 shrink-0" />,
                    url: "#",
                },
                {
                    title: "Pitture per esterni",
                    description: "Prodotti resistenti per proteggere e valorizzare le superfici esterne.",
                    icon: <Home className="size-5 shrink-0" />,
                    url: "#",
                },
                {
                    title: "Decorativi murali",
                    description: "Effetti decorativi e finiture artistiche per pareti uniche e personalizzate.",
                    icon: <Brush className="size-5 shrink-0" />,
                    url: "#",
                },
                {
                    title: "Carte da parati",
                    description: "Ampia scelta di carte da parati per personalizzare ogni ambiente.",
                    icon: <Wallpaper className="size-5 shrink-0" />,
                    url: "#",
                },
                {
                    title: "Cornici murali",
                    description: "Cornici decorative per valorizzare e rifinire le pareti.",
                    icon: <Square className="size-5 shrink-0" />,
                    url: "#",
                },
            ],
        },
        {
            title: "Edilizia e Finiture",
            url: "#",
            items: [
                {
                    title: "Cartongesso isolanti",
                    description: "Soluzioni in cartongesso e materiali isolanti per comfort e funzionalità.",
                    icon: <Layers className="size-5 shrink-0" />,
                    url: "#",
                },
                {
                    title: "Pavimenti",
                    description: "Rivestimenti e pavimenti per ogni esigenza estetica e tecnica.",
                    icon: <Grid className="size-5 shrink-0" />,
                    url: "#",
                },
            ],
        },
        {
            title: "Arredo e Complementi",
            url: "#",
            items: [
                {
                    title: "Tende da sole",
                    description: "Tende da sole per esterni, funzionali e di design.",
                    icon: <Sun className="size-5 shrink-0" />,
                    url: "#",
                },
                {
                    title: "Cornici su misura",
                    description: "Cornici personalizzate per ogni tipo di ambiente e stile.",
                    icon: <Square className="size-5 shrink-0" />,
                    url: "#",
                },
            ],
        },
        {
            title: "Verniciature Speciali",
            url: "#",
        },
        {
            title: "Creatività",
            url: "#",
        },
        {
            title: "Eventi",
            url: "#eventi",
        },
    ],
}: Navbar1Props) => {
    return (
        <section className="py-4">
            <div className="container">
                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center justify-between">
                    {/* Logo a sinistra */}
                    <div className="flex items-center">
                        <a href={logo.url} className="flex items-center gap-2">
                            <img
                                src={logo.src}
                                className="max-h-8 dark:invert"
                                alt={logo.alt}
                            />
                        </a>
                    </div>
                    {/* Menu a destra */}
                    <div className="flex items-center">
                        <NavigationMenu viewport={false}>
                            <NavigationMenuList>
                                {menu.map((item) => renderMenuItem(item))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div className="block lg:hidden">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a href={logo.url} className="flex items-center gap-2">
                            <img
                                src={logo.src}
                                className="max-h-8 dark:invert"
                                alt={logo.alt}
                            />
                        </a>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu className="size-4" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="overflow-y-auto bg-black text-white">
                                <SheetHeader>
                                    <SheetTitle>
                                        <a href={logo.url} className="flex justify-center gap-2">
                                            <img
                                                src={logo.src}
                                                className="max-h-8 dark:invert"
                                                alt={logo.alt}
                                            />
                                        </a>
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-6 p-4">
                                    <Accordion
                                        type="single"
                                        collapsible
                                        defaultValue={menu[0].title} // Aggiungi questa linea
                                        className="flex w-full flex-col gap-4"
                                    >
                                        {menu.map((item) => renderMobileMenuItem(item))}
                                    </Accordion>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </section>
    );
};

const renderMenuItem = (item: MenuItem) => {
    if (item.items) {
        return (
            <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[320px]">
                    {item.items.map((subItem) => (
                        <NavigationMenuLink asChild key={subItem.title}>
                            <SubMenuLink item={subItem} />
                        </NavigationMenuLink>
                    ))}
                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    }

    return (
        <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
                href={item.url}
                className="text-white hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
            >
                {item.title}
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
};

const renderMobileMenuItem = (item: MenuItem) => {
    if (item.items) {
        return (
            <AccordionItem key={item.title} value={item.title} className="border-b-0">
                <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
                    {item.title}
                </AccordionTrigger>
                <AccordionContent className="mt-2 p-2 space-y-2">
    {item.items.map((subItem) => (
        <SubMenuLink key={subItem.title} item={subItem} />
    ))}
</AccordionContent>
            </AccordionItem>
        );
    }

    return (
        <a key={item.title} href={item.url} className="text-md font-semibold">
            {item.title}
        </a>
    );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
    return (
        <a
            className="group hover:bg-muted w-full flex select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
            href={item.url}
        >
            <div className="text-white group-hover:text-black">{item.icon}</div>
            <div>
                <div className="text-white text-sm font-semibold group-hover:text-black">
                    {item.title}
                </div>
                {item.description && (
                    <p className="text-white text-sm leading-snug group-hover:text-black">
                        {item.description}
                    </p>
                )}
            </div>
        </a>
    );
};

export { Navbar1 };