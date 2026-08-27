import { css, createDelegate, type Component } from "dreamland/core";
import type { Frame } from "@mercuryworkshop/scramjet-controller";
import FlagEditor from "./components/FlagEditor";
import BrowserView from "./pages/BrowserView";
import RequestViewer from "./pages/RequestViewer";
import PlaygroundView from "./pages/Playground";
import SettingsView from "./pages/SettingsPage";
import { Omnibox } from "./pages/BrowserView";
import { requestsState } from "./pages/RequestViewer";

const App: Component<
	{},
	{},
	{
		activeTab: "browser" | "requests" | "playground" | "settings";
	}
> = function (cx) {
	this.activeTab ??= "browser";
	return (
		<div>
			<div class="mantis-header">
				<div class="header-content">
					<div class="logo-section">
						<svg class="mantis-logo-small" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
							<defs>
								<linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
									<stop offset="0%" style="stop-color:#FF6B35;stop-opacity:1" />
									<stop offset="100%" style="stop-color:#FF8C42;stop-opacity:1" />
								</linearGradient>
							</defs>
							<circle cx="100" cy="100" r="95" fill="none" stroke="url(#logoGradient)" stroke-width="2" opacity="0.3" />
							<path d="M 100 40 L 110 45 L 115 55 L 110 65 L 100 70 L 90 65 L 85 55 L 90 45 Z" fill="url(#logoGradient)" stroke="#FF6B35" stroke-width="1.5"/>
							<circle cx="95" cy="55" r="3" fill="#FFB84D"/><circle cx="105" cy="55" r="3" fill="#FFB84D"/>
							<ellipse cx="100" cy="110" rx="12" ry="35" fill="url(#logoGradient)" opacity="0.7" stroke="#FF6B35" stroke-width="1"/>
						</svg>
						<div class="brand-info">
							<h1>Mantis</h1>
							<p>Lightweight Web Proxy</p>
						</div>
					</div>
				</div>
			</div>
			<div class="top-bar">
				<div class="tab-bar">
					<button
						class={use(this.activeTab).map(
							(tab) => `tab-button ${tab === "browser" ? "active" : ""}`
						)}
						on:click={() => {
							this.activeTab = "browser";
						}}
					>
						<span class="material-symbols-outlined">language</span>
						Browser
					</button>
					<button
						class={use(this.activeTab).map(
							(tab) => `tab-button ${tab === "requests" ? "active" : ""}`
						)}
						on:click={() => {
							this.activeTab = "requests";
						}}
					>
						<span class="material-symbols-outlined">dns</span>
						Network{" "}
						{use(requestsState.requests).map((requests) =>
							requests.length ? `(${requests.length})` : ""
						)}
					</button>
					<button
						class={use(this.activeTab).map(
							(tab) => `tab-button ${tab === "playground" ? "active" : ""}`
						)}
						on:click={() => {
							this.activeTab = "playground";
						}}
					>
						<span class="material-symbols-outlined">code</span>
						Playground
					</button>
					<button
						class={use(this.activeTab).map(
							(tab) => `tab-button ${tab === "settings" ? "active" : ""}`
						)}
						on:click={() => {
							this.activeTab = "settings";
						}}
					>
						<span class="material-symbols-outlined">settings</span>
						Settings
					</button>
					{use(this.activeTab)
						.map((tab) => tab === "browser")
						.andThen(<Omnibox />)}
				</div>
				<div class="top-actions">
					<FlagEditor inline={true} />
				</div>
			</div>
			<div
				class={use(this.activeTab).map(
					(tab) =>
						`tab-panel browser-panel ${tab === "browser" ? "active" : ""}`
				)}
			>
				<BrowserView
					active={use(this.activeTab).map((tab) => tab === "browser")}
				/>
			</div>
			<div
				class={use(this.activeTab).map(
					(tab) =>
						`tab-panel requests-panel ${tab === "requests" ? "active" : ""}`
				)}
			>
				<RequestViewer
					active={use(this.activeTab).map((tab) => tab === "requests")}
				/>
			</div>
			<div
				class={use(this.activeTab).map(
					(tab) =>
						`tab-panel playground-panel ${tab === "playground" ? "active" : ""}`
				)}
			>
				<PlaygroundView
					active={use(this.activeTab).map((tab) => tab === "playground")}
				/>
			</div>
			<div
				class={use(this.activeTab).map(
					(tab) =>
						`tab-panel settings-tab ${tab === "settings" ? "active" : ""}`
				)}
			>
				<SettingsView />
			</div>
		</div>
	);
};

