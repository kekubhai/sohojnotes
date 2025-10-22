"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowUpRight, ArrowDownRight, NotebookPen, ShoppingBasket, Wallet, Bell } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const statsData = [
  {
    title: "Notes Purchased",
    value: "14",
    change: "+12%",
    trend: "up" as const,
    icon: ShoppingBasket,
  },
  {
    title: "Notes Written",
    value: "32",
    change: "+8%",
    trend: "up" as const,
    icon: NotebookPen,
  },
  {
    title: "Earnings",
    value: "$560",
    change: "+15%",
    trend: "up" as const,
    icon: Wallet,
  },
  {
    title: "Active Requests",
    value: "4",
    change: "+25%",
    trend: "up" as const,
    icon: Bell,
  },
];

const chartData = [
  { day: "Mon", requests: 12, delivered: 8 },
  { day: "Tue", requests: 16, delivered: 12 },
  { day: "Wed", requests: 10, delivered: 9 },
  { day: "Thu", requests: 18, delivered: 14 },
  { day: "Fri", requests: 22, delivered: 19 },
  { day: "Sat", requests: 14, delivered: 12 },
  { day: "Sun", requests: 9, delivered: 7 },
];

const recentRequests = [
  {
    request: "Introduction to Psychology",
    subject: "Psychology",
    status: "Completed",
    date: "Oct 12"
  },
  {
    request: "Quantum Physics",
    subject: "Physics", 
    status: "Pending",
    date: "Oct 10"
  },
  {
    request: "Calculus II",
    subject: "Mathematics",
    status: "In Progress", 
    date: "Oct 12"
  }
];

const notifications = [
  {
    message: 'Your note request for "Quantum Physics" has been completed.',
    time: "Now"
  },
  {
    message: 'New message from John regarding "Biology Notes".',
    time: "5 min ago"
  },
  {
    message: 'Payment of $25 has been processed successfully.',
    time: "1 hour ago"
  }
];

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat, index) => {
            const Icon = stat.icon || TrendingUp;
            return (
              <Card key={index} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-muted-foreground">{stat.title}</p>
                      <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
                    </div>
                    <div className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs ${
                      stat.trend === "up" ? "text-emerald-600 bg-emerald-500/10" : "text-red-600 bg-red-500/10"
                    }`}>
                      {stat.trend === "up" ? (
                        <ArrowUpRight className="h-4 w-4" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4" />
                      )}
                      {stat.change}
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                    <Icon className="h-4 w-4" />
                    <span className="text-xs">Last 7 days</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Chart Section */}
          <Card className="col-span-1">
            <CardHeader className="flex flex-row items-center justify-between gap-4">
              <CardTitle>Requests vs Delivered Notes</CardTitle>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">Daily</Button>
                <Button variant="default" size="sm">Weekly</Button>
              </div>
            </CardHeader>
            <CardContent>
              <ChartContainer
                className="w-full"
                config={{
                  requests: { label: "Requests", color: "hsl(var(--chart-1))" },
                  delivered: { label: "Delivered", color: "hsl(var(--chart-2))" },
                }}
              >
                <LineChart data={chartData} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Line type="monotone" dataKey="requests" stroke="var(--color-requests)" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="delivered" stroke="var(--color-delivered)" strokeWidth={2} dot={false} />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Recent Requests */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Requests</CardTitle>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">Recent Requests</Button>
                  <Button variant="outline" size="sm">Trending Subjects</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 border-b pb-2 text-sm font-medium text-muted-foreground">
                  <span>Request</span>
                  <span>Subject</span>
                  <span>Status</span>
                </div>
                {recentRequests.map((request, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 items-center py-2">
                    <div>
                      <p className="font-medium">{request.request}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">{request.subject}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={
                          request.status === 'Completed' ? 'default' : 
                          request.status === 'Pending' ? 'secondary' : 
                          'outline'
                        }
                        className={
                          request.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-700' :
                          request.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-700' :
                          'bg-blue-500/10 text-blue-700'
                        }
                      >
                        {request.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{request.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.map((notification, index) => (
                <div key={index} className="flex items-start gap-4 rounded-lg bg-muted p-4">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></div>
                  <div className="flex-1">
                    <p>{notification.message}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </ProtectedRoute>
  );
}