import Image from "next/image";
import Animation from "@/components/Animation";
import { cookies } from 'next/headers'
import {
  getUserByID,
} from '@/prisma/user'


import Login from "@/components/Login";
import Rsvp from "@/components/Rsvp";
import Container from "@/components/Container";
var jwt = require('jsonwebtoken');
import Card from "@/components/daisyui/card";
import UserCard from "@/components/userCard";





export default async function Home() {
  
  
  const cookie = cookies().get('accessToken')
  let user;
  if(cookie && cookie.value) {

    try{
      let accessToken = cookie?.value
      let decodedToken = jwt.verify(accessToken, process.env.JWT_SECRET);
      user = await getUserByID(decodedToken.userId)
    }catch(err){
      console.log("err",err);
    }
  }



  return (
    <div className=" pb-16">

      {/* BANNER */}
      <div className="text-primary bg-slate-200 text-center h-[500px] md:h-[600px] flex justify-center items-center">
        <div className="grid gap-6">
          <Animation>
            <div className="text-3xl mb-10 font-adora">
                Elizabeth & Eric
              </div>
            <h1 className='font-serif text-7xl tracking-tight'>
              RENDEZ-VOUS À SINTRA
            </h1>
            <div className="animate-pulse">
              31-08 | 02-09
            </div>
            
          </Animation>



        </div>
      </div>

      {/* USER CARDS */}
      <Container>
        <h2 className="font-serif mt-12 text-center text-4xl">Hello</h2>
        <div className="my-6">
          {user ?
            <div className="grid gap-4 mt-2">
              <UserCard user={user}/>
              {user.canEdit.map((user:any) => <UserCard key={user.id} user={user}/> )}
            </div>      
          :
            <Login />
          }
        </div>
      </Container>

      {/* ATTENDING CLIENT COMPONENT */}
      {/* <Container>
        <div className="my-6">
          {user ?
            <div className="grid gap-4 mt-2">
              <Rsvp user={user}/>
              {user.canEdit.map((user:any) => <Rsvp key={user.id} user={user}/> )}
            </div>      
          :
            <Login />
          }
        </div>

      </Container>
       */}
      {/* PROGRAMME */}
      <Container>
        <div className="flex flex-col gap-6 mt-6">

            {/* TITRE */}
            <div className="text-primary text-center">
              <Animation>
                <h1 className="font-serif text-5xl md:text-7xl  tracking-tight">
                  Programme
                </h1>
              </Animation>
            </div>

            {/* JEUDI */}
            <div className="rounded-lg shadow-xl border border-grey py-4 md:py-10 px-6 flex flex-col md:flex-row gap-8 items-center">
              
              <div className="md:w-2/5">
                <Animation>
                  <Image 
                    src="/qbv_palm.jpeg" 
                    alt="Picture of the author"
                    className="object-cover aspect-square mask mask-hexagon	w-full"
                    width={1920}
                    height={1080}
                    />
                </Animation>
              </div>
              <div className="text-primary w-full md:w-3/5">
                
                <h1 className="font-serif text-4xl md:text-6xl mb-6  tracking-tight">
                  Jeudi 31 Août
                </h1>

                <div className="grid gap-4">
                  <Animation>
                    <div className="">
                      <div>
                        16h30 : Navettes aller
                      </div>
                      <div className="italic text-xs">
                        Départ : Devant le NH Hotel, Sintra
                      </div>
                    </div>
                    <div className="">
                      <div>
                        17h - 20h : Cocktail by the pool
                      </div>
                      <div className="italic text-xs">
                        Dresscode : Casual chic
                      </div>
                      <div className="italic text-xs">
                        Lieu : Quinta da Bella Vista
                      </div>
                    </div>
                    <div className="">
                      <div>
                        20h-20h30 : Navettes retour
                      </div>
                      <div className="italic text-xs">
                        Départ : Devant {`l'entrée du bâtiment principal`}<br/>
                        Arrivée : NH Hotel, Sintra
                      </div>
                    </div>
                  </Animation>
                </div>

                <div tabIndex={0} className="collapse rounded-none mt-4">
                  <div className="collapse-title font-medium p-0 underline text-sm">
                    En savoir plus
                  </div>
                  <div className="collapse-content text-sm"> 
                    <p>Soirée décontracté autour de la piscine ! On {`s'échauffe pour le lendemain !`}</p>
                  </div>
                </div>

              </div>


            </div>

            {/* VENDREDI */}
            <div className="rounded-lg shadow-xl border border-grey py-4 md:py-10 px-6 flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-2/5">
                <Animation>
                  {/* center image to left */}
                  <Image 
                    src="/qbv_palace_banner.jpg" 
                    alt="Picture of the author"
                    className="object-cover aspect-square mask mask-squircle	w-full"
                    width={1920}
                    height={1080}
                    />
                </Animation>
              </div>
              <div className="text-primary w-full md:w-3/5 md:text-right">
                <h1 className="font-serif text-4xl md:text-6xl mb-6 tracking-tight">
                  Vendredi 1 Septembre
                </h1>
                <div className="grid gap-4">
                  <Animation>
                    <div className="">
                      <div>
                        16h20 : Navettes aller
                      </div>
                      <div className="italic text-xs">
                        Départ : Devant le NH Hotel, Sintra
                      </div>
                    </div>
                    <div className="">
                      <div>
                        17h : Cérémonie laique
                      </div>
                      <div className="italic text-xs">
                        Extérieurs, Quinta da Bella Vista
                      </div>
                    </div>
                    <div className="">
                      <div>
                        18h - 20h : Cocktail
                      </div>
                      <div className="italic text-xs">
                        Jardin, Quinta da Bella Vista
                      </div>
                    </div>
                    <div className="">
                      <div>
                        20h : Diner
                      </div>
                      <div className="italic text-xs">
                        Grande serre, Quinta da Bella Vista
                      </div>
                    </div>
                    <div className="">
                      <div>
                        2h00 - 5H00 : Navettes retour
                      </div>
                      <div className="italic text-xs">
                        Départ : Devant {`l'entrée du bâtiment principal`}<br/>
                        Arrivée : NH Hotel, Sintra<br/>
                      </div>
                      <div className="italic text-xs my-1">
                        Navettes toutes les heures
                      </div>
                    </div>
                  </Animation>

                  <div tabIndex={0} className="collapse rounded-none mt-4">
                    <div className="collapse-title font-medium p-0 underline text-sm">
                      En savoir plus
                    </div>
                    <div className="collapse-content text-sm"> 
                      <p>Attention, on sera dans {`l'herbe à un moment, donc gare aux talons !`}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* SAMEDI */}
            <div className="rounded-lg shadow-xl border border-grey py-4 md:py-10 px-6 flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/5">
                <Animation>
                  <Image 
                    src="/lizandro.jpeg" 
                    alt="lizandro of the author"
                    className="object-cover aspect-square mask mask-heart	w-full"
                    width={1920}
                    height={1080}
                    />
                </Animation>
              </div>
              <div className="text-primary w-full md:w-3/5">
                <Animation>
                  <h1 className="font-serif text-4xl md:text-6xl mb-6  tracking-tight">
                    Samedi 2 Septembre
                  </h1>

                  <div className="grid gap-4">
                    <Animation>
                      <div className="">
                        <div>
                          12h15 : Navettes aller
                        </div>
                        <div className="italic text-xs">
                          Départ : Devant le NH Hotel, Sintra. 45min de trajet.
                        </div>
                      </div>
                      <div className="">
                        <div>
                          13h : Déjeuner bar de plage
                        </div>
                        <div className="italic text-xs">
                          Foz do Lizandro
                        </div>
                      </div>
                      <div className="">
                        <div>
                          15h - 20h : Plage privée 
                        </div>
                        <div className="italic text-xs">
                          Foz do Lizandro<br/>
                          Volley ball
                        </div>
                      </div>
                      <div className="">
                        <div>
                          20h : Finger food, Open bar
                        </div>
                        <div className="italic text-xs">
                        Foz do Lizandro
                        </div>
                      </div>
                      <div className="">
                        <div>
                          20h00 - 00h : Navettes retour
                        </div>
                        <div className="italic text-xs">
                          Départ : Devant {`l'entrée du bâtiment principal`}<br/>
                          Arrivée : NH Hotel, Sintra<br/>
                        </div>
                        <div className="italic text-xs my-1">
                          Toutes les heures
                        </div>
                      </div>
                    </Animation>

                    <div tabIndex={0} className="collapse rounded-none mt-4">
                      <div className="collapse-title font-medium p-0 underline text-sm">
                        En savoir plus
                      </div>
                      <div className="collapse-content text-sm"> 
                        <p>Déjeuner de lendemain de mariage. Bar de plage et soirée pour les téméraires !</p>
                      </div>
                    </div>
                  </div>
    
                

                </Animation>

              </div>
            </div>
        </div>
      </Container>

    </div>

  )
}
