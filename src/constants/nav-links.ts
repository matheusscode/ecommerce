export type NavLink = {
  label?: string;
  sub_links?: NavLink[];
};

export const NAV_LINKS: NavLink[] = [
  {
    label: "Inicio",
  },
  {
    label: "",
    sub_links: [
      { label: "Chapéus" },
      { label: "Bonés" },
      { label: "Tocas" },
      { label: "Brincos" },
      { label: "Camisetas" },
      { label: "Moletons" },
      { label: "Jaquetas" },
      { label: "Vestidos" },
      { label: "Calças" },
      { label: "Shorts" },
      { label: "Tênis" },
      { label: "Sandálias" },
      { label: "Sapatos" },
    ],
  },
  {
    label: "Sobre nós",
  },
  {
    label: "Contato",
  },
];
