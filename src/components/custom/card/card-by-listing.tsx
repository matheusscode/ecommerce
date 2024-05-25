import { Icon } from "@/components/icon";
import Body from "@/components/typography/body";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CardByListing = () => {
  return (
    <Card className="group flex flex-col cursor-pointer max-[800px]:p-2 py-5 px-3 gap-2 justify-center items-center shadow-none border-none">
      <CardHeader className="bg-neutral-100  p-2 relative overflow-hidden ">
        <Button
          size="icon"
          variant="ghost"
          className="transition-all absolute top-2 right-2 group-hover:visible group-hover:opacity-100 opacity-0 invisible rounded-full"
        >
          <HeartIcon />
        </Button>
        <Image
          className="group-hover:opacity-50 transition-all"
          src="/products/cover.svg"
          alt="product"
          width={237}
          height={310}
          priority
        />
        <Button
          className="
        translate-y-4 flex h-12 items-center gap-2 justify-center group-hover:translate-y-0 transition-all absolute left-0 bottom-2 right-0 group-hover:visible group-hover:opacity-100 opacity-0 invisible"
        >
          <Body className="font-light">Add to cart</Body>{" "}
          <Icon icon="add-to-cart" color="#FFFFFF" />
        </Button>
      </CardHeader>
      <CardContent className="group/item w-full flex p-0 mt-4 flex-col gap-1 text-left justify-start">
        <Link href="/product/">
          <Body className="group-hover/item:underline">Product Name</Body>
          <div className="flex gap-2 items-center">
            <Badge variant="outline" className="py-2 px-4 rounded-full">
              <Label className="whitespace-nowrap">IN STOCK</Label>
            </Badge>
            <Label className="text-neutral-600 font-light">$35.00</Label>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CardByListing;
