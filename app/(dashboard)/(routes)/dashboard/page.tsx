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
import { UserButton, useUser } from "@clerk/nextjs";

const DashboardPage = () => {
  const { user } = useUser();
  const date = user?.lastSignInAt?.getDay()+"/"+user?.lastSignInAt?.getMonth()+"/"+user?.lastSignInAt?.getUTCFullYear();
  const heure = user?.lastSignInAt?.getHours()+'H'+ user?.lastSignInAt?.getMinutes();

  const InfoBulles = [
    {
      number: 235,
      label: 'Connexions quotidiennes'
    },
    {
      number: 15,
      label: 'Visites quotidiennes'
    },
    {
      number: 5,
      label: 'Nouveau(x) client(s)'
    },
  ]

  const visites = [
    {
      nom: "Lavage des pros",
      date: "21/06/2023",
      heure: "08H25",
      status: "Validé",
      color: 'bg-[#71E953]'
    },
    {
      nom: "Lavage des pros",
      date: "21/06/2023",
      heure: "08H25",
      status: "En cours",
      color: 'bg-[#E9E353]'
    },
    {
      nom: "Lavage des pros",
      date: "21/06/2023",
      heure: "08H25",
      status: "En attente",
      color: 'bg-[#F1691D]'
    },
    {
      nom: "Lavage des pros",
      date: "21/06/2023",
      heure: "08H25",
      status: "Validé",
      color: 'bg-[#71E953]'
    },
    {
      nom: "Lavage des pros",
      date: "21/06/2023",
      heure: "08H25",
      status: "Validé",
      color: 'bg-[#71E953]'
    },
    {
      nom: "Lavage des pros",
      date: "21/06/2023",
      heure: "08H25",
      status: "Validé",
      color: 'bg-[#71E953]'
    },
    {
      nom: "Lavage des pros",
      date: "21/06/2023",
      heure: "08H25",
      status: "Validé",
      color: 'bg-[#71E953]'
    },
    {
      nom: "Lavage des pros",
      date: "21/06/2023",
      heure: "08H25",
      status: "Validé",
      color: 'bg-[#71E953]'
    },
    {
      nom: "Lavage des pros",
      date: "21/06/2023",
      heure: "08H25",
      status: "Validé",
      color: 'bg-[#71E953]'
    },
    {
      nom: "Lavage des pros",
      date: "21/06/2023",
      heure: "08H25",
      status: "Validé",
      color: 'bg-[#71E953]'
    },
    {
      nom: "Lavage des pros",
      date: "21/06/2023",
      heure: "08H25",
      status: "Validé",
      color: 'bg-[#71E953]'
    },
  ]


  return (
    <div className="flex flex-col items-center h-full w-full px-4 md:mt-16 md:px-10 lg:px-14 space-y-4 gap-5">
      <div className="flex items-center justify-center gap-3 mt-10 mb-7 md:mt-2 md:gap-7 w-full flex-wrap md:p-5">
        {InfoBulles.map((bulle) => (
          <Card
            key={bulle.label}
            className="p-4 flex flex-col items-start shadow-sm hover:shadow-lg transition w-full md:w-[264px] gap-1 rounded-3xl"
          >
            <h1 className="text-lg md:text-2xl font-light text-start text-[#F1691D]">{bulle.number}</h1>
            <p className="text-muted-foreground font-light text-sm md:text-base text-center">{bulle.label}</p>
          </Card>
        ))}

        <div className="flex items-start flex-wrap w-full h-full gap-3 md:gap-7">
          {/* visit */}
          <Card className="p-4 flex flex-col items-start shadow-sm hover:shadow-lg transition w-full md:min-w-[483px] h-full max-h-[544px] md:w-[55%] gap-1 rounded-3xl">
            <div className="flex items-center justify-between w-full mb-4">
              <h2 className="text-[#F1691D] text-center font-light text-sm md:text-base">Recentes Visites</h2>
              <Button size='sm' variant='link' className="text-xs md:text-sm">
                Voir plus
              </Button>
            </div>
            <div className="overflow-y-scroll h-full w-full">
              <Table>
                <TableHeader>
                  <TableRow className="bg-black hover:bg-black">
                    <TableHead className="text-center w-[100px] text-white md:min-w-[146px]">Nom</TableHead>
                    <TableHead className="text-center text-white">Date</TableHead>
                    <TableHead className="text-center text-white">Heure</TableHead>
                    <TableHead className="text-center text-white min-w-[100px]">Statut</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {visites.map((visite, key) => (
                    <TableRow key={key}>
                      <TableCell className="font-medium text-xs md:text-sm min-w-[136px]">
                        {visite.nom}
                      </TableCell>
                      <TableCell className="text-center text-muted-foreground text-xs md:text-sm">
                        {visite.date}
                      </TableCell>
                      <TableCell className="text-center text-muted-foreground text-xs md:text-sm">
                        {visite.heure}
                      </TableCell>
                      <TableCell>
                        <p className={cn("p-2 text-xs md:text-sm rounded-full text-center min-w-[100px]", visite.color)}>{visite.status}</p>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>

          {/* connexion */}
          <Card className="p-4 flex flex-col items-start shadow-sm hover:shadow-lg transition w-full h-full max-h-[544px] gap-1 rounded-3xl md:w-[40%]">
            <div>
              <h2 className="text-[#F1691D] text-center font-light text-xs md:text-base w-full">Recentes Connexion</h2>
            </div>
            <div className="overflow-y-scroll h-full w-full flex flex-col">
              <div className="flex items-center w-full mt-3 gap-3">
                <UserButton afterSignOutUrl="/" />
                <div className="flex flex-col items-start justify-start w-full">
                  <h2 className="font-semibold text-base capitalize">{user?.username}</h2>
                  <p className="font-normal text-xs">{'Le '+ date + ' à ' + heure}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div >
    </div >
  )
}

export default DashboardPage;