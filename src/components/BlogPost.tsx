import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AffiliateDisclaimer } from "./AffiliateDisclaimer";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface BlogPostProps {
	title: string;
	description: string;
	date: string;
	readTime: string;
	category: string;
	content: React.ReactNode;
	ctaLink?: string;
	ctaText?: string;
}

export function BlogPost({
	title,
	description,
	date,
	readTime,
	category,
	content,
	ctaLink = "https://www.wishup.co/",
	ctaText = "Start Your 60-Minute Journey",
}: BlogPostProps) {
	return (
		<article className="container mx-auto px-4 py-8 max-w-4xl">
			<header className="mb-8 text-center">
				<Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
					{category}
				</Badge>
				<h1 className="text-4xl font-bold mb-4">{title}</h1>
				<p className="text-xl text-muted-foreground mb-4">{description}</p>
				<div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
					<time>{date}</time>
					<span>•</span>
					<span>{readTime}</span>
				</div>
			</header>

			<AffiliateDisclaimer />

			<div className="prose dark:prose-invert max-w-none mb-12">
				{content}
			</div>

			<Card className="bg-primary/5 border-primary/20">
				<CardContent className="pt-6">
					<div className="text-center">
						<h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
						<p className="text-muted-foreground mb-6">
							Join 900+ businesses who trust WishUp's virtual assistants. Get started in just 60 minutes.
						</p>
						<Button 
							size="lg" 
							className="bg-primary"
							onClick={() => window.open(ctaLink, '_blank')}
						>
							{ctaText}
							<ArrowRight className="ml-2 h-4 w-4" />
						</Button>
					</div>
				</CardContent>
			</Card>
		</article>
	);
}