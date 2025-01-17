import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, DollarSign, TrendingUp, Users } from "lucide-react";

export function CaseStudies() {
	const caseStudies = [
		{
			industry: "Healthcare",
			title: "Medical Practice Efficiency Boost",
			description: "How a busy medical practice reduced administrative overhead and improved patient care",
			metrics: [
				{ icon: <Clock />, label: "Admin Time Saved", value: "30hrs/week" },
				{ icon: <Users />, label: "Patient Satisfaction", value: "+45%" },
				{ icon: <DollarSign />, label: "Revenue Increase", value: "25%" },
				{ icon: <TrendingUp />, label: "Patient Capacity", value: "+40%" },
			],
			quote: "WishUp's VA transformed our practice. We can now focus entirely on patient care while knowing all administrative tasks are handled professionally.",
			author: "Dr. Sarah Johnson, MD",
		},
		{
			industry: "eCommerce",
			title: "Online Store Scale-Up Success",
			description: "How an eCommerce business automated operations and boosted sales",
			metrics: [
				{ icon: <Clock />, label: "Time Saved", value: "25hrs/week" },
				{ icon: <Users />, label: "Customer Service", value: "24/7" },
				{ icon: <DollarSign />, label: "Sales Growth", value: "35%" },
				{ icon: <TrendingUp />, label: "Order Processing", value: "2x faster" },
			],
			quote: "Our VA handles everything from customer support to inventory management. It's like having a full-time operations team at a fraction of the cost.",
			author: "Michael Chen, eCommerce Owner",
		},
		{
			industry: "Real Estate",
			title: "Property Management Revolution",
			description: "How a real estate agent expanded their portfolio while reducing workload",
			metrics: [
				{ icon: <Clock />, label: "Time Saved", value: "20hrs/week" },
				{ icon: <Users />, label: "Lead Response", value: "100% faster" },
				{ icon: <DollarSign />, label: "Revenue Growth", value: "40%" },
				{ icon: <TrendingUp />, label: "Listings Managed", value: "3x more" },
			],
			quote: "With WishUp's VA handling all the paperwork and scheduling, I can focus on closing deals and growing my business.",
			author: "Emma Davis, Real Estate Agent",
		},
	];

	return (
		<Tabs defaultValue="Healthcare" className="w-full">
			<TabsList className="grid w-full grid-cols-3 mb-8">
				{caseStudies.map((study) => (
					<TabsTrigger key={study.industry} value={study.industry}>
						{study.industry}
					</TabsTrigger>
				))}
			</TabsList>
			{caseStudies.map((study) => (
				<TabsContent key={study.industry} value={study.industry}>
					<Card>
						<CardHeader>
							<div className="flex items-center justify-between mb-2">
								<Badge variant="secondary" className="bg-primary/10 text-primary">
									{study.industry}
								</Badge>
								<Badge variant="outline">Success Story</Badge>
							</div>
							<CardTitle className="text-2xl">{study.title}</CardTitle>
							<CardDescription>{study.description}</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid md:grid-cols-4 gap-4 mb-8">
								{study.metrics.map((metric, index) => (
									<div key={index} className="flex flex-col items-center p-4 bg-accent/50 rounded-lg">
										<div className="text-primary mb-2">{metric.icon}</div>
										<div className="text-2xl font-bold mb-1">{metric.value}</div>
										<div className="text-sm text-muted-foreground text-center">{metric.label}</div>
									</div>
								))}
							</div>
							<blockquote className="border-l-4 border-primary pl-4 italic mb-4">
								{study.quote}
							</blockquote>
							<p className="text-sm text-muted-foreground">— {study.author}</p>
						</CardContent>
					</Card>
				</TabsContent>
			))}
		</Tabs>
	);
}