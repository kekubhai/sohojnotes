import Image from "next/image";
import { PenLine, Search, PlayCircle, Shield } from "lucide-react";

const features = [   
    {
        icon: PenLine,
        iconColor: "bg-blue-500",
        title: "Earn by Writing",
        description: "Make money by creating and sharing quality notes.",
    },
    {
        icon: Search,
        iconColor: "bg-blue-600",
        title: "Find Notes Fast",
        description: "Easily search and find notes on unique subjects.",
    },
    {
        icon: PlayCircle,
        iconColor: "bg-blue-500",
        title: "Explore Fun Learning",
        description: "Watch short, engaging educational clips on topics.",
    },
    {
        icon: Shield,
        iconColor: "bg-blue-600",
        title: "Secure Transactions",
        description: "Payments are safely processed to protect users.",
    },
];

export default function FeaturesSection() {
    return (
        <section className="py-24 bg-[#e0f4ff] relative overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-[#002a51] mb-4">
                        Our Features
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-[#1a466b]">
                        Discover the key features that make our platform the best choice for
                        students to exchange notes and explore educational resources
                    </p>
                </div>

                {/* Devices Display */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
                    {/* Mobile Device Mockup - Using Real Image */}
                    <div className="relative">
                        <Image
                            src="/mobilemockup.png"
                            alt="Mobile app showing SohojPath features"
                            width={400}
                            height={600}
                            className="w-auto h-[600px] object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>

                    {/* Laptop/Desktop Device Mockup */}
                    <div className="relative mt-16 lg:mt-0">
                        {/* Laptop Base */}
                        <div className="relative">
                            {/* Laptop Screen */}
                            <div className="bg-gray-800 rounded-t-2xl p-3 shadow-2xl">
                                <div className="bg-white rounded-xl overflow-hidden w-[600px] h-[400px]">
                                    {/* Browser Bar */}
                                    <div className="bg-gray-100 h-10 flex items-center px-4 border-b">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                        </div>
                                        <div className="flex-1 mx-4">
                                            <div className="bg-white rounded-md px-3 py-1 text-sm text-gray-500">
                                                sohojpath.com
                                            </div>
                                        </div>
                                    </div>

                                    {/* Laptop Content */}
                                    <div className="p-8">
                                        <div className="text-center mb-6">
                                            <h3 className="text-2xl font-bold text-[#003566] mb-2">Platform Features</h3>
                                            <p className="text-gray-600">Complete solution for students</p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-6">
                                            {features.map((feature, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-300"
                                                >
                                                    <div
                                                        className={`flex-shrink-0 rounded-full w-12 h-12 ${feature.iconColor} flex items-center justify-center shadow-md`}
                                                    >
                                                        <feature.icon className="w-6 h-6 text-white" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-bold text-gray-900 mb-2 text-sm">
                                                            {feature.title}
                                                        </h4>
                                                        <p className="text-xs text-gray-600 leading-relaxed">
                                                            {feature.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Laptop Base */}
                            <div className="h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-2xl"></div>
                            <div className="h-2 w-48 bg-gradient-to-b from-gray-600 to-gray-700 mx-auto rounded-b-lg"></div>
                        </div>
                    </div>
                </div>

                {/* Background decorations */}
                <div className="absolute top-20 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-20 h-20 bg-purple-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-20 w-12 h-12 bg-indigo-200 rounded-full opacity-30 animate-pulse delay-500"></div>
            </div>
        </section>
    );
}
