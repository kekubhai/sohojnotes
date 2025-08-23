"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

const statsData = [
  {
    title: "Notes Purchased",
    value: "14",
    change: "+12%",
    trend: "up"
  },
  {
    title: "Notes Written", 
    value: "32",
    change: "+8%",
    trend: "up"
  },
  {
    title: "Earnings",
    value: "$560",
    change: "+15%",
    trend: "up"
  },
  {
    title: "Active Requests",
    value: "4",
    change: "+25%",
    trend: "up"
  }
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
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Arun!</h1>
          <p className="text-gray-600">Here's what's happening with your notes today.</p>
        </div>
        <div className="text-sm text-gray-500">
          সহজ Path
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
                  {stat.change}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chart Section */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Requests vs Delivered Notes</CardTitle>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">Daily</Button>
              <Button variant="default" size="sm">Weekly</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative h-64">
              {/* Chart Placeholder */}
              <svg className="w-full h-full" viewBox="0 0 400 200">
                {/* Grid lines */}
                <defs>
                  <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                
                {/* Chart lines */}
                <path 
                  d="M 20 160 Q 80 140 120 120 T 200 100 T 280 110 T 360 90" 
                  fill="none" 
                  stroke="#3b82f6" 
                  strokeWidth="3"
                />
                <path 
                  d="M 20 180 Q 80 170 120 150 T 200 140 T 280 145 T 360 130" 
                  fill="none" 
                  stroke="#93c5fd" 
                  strokeWidth="3"
                />
                
                {/* Area under curves */}
                <path 
                  d="M 20 160 Q 80 140 120 120 T 200 100 T 280 110 T 360 90 L 360 200 L 20 200 Z" 
                  fill="rgba(59, 130, 246, 0.1)"
                />
                <path 
                  d="M 20 180 Q 80 170 120 150 T 200 140 T 280 145 T 360 130 L 360 200 L 20 200 Z" 
                  fill="rgba(147, 197, 253, 0.1)"
                />
              </svg>
              
              {/* Legend */}
              <div className="flex gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-gray-600">Requests</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-300"></div>
                  <span className="text-sm text-gray-600">Delivered Notes</span>
                </div>
              </div>
            </div>
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
              <div className="grid grid-cols-3 gap-4 text-sm font-medium text-gray-500 border-b pb-2">
                <span>Request</span>
                <span>Subject</span>
                <span>Status</span>
              </div>
              {recentRequests.map((request, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 items-center py-2">
                  <div>
                    <p className="font-medium text-gray-900">{request.request}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">{request.subject}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={
                        request.status === 'Completed' ? 'default' : 
                        request.status === 'Pending' ? 'secondary' : 
                        'outline'
                      }
                      className={
                        request.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        request.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }
                    >
                      {request.status}
                    </Badge>
                    <span className="text-sm text-gray-500">{request.date}</span>
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
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-gray-900">{notification.message}</p>
                  <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
