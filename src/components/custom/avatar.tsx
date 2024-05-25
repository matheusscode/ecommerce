import { HTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";
import {
  AvatarFallback,
  AvatarImage,
  Avatar as ShadcnAvatar,
} from "../ui/avatar";

export const avatar = tv({
  base: "relative flex h-10 w-10 shrink-0 overflow-hidden",
  variants: {
    rounded: {
      full: "rounded-full",
      square: "rounded-sm",
    },
  },
  defaultVariants: {
    rounded: "full",
  },
});

export interface AvatarProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatar> {
  src: string;
  alt: string;
}

const Avatar = ({ src, alt, rounded, className, ...props }: AvatarProps) => {
  return (
    <ShadcnAvatar {...props} className={avatar({ rounded, className })}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback className="text-semantic-b900">{alt}</AvatarFallback>
    </ShadcnAvatar>
  );
};

export default Avatar;
