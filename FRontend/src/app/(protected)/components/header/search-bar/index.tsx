import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
  return (
    <Dialog>
      <DialogTrigger className="p-2  bg-transparent border hidden md:flex hover:bg-zinc-200 rounded-md">
        <FaSearch className="h-4 w-4 flex-none " />
      </DialogTrigger>
      <DialogContent className="top-0 translate-y-3 max-w-[80%] rounded-md">
        <div className="mr-8 flex items-center gap-2 rounded-md bg-white px-3 border-blue-700 border">
          <FaSearch className="h-4 w-4 flex-none text-gray-400" />
          <Input
            className="border-none focus-visible:border-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Search..."
            type="search"
          />
        </div>
      </DialogContent>
    </Dialog>
    // <div className="mr-8 flex items-center gap-2 rounded-md bg-white px-3 border">
    //   <FaSearch className="h-4 w-4 flex-none" />

    //   <Input
    //     className="border-none focus-visible:border-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
    //     placeholder="Search..."
    //     type="search"
    //   />
    // </div>
  );
}
