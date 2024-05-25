import { Icon } from "@/components/icon";
import QuantityControl from "@/components/quantity-control";
import Body from "@/components/typography/body";
import Span from "@/components/typography/span";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

const CardByCart = () => {
  return (
    <Card className="group relative flex transition-all w-full py-0 max-[550px]:pr-12 gap-2 justify-center items-center shadow-none border-none">
      <CardHeader className="p-0 relative">
        <Image
          className="group-hover:opacity-50 transition-all"
          src="/products/cover.svg"
          alt="product"
          priority
          width={60}
          height={60}
        />
        <Button
          className="absolute group-hover:opacity-100 opacity-0 max-[550px]:flex hidden rounded-sm bg-neutral-100 p-0 w-5 h-5 right-0 hover:bg-neutral-300"
          variant="ghost"
          size="icon"
          children={<Icon icon="x" size={14} />}
        />
      </CardHeader>
      <CardContent className="flex justify-between w-full max-[550px]:flex-col max-[550px]:items-start max-[550px]:gap-1 items-center gap-12 p-0">
        <Link
          href="/"
          className="flex group/link flex-col max-[550px]:items-center max-[550px]:w-full max-[550px]:gap-2  max-[550px]:flex-row "
        >
          <Body className="group-hover/link:underline max-[550px]:text-xs text-ellipsis overflow-hidden line-clamp-1">
            Raw Black T-Shirt Lineup
          </Body>
          <div className="flex items-center gap-1.5 w-4 max-[550px]:ml-auto">
            <Span className="max-[550px]:hidden">Color:</Span>
            <div className="rounded-full min-w-3 h-3 bg-semantic-g500" />
            <Separator className="bg-neutral-400" />
            <Span className="max-[550px]:hidden">Size:</Span>
            <Span>M</Span>
          </div>
        </Link>
        <div className="flex max-[550px]:flex-row-reverse gap-6">
          <span className="text-b font-l leading-l text-neutral-900">
            $85.00
          </span>
          <QuantityControl size="md" />
        </div>
        <Button
          className="hover:bg-neutral-100 max-[550px]:hidden flex"
          variant="ghost"
          size="icon"
          children={<Icon icon="x" size={20} />}
        />
      </CardContent>
    </Card>
  );
};

export default CardByCart;
