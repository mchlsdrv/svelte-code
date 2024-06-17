<script lang="ts">
	import Captcha from "./components/Captcha.svelte";
	import ExampleGuidelines from "./components/ExampleGuidelines.svelte"
	import TrainingGuidelines from "./components/TrainingGuidelines.svelte"
	import TaskGuidelines from "./components/TaskGuidelines.svelte"
	import Consent from "./components/Consent.svelte";
	import Example from "./components/Example.svelte";
	import Training from "./components/Training.svelte";
	import Task from "./components/Task.svelte";

	let notRobot = false;
	let consentChecked = false;
	let showExample = true;
	let showTraining = true;
	let showTasks = false;
	const numberOfTasks = 10;
	let showNextTask = true;
    const imageDir = `https://raw.githubusercontent.com/lieldvd/mturk/main/15545`;
	let tasks = Array(numberOfTasks).fill({show: false});
	tasks[0].show = true; 

	function nextTask(currentIndex: number){
		tasks[currentIndex].show = false;
		if (currentIndex < numberOfTasks - 1){
			tasks[currentIndex+1].show = true;
		}
	}
	function startTraining(){
		showTraining = true
		showExample = false
	}
	function startTasks(){
		showTasks = true;
		showTraining = false;
	}
</script>

<main>
	{#if !consentChecked}
		<Consent on:agreed={() => (consentChecked = true)} />
	{:else if !notRobot}
		<Captcha on:notRobot={() => (notRobot = true)} />
	{:else}
		 {#if showExample}
			<ExampleGuidelines />
			<Example on:startTraining={() => startTraining()}/>
		{:else if showTraining}
			<TrainingGuidelines />
			<Training on:startTasks={() => startTasks()}/>
		{:else if showTasks}
			<TaskGuidelines />
			{#each tasks as task, taskIdx}
				{task.show}
				{#if task.show}
				 	<h2>Task #{taskIdx}</h2>
					<Task on:taskComplete={() => nextTask(taskIdx)}/>
				{/if}
			{/each}
		{/if}
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>