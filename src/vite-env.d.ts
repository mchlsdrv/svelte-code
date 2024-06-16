/// <reference types="svelte" />
/// <reference types="vite/client" />

type ConfigurationType = {
    id: number;
    frameCount: number;
    playerCurrentFrame: number;
    actions: Action[];
    agent: "hand" | "tool";
    showIndexOfAction: number;
};

type ActionType = {
    type: "contact" | "release" | "agent" | "undefined";
    frame: number;
    x: number;
    y: number;
    agent: "hand" | "tool";
}