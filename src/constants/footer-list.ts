export type FooterListProps = {
  id: number;
  label: string;
  path: string;
};

export const ICON_LIST: string[] = ["mastercard", "amex", "visa"];

export const SUPPORT_LIST: FooterListProps[] = [
  {
    id: 1,
    label: "FAQ",
    path: "",
  },
  {
    id: 2,
    label: "Termos de uso",
    path: "",
  },
  {
    id: 3,
    label: "Política de Privacidade",
    path: "",
  },
];
export const COMPANY_LIST: FooterListProps[] = [
  {
    id: 1,
    label: "Sobre nós",
    path: "",
  },
  {
    id: 2,
    label: "Contato",
    path: "",
  },
  {
    id: 2,
    label: "Carreira",
    path: "",
  },
];

export const SHOP_LIST: FooterListProps[] = [
  {
    id: 1,
    label: "Minha conta",
    path: "",
  },
  {
    id: 2,
    label: "Checkout",
    path: "",
  },
  {
    id: 3,
    label: "Carrinho",
    path: "",
  },
];
