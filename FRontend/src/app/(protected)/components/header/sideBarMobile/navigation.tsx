import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { LuCircleDot } from "react-icons/lu";
import { IoIosGitPullRequest } from "react-icons/io";
import { VscGithubProject } from "react-icons/vsc";
import { GoCommentDiscussion, GoGift, GoTelescope } from "react-icons/go";
import { Separator } from "@/components/ui/separator";
import { LinkItem } from "@/components/link-item";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
      staggerDirection: 1,
    },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({
  className,
  setIsOpen,
}: {
  className?: string;
  setIsOpen?: any;
}) => {
  // const { session } = useSession();
  // const { user } = session;
  // const pathname = usePathname();

  // React.useEffect(() => {
  //   if (setOpen) {
  //     setOpen(false);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [pathname]);
  return (
    <motion.div
      variants={variants}
      className={cn(
        "flex flex-col gap-2 [&>*]:text-2xl  [&>*]:font-[600] px-4",
        className
      )}
    >
      <div className="flex justify-between items-center ">
        <Avatar className="size-10 border-2 border-[#E6B3BA]">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="font-bold">CN</AvatarFallback>
        </Avatar>
        <Button
          className=" text-sm bg-zinc-200 text-zinc-500 hover:text-black hover:bg-zinc-200"
          onClick={() => setIsOpen(false)}
        >
          x
        </Button>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <LinkItem
          href="/dashboard"
          className="text-base hover:bg-zinc-100"
          icon={<IoHomeOutline className="text-zinc-500 w-5 h-5" />}
        >
          Home
        </LinkItem>
        <LinkItem
          href="/dashboard"
          className="text-base hover:bg-zinc-100"
          icon={<LuCircleDot className="text-zinc-500 w-5 h-5" />}
        >
          Issues
        </LinkItem>
        <LinkItem
          href="/dashboard"
          className="text-base hover:bg-zinc-100"
          icon={<IoIosGitPullRequest className="text-zinc-500 w-5 h-5" />}
        >
          Pull request
        </LinkItem>
        <LinkItem
          href="/dashboard"
          className="text-base hover:bg-zinc-100"
          icon={<VscGithubProject className="text-zinc-500 w-5 h-5" />}
        >
          Projects
        </LinkItem>
        <LinkItem
          href="/dashboard"
          className="text-base hover:bg-zinc-100"
          icon={<GoCommentDiscussion className="text-zinc-500 w-5 h-5" />}
        >
          Discussions
        </LinkItem>
      </div>
      <Separator />
      <div className="flex flex-col gap-2 ">
        <LinkItem
          href="/dashboard"
          className="text-base hover:bg-zinc-100"
          icon={<GoTelescope className="text-zinc-500 w-5 h-5" />}
        >
          Explore
        </LinkItem>
        <LinkItem
          href="/dashboard"
          className="text-base hover:bg-zinc-100"
          icon={<GoGift className="text-zinc-500 w-5 h-5" />}
        >
          Marketplace
        </LinkItem>
      </div>
      <Separator />

      {/* <LinkItem href="/">Dashboard</LinkItem>
      {user.role !== "SYS_ADMIN" && (
        <LinkItem href="/cameras">Cameras</LinkItem>
      )}
      {user.role === "ADMIN" && (
        <>
          <LinkItem href="/users">Users</LinkItem>
          <LinkItem href="/tenants">Tenants</LinkItem>
        </>
      )}
      {user.role === "SYS_ADMIN" && (
        <LinkItem href="/licences">Licences</LinkItem>
      )}
      <LinkItem className="" href="/settings">
        settings
      </LinkItem>
      <LinkItem href="/help">help center</LinkItem>
      <form action={logout} className="">
        <Button
          className="flex w-full items-center justify-start gap-2 text-xl font-[600]"
          variant="ghost"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </Button>
      </form>
      <div className="flex items-center gap-2 px-3 py-2">
        <Avatar className="size-5 border-2 border-[#E6B3BA]">
          <AvatarImage src={user.image || ""} alt="@shadcn" />
          <AvatarFallback className="font-bold">
            {`${user.name.charAt(0).toUpperCase()}`}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="max-w-full truncate font-semibold capitalize">
            {user.name}
          </div>
        </div>
      </div> */}
    </motion.div>
  );
};
