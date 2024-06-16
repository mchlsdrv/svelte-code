<script lang="ts">
	import { onMount } from "svelte";
	import { writable } from "svelte/store"; 
	import Captcha from "./components/Captcha.svelte";
	import Guidelines from "./components/Guidelines.svelte";
	import Consent from "./components/Consent.svelte";
	import Example from "./components/Example.svelte";

	const _configurationToRun: ConfigurationType[] = [];

	const store = writable<ConfigurationType[]>(_configurationToRun);
	const configurationToRun = {
		...store,
	};
	let consentChecked = false;
	console.log(consentChecked)
	let formToSend: HTMLFormElement;
	let notRobot = false;

	let showForm = false;
	let errMsg = "";
	let alrtShown = false;

	let attempts = 0;

	const maxAttempts = 2;

	let showSbmtBtn = true;

	let sbmtBtn: HTMLInputElement | null;

	$: {console.log($configurationToRun)};

	const searchAndCreateConfiguration = () => {
		const configs: ConfigurationType[] = [];
		const items = document.querySelectorAll(".variable-feed");
		if (items.length){
			items.forEach((v) => {
				const variableName = v.innerHTML.split(":;:")[0].trim();
				const variableValue = v.innerHTML.split(":;:")[1].trim();
				configs.push(
					{
						id: +variableName || 
						0, frameCount: +variableValue || 
						0, actions: [], 
						agent: "hand", 
						playerCurrentFrame: 0, 
						showIndexOfAction: 0
					}
				);
			})
		}
	}

	const createInput = (name: string, value: any) => {
		const input = document.createElement("input");
		input.type = "hidden";
		input.name;
		return input;
	}

	const submitForm = (event: MouseEvent) => {
		console.log("Submitting form ...");
		console.log("Answer:", notRobot);

		if (notRobot){
			const allTasksCompleted = $configurationToRun.every(
				(configuration) => 
					configuration.actions && 
					configuration.actions.every((action, index) => {
						if (index <= configuration.showIndexOfAction){
							return action.type !== undefined && // <= if the action was selected
								action.agent != undefined && // <= if the agent was selected
								action.frame !== 0 && // <= if the frame is not the first frame
								action.x != 0 && // <= if x is in boundries
								action.y != 0; // <= if y is in boundries
						} else {
							return true;
						}
					})
			);
			console.log("All Tasks Completed:", allTasksCompleted);

			if (!allTasksCompleted){
				event.preventDefault();
				event.stopPropagation();
				alert("Please fill all incomplete input fields. Please complete all tasks before submission.");
				return;
			} else {
				console.log("Submitting form ...");
				formToSend.submit();
			}
		} else {
			event.preventDefault();
			event.stopPropagation();
			alert("Your answer is wrong!");
			return;
		}
	};

	const submitAnswer = (event: any) => {
		event.preventDefault();
		event.stopPropagation();
		if (notRobot) {
			showForm = true;
			errMsg = "";
			showSbmtBtn = true;
			alrtShown = false;
			if (sbmtBtn) {
				sbmtBtn.style.display = "block";
			}
			attempts = 0;
		} else {
			attempts ++;

			if (attempts >= maxAttempts && !alrtShown){
				errMsg = "You are not allowed to continue."

				showSbmtBtn = false;

				alert(errMsg);

				alrtShown = true;

				return;
			}
		}
	}
	onMount(() => {
		searchAndCreateConfiguration();

		sbmtBtn = document.querySelector("#submitButton");
		if (sbmtBtn) {
			sbmtBtn.style.display = "none";
			sbmtBtn.addEventListener("click", submitForm);

		}
	});
	console.log({notRobot})
    const imageDir = `https://raw.githubusercontent.com/lieldvd/mturk/main/15545`;
</script>

<main>
	{#if !consentChecked}
		<Consent on:agreed={() => (consentChecked = true)} />
	{:else if !notRobot}
		<Captcha on:notRobot={() => (notRobot = true)} />
	{:else}
		<Guidelines />
		<Example />
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