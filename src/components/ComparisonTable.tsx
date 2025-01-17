import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ComparisonTable() {
	const features = [
		{ name: "Hiring Time", wishup: "60 minutes", others: "1-4 weeks", highlight: true },
		{ name: "Talent Quality", wishup: "Top 0.1%", others: "Varied" },
		{ name: "Recruiting Fee", wishup: "Low", others: "High" },
		{ name: "Quality Guarantee", wishup: true, others: false },
		{ name: "Failure Rate", wishup: "Low", others: "High", highlight: true },
		{ name: "Pre-Screened", wishup: true, others: false },
		{ name: "Full-time Support", wishup: true, others: "Limited" },
		{ name: "Tools Training", wishup: "70+ Tools", others: "Basic" },
		{ name: "Instant Replacement", wishup: true, others: false },
	];

	return (
		<div className="rounded-lg border bg-card">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[200px]">Features</TableHead>
						<TableHead>
							<div className="flex items-center gap-2">
								WishUp
								<Badge variant="secondary" className="bg-primary/10 text-primary">
									Recommended
								</Badge>
							</div>
						</TableHead>
						<TableHead>Other Platforms</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{features.map((feature, index) => (
						<TableRow key={index} className={feature.highlight ? "bg-primary/5" : ""}>
							<TableCell className="font-medium">{feature.name}</TableCell>
							<TableCell>
								{typeof feature.wishup === "boolean" ? (
									feature.wishup ? (
										<Check className="h-5 w-5 text-primary" />
									) : (
										<X className="h-5 w-5 text-destructive" />
									)
								) : (
									<span className={feature.highlight ? "text-primary font-semibold" : ""}>
										{feature.wishup}
									</span>
								)}
							</TableCell>
							<TableCell className="text-muted-foreground">
								{typeof feature.others === "boolean" ? (
									feature.others ? (
										<Check className="h-5 w-5 text-primary" />
									) : (
										<X className="h-5 w-5 text-destructive" />
									)
								) : (
									feature.others
								)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}