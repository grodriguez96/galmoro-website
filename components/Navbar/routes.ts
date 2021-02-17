export interface route {
  id: string;
  href: string;
  name: string;
  class?: string;
}

export const routes: Array<route> = [
  { id: "1", href: "", name: "Sobre Mi", class: "fas fa-user" },
  {
    id: "2",
    href: "portafolio",
    name: "Portafolio",
    class: "fas fa-laptop-code",
  },
  { id: "3", href: "curriculo", name: "Curriculo", class: "fas fa-file-alt" },
  { id: "4", href: "blog", name: "Blog", class: "fas fa-blog" },
  {
    id: "5",
    href: "contacto",
    name: "Contacto",
    class: "fas fa-envelope-open-text",
  },
];
