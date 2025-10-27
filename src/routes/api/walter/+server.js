import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const { question } = await request.json();

	return json({
		question: question,
		response: "This is just a dumb test. Presumably here the raw prose would be processed by an LLM from another system, thus showing how the LLM in a smart browser plus a specialist product agent can interact.",
		timestamp: new Date().toISOString(),
		agent: "Walter (German WEG Industry Expert)"
	});
}
