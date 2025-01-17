import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function FAQ() {
	const faqs = {
		"Pre-Purchase Questions": [
			{
				question: "How quickly can I start working with my virtual assistant?",
				answer: "You can start working with your virtual assistant within 60 minutes of your initial consultation. Our streamlined onboarding process ensures quick and efficient matching with the right VA for your needs."
			},
			{
				question: "What is the difference between a WishUp virtual assistant and a freelance assistant?",
				answer: "WishUp VAs are pre-vetted, full-time employees who undergo rigorous training. Unlike freelancers, they come with quality guarantees, instant replacement options, and comprehensive support from our team."
			},
			{
				question: "What skills and experience do WishUp VAs have?",
				answer: "Our VAs are trained in 70+ tools including Google Workspace, QuickBooks, ChatGPT, and more. They're selected from the top 0.1% of applicants and have expertise in administrative tasks, bookkeeping, project management, and industry-specific requirements."
			}
		],
		"During Purchase Questions": [
			{
				question: "How do you handle data privacy and security?",
				answer: "We maintain strict data security protocols, including NDAs, secure communication channels, and regular security training for all VAs. Your business information is always protected with enterprise-grade security measures."
			},
			{
				question: "How do I communicate with my virtual assistant?",
				answer: "You can communicate through your preferred channels - email, Slack, Microsoft Teams, or any other platform. We adapt to your existing workflow and communication style."
			},
			{
				question: "Can my virtual assistant work weekends?",
				answer: "While our standard hours are Monday-Friday, we can arrange weekend coverage based on your specific needs. Discuss your requirements during the consultation for customized scheduling."
			}
		],
		"Post-Purchase Questions": [
			{
				question: "What happens if I'm not satisfied with my VA?",
				answer: "We offer instant replacement if you're not satisfied with your VA. Our quality guarantee ensures you always have the right talent for your needs, with no questions asked."
			},
			{
				question: "Can I upgrade my subscription later?",
				answer: "Yes, you can easily upgrade from the Kickstart Plan (4 hrs/day) to the Growth Engine Plan (8 hrs/day) as your needs grow. The transition is seamless with no service interruption."
			},
			{
				question: "What kind of ongoing support do you provide?",
				answer: "You receive continuous support including VA performance monitoring, regular check-ins, and access to our customer success team. We ensure your VA consistently meets your expectations."
			}
		]
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Frequently Asked Questions</CardTitle>
				<CardDescription>Everything you need to know about WishUp's virtual assistant services</CardDescription>
			</CardHeader>
			<CardContent>
				{Object.entries(faqs).map(([category, questions], categoryIndex) => (
					<div key={category} className={categoryIndex > 0 ? 'mt-8' : ''}>
						<h3 className="text-lg font-semibold mb-4">{category}</h3>
						<Accordion type="single" collapsible className="w-full">
							{questions.map((faq, index) => (
								<AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
									<AccordionTrigger className="text-left">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent>
										<p className="text-muted-foreground">{faq.answer}</p>
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				))}
			</CardContent>
		</Card>
	);
}