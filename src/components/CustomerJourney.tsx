import { Card, CardContent } from "@/components/ui/card";
import { Clock, UserCheck, Laptop, ThumbsUp } from "lucide-react";

export function CustomerJourney() {
	const steps = [
		{
			icon: <Clock className="h-8 w-8" />,
			title: "Quick Consultation",
			description: "Schedule a free consultation to discuss your needs and get $100 OFF",
			time: "15 minutes"
		},
		{
			icon: <UserCheck className="h-8 w-8" />,
			title: "VA Matching",
			description: "Get matched with a pre-vetted VA from our top 0.1% talent pool",
			time: "30 minutes"
		},
		{
			icon: <Laptop className="h-8 w-8" />,
			title: "Onboarding",
			description: "Start working with your VA and delegate tasks immediately",
			time: "15 minutes"
		},
		{
			icon: <ThumbsUp className="h-8 w-8" />,
			title: "Ongoing Support",
			description: "Receive continuous support and easy VA replacement if needed",
			time: "Continuous"
		}
	];

	return (
		<div className="relative">
			{/* Connection lines */}
			<div className="absolute top-24 left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 hidden md:block" />
			
			<div className="grid md:grid-cols-4 gap-6">
				{steps.map((step, index) => (
					<Card key={index} className="relative bg-card">
						<CardContent className="pt-6">
							<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-background rounded-full p-4 border-4 border-background">
								<div className="bg-primary/10 rounded-full p-2 text-primary">
									{step.icon}
								</div>
							</div>
							<div className="text-center mt-8">
								<h3 className="font-semibold mb-2">{step.title}</h3>
								<p className="text-sm text-muted-foreground mb-2">{step.description}</p>
								<span className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
									{step.time}
								</span>
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			<div className="mt-8 text-center">
				<p className="text-lg text-muted-foreground">
					Total time from consultation to working with your VA:{" "}
					<span className="font-semibold text-primary">60 minutes</span>
				</p>
			</div>
		</div>
	);
}