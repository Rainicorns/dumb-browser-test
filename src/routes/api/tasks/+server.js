import { json } from '@sveltejs/kit';

export function GET() {
	return json({
		tasks: [
			{
				id: 1,
				name: "Review WEG Meeting Protocol",
				description: "Analyze the latest Eigentümerversammlung protocol and summarize key decisions and action items"
			},
			{
				id: 2,
				name: "Check Maintenance Schedule Compliance",
				description: "Review upcoming maintenance tasks for the property and verify compliance with WEG regulations"
			},
			{
				id: 3,
				name: "Prepare Annual Budget Report",
				description: "Generate Wirtschaftsplan overview and summarize budget allocations for the fiscal year"
			},
			{
				id: 4,
				name: "Analyze Reserve Fund Status",
				description: "Review Instandhaltungsrücklage and provide recommendations for proper funding levels"
			},
			{
				id: 5,
				name: "Draft Owner Communication",
				description: "Prepare communication to Wohnungseigentümer regarding upcoming building works or fee changes"
			},
			{
				id: 6,
				name: "Review Legal Compliance",
				description: "Check property management activities for compliance with current WEG and BGB regulations"
			}
		]
	});
}
