import { Icon } from "@/components/icon";
import QuantityControl from "@/components/quantity-control";
import Body from "@/components/typography/body";
import Span from "@/components/typography/span";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

const CardByWishlist = () => {
  return (
    <Card className="group relative flex transition-all w-full py-1  gap-2 justify-center items-center shadow-none border-none">
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
      <CardContent className="flex justify-between w-full max-[550px]:items-start max-[550px]:gap-1 items-start gap-12 p-0">
        <Link
          href="/"
          className="flex w-full group/link flex-col max-[550px]:items-start"
        >
          <Body className="group-hover/link:underline max-[550px]:text-xs text-ellipsis overflow-hidden line-clamp-1">
            Raw Black T-Shirt Lineup
          </Body>
          <div className="flex flex-col ">
            <Span>Ordered on: 27 July 2023</Span>
            <Span>$70.00</Span>
          </div>
        </Link>
        <div className="flex max-[550px]:flex-col justify-between max-[550px]:items-start max-[550px]:w-auto items-center w-full max-[550px]:ml-auto max-[550px]:gap-2 gap-6">
          <Span className="border-b border-solid border-semantic-g900 text-b font-l leading-l text-neutral-900">
            Completed
          </Span>
          <Button className="hover:bg-neutral-100 max-[550px]:px-2 max-[550px]:h-6 rounded-sm flex bg-transparent shadow-none text-neutral-900 border border-solid border-neutral-900">
            View Item
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardByWishlist;
