import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Input } from "@/components/ui/input";
import MobileSidebar from "@/components/mobile-sidebar";


const Navbar = () => {
    return (
        <div className="flex items-center p-4">
            <MobileSidebar/>
            <div className="flex w-full items-center justify-end">
                <div className="flex w-full items-center justify-center">
                    <div className="flex w-9/12 md:w-1/2 h-full bg-gray-300 rounded-full">
                        <Input type="text" placeholder="Recherche" className="border-0 bg-transparent outline-none" />
                        <Button variant='ghost' size='icon' className="rounded-full bg-[#F1691D] text-white w-14 h-10">
                            <Search size={15} />
                        </Button>
                    </div>
                </div>
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    )
}

export default Navbar;