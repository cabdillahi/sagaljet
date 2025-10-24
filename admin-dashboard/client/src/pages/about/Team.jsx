import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users } from 'lucide-react'
import DrawerJob from '../drawer/Drawer'
import { useDispatch, useSelector } from 'react-redux'
import { getTeamFn } from '@/redux/slices/teams/GetTeam'

export default function TeamComponent() {
  const teamMembers = useSelector((state) => state.getTeam)
  const disptach = useDispatch()

  useEffect(() => {
    disptach(getTeamFn())
  }, [])

  if (teamMembers.isLoading) {
    return <p>Loading team members...</p>
  }

  return (
    <section className="w-full py-10 flex flex-col items-center md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h3 className="text-sm font-bold tracking-wider text-red-500 uppercase">
            OUR TEAM
          </h3>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Meet with our expert team
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our talented professionals are committed to driving digital
            transformation and delivering innovative solutions.
          </p>
        </div>

        {/* Team members grid */}
        <div className="grid gap-6 px-10 mt-12 md:grid-cols-2 lg:grid-cols-4">
          {Array.isArray(teamMembers.data) &&
            teamMembers.data.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-white shadow-lg rounded-3xl"
              >
                <CardContent className="p-0">
                  <div className="relative w-full pt-[100%]">
                    <img
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      src={member.imageUrl}
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-red-500">
                      {member.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}

          {/* Extra card for job opportunity */}
          <Card className="overflow-hidden bg-red-500 text-white rounded-3xl">
            <CardContent className="p-6 flex flex-col justify-between h-full">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                <img src="teamicon1.png" alt="" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl">This could be you</h3>
                <p className="text-3xl font-semibold">
                  We are always looking for new talents
                </p>
              </div>
              <Button className="mt-2 bg-[#FED2D5] text-black hover:bg-pink-200">
                {/* See open positions */}
                <DrawerJob />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
