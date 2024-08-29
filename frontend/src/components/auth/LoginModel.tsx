"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Image from "next/image";

function LoginModel() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Start Here</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">Welcome To QuickChat</DialogTitle>
            <DialogDescription>
              This is a chat application created using Next.js.
            </DialogDescription>
          </DialogHeader>
          <Button variant={"outline"}>
            <Image
              src={"/images/google.png"}
              width={25}
              height={25}
              className="mr-4"
              alt="google"
            />
            Sign in with Google
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default LoginModel;
