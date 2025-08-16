"use client";

import React, { useMemo, useState } from "react";
import Sidebar from "@/components/layout/sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Search, Calendar, MapPin, Star, Bookmark } from "lucide-react";

type Deal = {
	id: number;
	company: string;
	title: string;
	type: string; // Course | Internship | Ambassador ...
	deadline?: string;
	mode?: string; // Remote/Onsite/Hybrid
	description: string;
	applicants: number;
	likes: number;
	featured?: boolean;
};

const categories = [
	{ key: "courses", label: "Courses" },
	{ key: "internships", label: "Internships" },
	{ key: "ambassador", label: "Campus Ambassador" },
	{ key: "content", label: "Content Writing" },
	{ key: "programming", label: "Programming & Hackathons" },
	{ key: "scholarships", label: "Scholarships" },
];

const sampleDeals: Deal[] = [
	{
		id: 1,
		company: "TechCorp",
		title: "Summer Internship — Backend Engineering",
		type: "Internship",
		deadline: "2025-09-10",
		mode: "Remote",
		description: "6-week internship working on APIs and distributed systems.",
		applicants: 42,
		likes: 18,
		featured: true,
	},
	{
		id: 2,
		company: "LearnX",
		title: "Advanced Web3 Course (Scholarship available)",
		type: "Course",
		deadline: "2025-12-31",
		mode: "Online",
		description: "A project-based course on smart contracts and dApps.",
		applicants: 120,
		likes: 65,
	},
	{
		id: 3,
		company: "Campus Club",
		title: "Campus Ambassador Program 2025",
		type: "Ambassador",
		deadline: "2025-08-30",
		mode: "Hybrid",
		description: "Represent the brand on campus and organise events.",
		applicants: 10,
		likes: 5,
	},
];