App.style = css`
	@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0");

	:scope {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		margin: 0;
		overflow: hidden;
		position: absolute;
		top: 0;
		left: 0;

		padding: 0;
		background: linear-gradient(135deg, #0A0E27 0%, #1a1f3a 100%);
		box-sizing: border-box;
	}
	
	.mantis-header {
		background: linear-gradient(90deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 140, 66, 0.05) 100%);
		border-bottom: 2px solid rgba(255, 107, 53, 0.3);
		padding: 1rem 1.5rem;
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	
	.header-content {
		display: flex;
		align-items: center;
		width: 100%;
		gap: 1rem;
	}
	
	.logo-section {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}
	
	.mantis-logo-small {
		width: 40px;
		height: 40px;
		flex-shrink: 0;
		filter: drop-shadow(0 0 8px rgba(255, 107, 53, 0.4));
	}
	
	.brand-info {
		display: flex;
		flex-direction: column;
		gap: 0;
	}
	
	.brand-info h1 {
		margin: 0;
		font-size: 1.5rem;
		font-weight: 700;
		background: linear-gradient(135deg, #FF6B35 0%, #FFB84D 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		letter-spacing: -0.5px;
	}
	
	.brand-info p {
		margin: 0;
		font-size: 0.75rem;
		color: #a8a8a8;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}
	
	.material-symbols-outlined {
		font-family: "Material Symbols Outlined";
		font-weight: normal;
		font-style: normal;
		font-size: 18px;
		line-height: 1;
		letter-spacing: normal;
		text-transform: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		white-space: nowrap;
		word-wrap: normal;
		direction: ltr;
		-webkit-font-smoothing: antialiased;
	}
	
	.top-bar {
		display: flex;
		align-items: stretch;
		gap: 0;
		margin-bottom: 0;
		border-bottom: 1px solid rgba(255, 107, 53, 0.2);
		background: rgba(15, 15, 15, 0.8);
		backdrop-filter: blur(10px);
	}
	
	.tab-bar {
		display: flex;
		flex: 1;
		align-items: stretch;
		gap: 0;
	}
	
	.tab-button {
		border: 1px solid transparent;
		border-bottom: 0;
		background: transparent;
		color: #a8a8a8;
		padding: 0.6rem 1rem;
		border-radius: 0;
		cursor: pointer;
		font-size: 0.95rem;
		line-height: 1.2;
		min-height: 44px;
		margin: 0;
		white-space: nowrap;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: 500;
		transition: all 0.2s ease;
		position: relative;
	}
	
	.tab-button:hover {
		background: rgba(24, 24, 24, 0.6);
		color: #d0d0d0;
	}
	
	.tab-button.active {
		background: rgba(31, 31, 31, 0.8);
		color: #FF6B35;
		border-color: rgba(255, 107, 53, 0.3);
		margin-bottom: -1px;
		border-bottom: 2px solid #FF6B35;
	}
	
	.tab-button.active .material-symbols-outlined {
		color: #FF6B35;
		text-shadow: 0 0 8px rgba(255, 107, 53, 0.4);
	}
	
	.top-actions {
		display: flex;
		align-items: center;
		margin-left: auto;
		padding: 0 1rem;
		min-height: 44px;
	}
	
	.tab-panel {
		flex: 1;
		width: 100%;
		min-width: 0;
		min-height: 0;
		display: none;
	}
	
	.tab-panel.active {
		display: flex;
	}
	
	.requests-panel {
		flex-direction: column;
	}
	
	.playground-panel {
		width: 100%;
		min-width: 0;
		min-height: 0;
	}
	
	.settings-tab {
		width: 100%;
		min-width: 0;
		min-height: 0;
	}
`;
export default App;
