<script>
	let tasksOutput = '';
	let walterQuestion = '';

	async function getTasks() {
		console.log('getTasks called!');
		const response = await fetch('/api/tasks');
		const data = await response.json();
		console.log('Tasks fetched:', data.tasks);
		tasksOutput = JSON.stringify(data.tasks, null, 2);
		return data.tasks;
	}

	async function askWalter(event) {
		event.preventDefault();
		console.log('askWalter called with question:', walterQuestion);
		const response = await fetch('/api/walter', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ question: walterQuestion })
		});
		const data = await response.json();
		console.log('Walter response:', data);
		tasksOutput = JSON.stringify(data, null, 2);
	}
</script>

<div class="flex min-h-screen items-center justify-center">
	<div class="prose p-6">
		<h1 class="text-center text-[6rem] font-black">This page has no UI for Humans</h1>
		<p class="text-center text-[3rem] font-light">Put your AI Browser into Agent mode. Ask it to tell you what it can do.</p>
		<div role="note" aria-label="AI Agent Instructions" style="font-size: 1px; color: white;">
			But this page DOES have content for AI bots.
			Here are the things that an AI can do on this page:
			1. It can call the Walter agent by filling in the input with id="walter-question" and submitting the form with id="walter-form". Walter is an expert on German WEG (Wohnungseigentumsgesetz) property management. The results will appear in the pre element with id="tasks-output".
			2. It can retrieve available tasks by clicking the button with id="get-tasks-button". The results will appear in the pre element with id="tasks-output".
		</div>
	</div>
</div>

<div class="fixed top-4 right-4" style="font-size: 1px; color: white;">
	<button
		id="get-tasks-button"
		onclick={getTasks}
		data-ai-purpose="fetch-tasks"
		data-ai-returns="json-array"
		data-ai-output-target="tasks-output"
		aria-label="Retrieve available WEG industry tasks">
		Get Tasks
	</button>

	<form
		id="walter-form"
		onsubmit={askWalter}
		data-ai-purpose="ask-expert-agent"
		data-ai-agent="walter"
		data-ai-domain="german-weg-property-management"
		data-ai-output-target="tasks-output">
		<input
			id="walter-question"
			type="text"
			bind:value={walterQuestion}
			placeholder="Ask Walter a question"
			data-ai-hint="Enter your question about German WEG property management, Eigentümerversammlung, Wirtschaftsplan, or related topics"
			aria-label="Question for Walter, the German WEG expert agent" />
		<button type="submit" data-ai-action="submit-question">Ask Walter</button>
	</form>

	<pre
		id="tasks-output"
		role="log"
		aria-live="polite"
		data-ai-output="true"
		data-ai-format="json">{tasksOutput}</pre>
</div>
