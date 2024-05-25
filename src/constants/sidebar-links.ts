import { Icons } from "@/components/icon";

export type SidebarLink = {
  id: number;
  icon: Icons;
  label: string;
  path: string;
};

export const SIDEBAR_LINKS: SidebarLink[] = [
  {
    id: 1,
    icon: "dashboard",
    label: "Início",
    path: "/",
  },
  {
    id: 2,
    icon: "product",
    label: "Produtos",
    path: "products",
  },
  {
    id: 3,
    icon: "cart",
    label: "Pedidos",
    path: "orders",
  },
  {
    id: 4,
    icon: "users",
    label: "Clientes",
    path: "customers",
  },
  {
    id: 5,
    icon: "empty-star",
    label: "Avaliações",
    path: "/reviews",
  },
  {
    id: 6,
    icon: "settings",
    label: "Configurações",
    path: "/settings",
  },
];
