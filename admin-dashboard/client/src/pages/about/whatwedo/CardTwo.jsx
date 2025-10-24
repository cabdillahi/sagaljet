import { Card, CardContent } from "@/components/ui/card"

export default function CardTwo() {
  return (
    <Card className="w-[300px] overflow-hidden border-2 border-gray-300 rounded-3xl">
      <CardContent className="p-6 space-y-4">
        <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center">
         <img className="w-12" src="/Icon1.png" alt="" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Strategic Business Solutions</h2>
          <p className="text-gray-500 text-sm">
            We offer strategic business planning and tech consulting, ensuring your business stays
            ahead in a competitive digital world.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}