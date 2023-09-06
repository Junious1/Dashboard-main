"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { PhoneCall, BriefcaseIcon } from 'lucide-react';

const UserPage = () => {
  const { user } = useUser();

  const InfoBulles = [
    {
      nameWork: 'Lavages des Pros',
      timeStart: user?.lastSignInAt?.getHours() + 'H' + user?.lastSignInAt?.getMinutes(),
      timeEnd: user?.lastSignInAt?.getHours() === undefined ? 0 : user?.lastSignInAt?.getHours() + 4 + '' + 'H' + user?.lastSignInAt?.getMinutes(),
      name: 'Koné Kolotioloman',
      icon: BriefcaseIcon,
    },
    {
      nameWork: 'Lavages des Pros',
      timeStart: user?.lastSignInAt?.getHours() + 'H' + user?.lastSignInAt?.getMinutes(),
      timeEnd: user?.lastSignInAt?.getHours() === undefined ? 0 : user?.lastSignInAt?.getHours() + 4 + '' + 'H' + user?.lastSignInAt?.getMinutes(),
      name: 'Koné Kolotioloman',
      icon: PhoneCall,
    },
  ]

  const users = [
    {
      nom: "Francis Kouakou",
      date: "21/06/2023",
      heure: "En ce moment",
      status: "Connecté",
    },
    {
      nom: "Koné Kolotioloman",
      date: "21/06/2023",
      heure: "23H25",
      status: "Déconnecté",
    },
    {
      nom: "Ouattara katina",
      date: "21/06/2023",
      heure: "En ce moment",
      status: "Connecté",
    },
    {
      nom: "Kodjo tamegnon",
      date: "21/06/2023",
      heure: "En ce moment",
      status: "Connecté",
    },
  ]

  return (
    <div className="flex flex-col items-center h-full w-full px-4 md:mt-16 md:px-10 lg:px-14 space-y-4 gap-5">
      <div className="flex items-center justify-center gap-3 mt-10 mb-7 md:mt-2 md:gap-7 w-full flex-wrap md:p-5">
        <div className="flex items-start flex-col w-full h-full gap-3 md:gap-7">
          {/* List */}
          <Card className="p-4 flex flex-col items-start shadow-sm hover:shadow-lg transition w-full md:min-w-[483px] h-full max-h-[444px] gap-1 rounded-3xl">
            <div className="flex items-center justify-between w-full mb-4">
              <h2 className="text-[#F1691D] text-center font-light text-sm md:text-base">Listes des utilisateurs</h2>
              <Button size='sm' variant='link' className="text-xs md:text-sm">
                Voir plus
              </Button>
            </div>
            <div className="overflow-y-scroll h-full w-full">
              <Table>
                <TableHeader>
                  <TableRow className="bg-black hover:bg-black">
                    <TableHead className="text-center text-white">Nom</TableHead>
                    <TableHead className="text-center text-white">Date</TableHead>
                    <TableHead className="text-center text-white">Heure</TableHead>
                    <TableHead className="text-center text-white">Statut</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user, key) => (
                    <TableRow key={key}>
                      <TableCell className="font-medium text-xs md:text-sm">
                        {user.nom}
                      </TableCell>
                      <TableCell className="text-center text-muted-foreground text-xs md:text-sm">
                        {user.date}
                      </TableCell>
                      <TableCell className="text-center text-muted-foreground text-xs md:text-sm">
                        {user.heure}
                      </TableCell>
                      <TableCell className="flex justify-center text-center text-xs md:text-sm">
                        <p className={cn("p-2 text-xs md:text-sm rounded-full text-center w-24", user.status === "Connecté" ? 'bg-[#71E953]' : 'bg-[#FF2222]')}>{user.status}</p>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>

          {/* RDV */}
          <div className="p-4 flex flex-col items-start transition w-full md:w-[483px] gap-1 rounded-3xl">
            <div className="flex items-center justify-between w-full md:w-[409px]">
              <h2 className="text-[#22285E] text-start font-medium text-base md:text-lg">Rendez-vous Journalier</h2>
              <Button size='jrsize' variant='jr' className="text-[10px] md:text-sm">View All</Button>
            </div>
            <h3 className="text-[#7A7E9E] text-center font-medium text-xs md:text-base">Jeudi , 20 Juillet</h3>
          </div>

          {/* work times */}
          <div className="flex flex-wrap w-full items-center gap-4">
            {InfoBulles.map((bulle, key) => (
              <Card
                key={key}
                className="p-4 flex flex-col items-start shadow-sm hover:shadow-lg transition w-full md:w-[300px] gap-3 rounded-lg border-l-8 border-l-[#F1691D]"
              >
                <div className="flex items-start justify-between gap-6 w-full">
                  <div className="flex flex-col items-start">
                    <h1 className="text-base md:text-lg font-medium text-start text-[#22285E]">{bulle.nameWork}</h1>
                    <p className="text-muted-foreground font-normal text-xs md:text-sm text-center">{bulle.timeStart + ' - ' + bulle.timeEnd}</p>
                  </div>
                  <div className="bg-[#F1691D] rounded-full">
                    <bulle.icon className=" h-10 w-10 p-2 text-center text-white" />
                  </div>
                </div>
                <h1 className="font-medium text-base">{bulle.name}</h1>
              </Card>
            ))}
          </div>
        </div>
      </div >
    </div >
  )
}

export default UserPage;