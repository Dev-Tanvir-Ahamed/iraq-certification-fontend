import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, MapPin, User, Users } from "lucide-react";

export default function VoterCard({ voter }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 p-4">
      <Card className="w-full max-w-md overflow-hidden border-0 shadow-lg">
        <CardHeader className="flex flex-row items-center gap-4 p-4 bg-gradient-to-r from-emerald-600 to-emerald-500">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-emerald-600 font-bold">
            {voter.ক্রমিক}
          </div>
          <div className="flex-1">
            <h2 className="text-white font-medium">
              ভোটার_নং : {voter.voter_number}
            </h2>
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 mt-0.5 text-emerald-600" />
              <div className="flex">
                <p className="text-sm text-muted-foreground mr-2">নাম : </p>
                <p className="font-medium">{voter.name}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 mt-0.5 text-emerald-600" />
              <div className="flex">
                <p className="text-sm text-muted-foreground mr-2">
                  জন্ম_তারিখ :
                </p>
                <p className="font-medium">{voter.date_of_birth}</p>
              </div>
            </div>

            <Separator className="my-2" />

            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 mt-0.5 text-emerald-600" />
              <div className="flex">
                <p className="text-sm text-muted-foreground mr-2">পিতা :</p>
                <p className="font-medium">{voter.husband_name}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 mt-0.5 text-emerald-600" />
              <div className="flex">
                <p className="text-sm text-muted-foreground mr-2">মাতা : </p>
                <p className="font-medium">{voter.mother_name}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-0.5 text-emerald-600" />
              <div className="flex">
                <p className="text-sm text-muted-foreground mr-2">ঠিকানা: </p>
                <p className="font-medium">{voter.address}</p>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 bg-slate-800 text-white">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-white text-white">
              Polling Center
            </Badge>
            <span className="text-sm">
              Dakshin Goda Ratabarhi Govt. Primary School
            </span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
