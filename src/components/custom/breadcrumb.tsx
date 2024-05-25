"use client";

import { Fragment } from "react";
import {
  Breadcrumb as ShadcnBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumb = () => {
  const pathname = usePathname();
  const breadcrumbs = pathname ? pathname.split("/").slice(1) : [];

  const capitalizeFirstLetter = (str: string) => {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  };

  const buildBreadcrumbUrl = (index: number) => {
    const pathSegments = breadcrumbs.slice(0, index + 1);
    return "/" + pathSegments.join("/");
  };

  return (
    <ShadcnBreadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((crumb, index) => (
          <Fragment key={crumb}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href={buildBreadcrumbUrl(index)}
                  data-active={index === breadcrumbs.length - 1}
                  className="data-[active=true]:font-medium data-[active=true]:text-neutral-950"
                >
                  {capitalizeFirstLetter(crumb)}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index !== breadcrumbs.length - 1 && (
              <BreadcrumbSeparator
                children={<ChevronRight className="mt-0.5" />}
              />
            )}
          </Fragment>
        ))}
      </BreadcrumbList>
    </ShadcnBreadcrumb>
  );
};

export default Breadcrumb;