export default function DealsPage() {
	const [query, setQuery] = useState("");
	const [sort, setSort] = useState("Latest");
	const [filters, setFilters] = useState<Record<string, boolean>>({});
	const [deals, setDeals] = useState<Deal[]>(sampleDeals);
	const [visible, setVisible] = useState(6);

	const filtered = useMemo(() => {
		let res = deals.filter((d) => {
			const q = query.trim().toLowerCase();
			if (q) {
				return (
					d.title.toLowerCase().includes(q) ||
					d.company.toLowerCase().includes(q) ||
					d.type.toLowerCase().includes(q)
				);
			}
			return true;
		});

		const activeCats = Object.entries(filters).filter(([, v]) => v).map(([k]) => k);
		if (activeCats.length) {
			// simple mapping: check type -> category keys
			res = res.filter((d) => activeCats.some((c) => d.type.toLowerCase().includes(c.replace(/s$/, ""))));
		}

		if (sort === "Popular") {
			res = res.sort((a, b) => b.likes - a.likes);
		} else if (sort === "Ending Soon") {
			res = res.sort((a, b) => (a.deadline || "").localeCompare(b.deadline || ""));
		} else {
			res = res.sort((a, b) => b.id - a.id);
		}

		return res;
	}, [deals, query, filters, sort]);

	return (
		<div className="min-h-screen bg-white">
			<Sidebar />

			<main className="p-6">
				<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
					<div>
						{/* Header */}
						<div className="flex items-center justify-between mb-4">
							<div>
								<h1 className="text-2xl font-semibold">Deals & Opportunities</h1>
								<p className="text-sm text-gray-500">Find courses, internships and campus roles curated for you.</p>
							</div>

							<div className="flex items-center gap-3">
								<div className="relative">
									<Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
									<input
										value={query}
										onChange={(e) => setQuery(e.target.value)}
										placeholder="Search by company, title, type"
										className="pl-10 pr-4 py-2 rounded-lg border bg-white"
									/>
								</div>

								<select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-md border px-3 py-2 bg-white">
									<option>Latest</option>
									<option>Popular</option>
									<option>Ending Soon</option>
								</select>

								<Button className="bg-blue-600 text-white">Post Deal</Button>
							</div>
						</div>

						{/* Filters */}
						<div className="mb-4 flex flex-wrap gap-3">
							{categories.map((c) => (
								<label key={c.key} className="inline-flex items-center gap-2 text-sm">
									<input
										type="checkbox"
										checked={!!filters[c.key]}
										onChange={(e) => setFilters((f) => ({ ...f, [c.key]: e.target.checked }))}
										className="w-4 h-4"
									/>
									<span>{c.label}</span>
								</label>
							))}
						</div>

						{/* Deals grid */}
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{filtered.slice(0, visible).map((d) => (
								<Card key={d.id} className="shadow-sm">
									<CardContent>
										<div className="flex items-start gap-4">
											<Avatar>
												<div className="bg-gray-200 size-8 flex items-center justify-center">{d.company?.[0]}</div>
											</Avatar>
											<div className="flex-1">
												<div className="flex items-center justify-between gap-3">
													<div>
														<div className="text-sm font-medium">{d.company}</div>
														<a className="text-lg font-semibold text-gray-800 block hover:underline">{d.title}</a>
													</div>
													<div className="text-xs text-gray-500">{d.mode}</div>
												</div>

												<div className="mt-2 flex items-center gap-2">
													<span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600">{d.type}</span>
													{d.deadline && (
														<span className="text-xs text-gray-500 inline-flex items-center gap-1">
															<Calendar className="w-3 h-3" /> {new Date(d.deadline).toLocaleDateString()}
														</span>
													)}
												</div>

												<p className="mt-2 text-sm text-gray-700 line-clamp-2">{d.description}</p>

												<div className="mt-3 flex items-center justify-between">
													<div className="text-xs text-gray-500">{d.applicants} applicants • {d.likes} likes</div>
													<div className="flex items-center gap-2">
														<Button variant="ghost">Apply Now</Button>
														<button className="inline-flex items-center gap-2 px-3 py-1 rounded-md border text-sm">
															<Bookmark className="w-4 h-4" /> Save
														</button>
													</div>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>

						<div className="mt-6 flex justify-center">
							{visible < filtered.length ? (
								<Button onClick={() => setVisible((v) => v + 6)}>Load more</Button>
							) : (
								<div className="text-sm text-gray-500">No more deals</div>
							)}
						</div>
					</div>

					{/* Right column */}
					<aside className="hidden lg:block">
						<div className="space-y-4 sticky top-6">
							<section>
								<h4 className="text-sm font-semibold text-gray-700 mb-2">Featured Deals</h4>
								<div className="flex flex-col gap-3">
									{deals.filter((d) => d.featured).map((d) => (
										<div key={d.id} className="bg-white p-3 rounded-md border">
											<div className="flex items-center justify-between">
												<div>
													<div className="text-sm font-medium">{d.company}</div>
													<div className="text-xs text-gray-500">{d.title}</div>
												</div>
												<span className="text-xs text-yellow-600 inline-flex items-center gap-1"><Star className="w-4 h-4" /> Featured</span>
											</div>
										</div>
									))}
								</div>
							</section>

							<section>
								<h4 className="text-sm font-semibold text-gray-700 mb-2">Closing Soon</h4>
								<div className="flex flex-col gap-2">
									{deals
										.filter((d) => d.deadline)
										.sort((a, b) => (a.deadline || "").localeCompare(b.deadline || ""))
										.slice(0, 3)
										.map((d) => (
											<div key={d.id} className="bg-white p-3 rounded-md border text-sm">
												<div className="flex items-center justify-between">
													<div className="font-medium">{d.title}</div>
													<div className="text-xs text-gray-500">{new Date(d.deadline!).toLocaleDateString()}</div>
												</div>
											</div>
										))}
								</div>
							</section>

							<section>
								<h4 className="text-sm font-semibold text-gray-700 mb-2">Recommended for You</h4>
								<div className="flex flex-col gap-2">
									{deals.slice(0, 3).map((d) => (
										<div key={d.id} className="bg-white p-3 rounded-md border">
											<div className="text-sm font-medium">{d.company}</div>
											<div className="text-xs text-gray-500">{d.type} • {d.mode}</div>
											<div className="mt-2 flex items-center gap-2">
												<Button size="sm">Apply</Button>
												<Button variant="ghost" size="sm">Save</Button>
											</div>
										</div>
									))}
								</div>
							</section>
						</div>
					</aside>
				</div>
			</main>
		</div>
	);
}
