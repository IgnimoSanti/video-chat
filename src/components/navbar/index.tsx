
//  import Time from "./time";
 import MyAvatar from "./my-avatar";
//  import { auth } from "@/../auth";

import Image from "next/image";
import Time from "./time";

async function  Navbar() {
   //  const session = await auth();
  return (
    <div className="flex h-[11vh] w-full items-center justify-between bg-light-primary px-4 py-3 dark:bg-dark-primary">
       <Image
        src="/logo.png"
        alt="Logo"
        width={60}
        height={60}
        quality={100}
		  rounded-xl
      />
		 <div className="flex items-center gap-x-5">
			<Time />
			 <MyAvatar />
		</div>  
    </div>
  );
}

export default  Navbar;