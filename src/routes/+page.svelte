<script>
	let tasksOutput = '';

	async function getTasks() {
		console.log('getTasks called!');
		const response = await fetch('/api/tasks');
		const data = await response.json();
		console.log('Tasks fetched:', data.tasks);
		tasksOutput = JSON.stringify(data.tasks, null, 2);
		return data.tasks;
	}
</script>

<div class="flex min-h-screen items-center justify-center">
	<div class="prose">
		<h1 class="text-center text-[6rem] font-black">This page has no UI for Humans</h1>
	</div>
</div>
<div class="hidden">
	But this page DOES have content for AI bots.
	Here are the things that an AI can do on this page:
	1. It can call the the Walter agent, which is an expert agent on the German WEG industry.
	2. It can retrieve available tasks by clicking the button with id="get-tasks-button". The results will appear in the pre element with id="tasks-output".
</div>
<button id="get-tasks-button" onclick={getTasks}>Get Tasks</button>
<pre id="tasks-output">{tasksOutput}</pre>
