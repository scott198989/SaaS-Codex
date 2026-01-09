import { cookies } from "next/headers";

export type Locale = "en" | "es";

export const localeCookie = "looplist_locale";

type Translations = {
  brand: string;
  nav: {
    features: string;
    how: string;
    pricing: string;
    login: string;
    signup: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  features: {
    title: string;
    items: Array<{ title: string; copy: string }>;
  };
  how: {
    title: string;
    steps: Array<{ title: string; copy: string }>;
  };
  useCases: {
    title: string;
    items: string[];
  };
  pricing: {
    title: string;
    note: string;
    plans: Array<{
      name: string;
      price: string;
      description: string;
      features: string[];
    }>;
  };
  footer: {
    tagline: string;
    privacy: string;
    support: string;
  };
};

const translations: Record<Locale, Translations> = {
  en: {
    brand: "LoopList",
    nav: {
      features: "Features",
      how: "How it works",
      pricing: "Pricing",
      login: "Sign in",
      signup: "Start free",
    },
    hero: {
      kicker: "Rotating checklists for everyday life",
      title: "Never wonder whose turn it is.",
      subtitle:
        "LoopList keeps chores, routines, and shared lists on a fair rotation with reminders scheduled in CDT.",
      ctaPrimary: "Start free",
      ctaSecondary: "See how it works",
    },
    features: {
      title: "Everything you need to keep lists fair.",
      items: [
        {
          title: "Auto-rotation",
          copy: "Set a rotation and LoopList assigns the next person automatically.",
        },
        {
          title: "Gentle reminders",
          copy: "Email nudges land exactly when tasks are due.",
        },
        {
          title: "Ready templates",
          copy: "Start fast with home, school, and small-team routines.",
        },
        {
          title: "Completion history",
          copy: "See what was done, by whom, and when.",
        },
      ],
    },
    how: {
      title: "Set up in minutes.",
      steps: [
        {
          title: "Create a list",
          copy: "Pick a template or build your own routine from scratch.",
        },
        {
          title: "Invite people",
          copy: "Add family, roommates, or coworkers and define the rotation.",
        },
        {
          title: "Stay on track",
          copy: "Everyone receives reminders and checks tasks off as they go.",
        },
      ],
    },
    useCases: {
      title: "Made for real life.",
      items: [
        "Families sharing chores",
        "Roommates splitting responsibilities",
        "Small teams running opening and closing lists",
      ],
    },
    pricing: {
      title: "Wallet-friendly pricing.",
      note: "Launch pricing is subject to validation and may adjust.",
      plans: [
        {
          name: "Free",
          price: "$0",
          description: "For trying out one shared list.",
          features: ["1 list", "3 members", "Email reminders"],
        },
        {
          name: "Plus",
          price: "$3 / month",
          description: "For households and small teams.",
          features: ["Unlimited lists", "Up to 12 members", "Templates + history"],
        },
      ],
    },
    footer: {
      tagline: "Fair rotations. Friendly reminders.",
      privacy: "Privacy",
      support: "Support",
    },
  },
  es: {
    brand: "LoopList",
    nav: {
      features: "Funciones",
      how: "Como funciona",
      pricing: "Precios",
      login: "Iniciar sesion",
      signup: "Empieza gratis",
    },
    hero: {
      kicker: "Listas rotativas para la vida diaria",
      title: "Nunca mas preguntes a quien le toca.",
      subtitle:
        "LoopList organiza tareas, rutinas y listas compartidas con rotacion justa y recordatorios en CDT.",
      ctaPrimary: "Empieza gratis",
      ctaSecondary: "Ver como funciona",
    },
    features: {
      title: "Todo lo necesario para repartir tareas.",
      items: [
        {
          title: "Rotacion automatica",
          copy: "Configura la rotacion y LoopList asigna a la siguiente persona.",
        },
        {
          title: "Recordatorios suaves",
          copy: "Correos oportunos para completar tareas a tiempo.",
        },
        {
          title: "Plantillas listas",
          copy: "Empieza con rutinas de casa, escuela o equipos pequenos.",
        },
        {
          title: "Historial claro",
          copy: "Mira que se hizo, quien lo hizo y cuando.",
        },
      ],
    },
    how: {
      title: "Listo en minutos.",
      steps: [
        {
          title: "Crea una lista",
          copy: "Elige una plantilla o arma tu rutina desde cero.",
        },
        {
          title: "Invita personas",
          copy: "Agrega familia, companeros o colegas y define la rotacion.",
        },
        {
          title: "Mantente al dia",
          copy: "Todos reciben recordatorios y marcan tareas completadas.",
        },
      ],
    },
    useCases: {
      title: "Pensado para la vida real.",
      items: [
        "Familias compartiendo quehaceres",
        "Roommates repartiendo responsabilidades",
        "Equipos pequenos con listas de apertura y cierre",
      ],
    },
    pricing: {
      title: "Precios accesibles.",
      note: "Los precios de lanzamiento pueden ajustarse tras validar demanda.",
      plans: [
        {
          name: "Gratis",
          price: "$0",
          description: "Para probar una lista compartida.",
          features: ["1 lista", "3 miembros", "Recordatorios por correo"],
        },
        {
          name: "Plus",
          price: "$3 / mes",
          description: "Para hogares y equipos pequenos.",
          features: ["Listas ilimitadas", "Hasta 12 miembros", "Plantillas e historial"],
        },
      ],
    },
    footer: {
      tagline: "Rotaciones justas. Recordatorios amables.",
      privacy: "Privacidad",
      support: "Soporte",
    },
  },
};

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get(localeCookie)?.value;
  return value === "es" ? "es" : "en";
}

export function getTranslations(locale: Locale) {
  return translations[locale];
}
