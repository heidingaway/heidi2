/**
 * Obsidian Publish Graph Tweaker
 * Customizes the graph view by manipulating the canvas renderer state
 */

// Configuration - Customize these values
const config = {
    // Base colors for graph elements
    baseColors: {
        line: { a: 0.6, rgb: 0x5ab873 },
        fill: { a: 1, rgb: 0x6bd385 },
        fillUnresolved: { a: 0.4, rgb: 0x6bd385 },
        text: { a: 1, rgb: 0xF4FFBF },
        fillHighlight: { a: 1, rgb: 0x5ab873 },
        lineHighlight: { a: 0.8, rgb: 0x5ab873 },
        circle: { a: 1, rgb: 0x6bd385 },
        fillFocused: { a: 1, rgb: 0x00FF00 }
    },
    // Color patterns for different types of nodes
    nodeColors: [
        { regex: /^Item\//, color: { a: 1, rgb: 0x00FF00 } },
        { regex: /^Spell\//, color: { a: 1, rgb: 0xFF8C00 } },
        { regex: /^World Boss/, color: { a: 1, rgb: 0xFF0040 } },
        { regex: /^Monster/, color: { a: 1, rgb: 0x6200FF } },
        { regex: /^NPC/, color: { a: 1, rgb: 0x8E00FF } },
        { regex: /^Locations\//, color: { a: 1, rgb: 0xFFDA00 } },
        { regex: /^Ore/, color: { a: 1, rgb: 0x00FFD2 } }
    ]
};

// State tracking
let lastProcessedState = '';
let persistenceInterval;

// Main update function
const applyGraphChanges = (force = false) => {
    if (!app?.graph?.renderer) return;

    // Track state changes
    const currentState = JSON.stringify({
        isExpanded: document.querySelector('.expanded-graph') !== null,
        navigationPath: window.location.pathname,
        hasHanger: !!app.graph.renderer.hanger,
        hasNodeLookup: !!app.graph.renderer.nodeLookup
    });

    if (!force && currentState === lastProcessedState) return;
    lastProcessedState = currentState;

    // Clear existing interval
    if (persistenceInterval) {
        clearInterval(persistenceInterval);
    }

    const applySettings = () => {
        app.graph.renderer.hidePowerTag = true;

        // Apply base colors
        if (app.graph.renderer.colors) {
            Object.assign(app.graph.renderer.colors, config.baseColors);
        }

        // Apply node colors
        if (app.graph.renderer.nodeLookup) {
            const lookup = app.graph.renderer.nodeLookup;
            const keys = Object.keys(lookup);

            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                const node = lookup[key];

                for (const { regex, color } of config.nodeColors) {
                    if (regex.test(key)) {
                        const currentColor = node.color;
                        if (!currentColor || currentColor.a !== color.a || currentColor.rgb !== color.rgb) {
                            node.color = color;
                        }
                        break;
                    }
                }
            }
        }

        app.graph.renderer.renderCallback();
    };

    // Apply immediately and persist
    applySettings();
    persistenceInterval = setInterval(applySettings, 300);

    // Stop persistence after 1.5 seconds
    setTimeout(() => {
        if (persistenceInterval) {
            clearInterval(persistenceInterval);
            persistenceInterval = null;
        }
    }, 1500);
};

// Set up observers and event listeners
const observer = new MutationObserver((mutations) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => applyGraphChanges(), 50);
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true
});

window.addEventListener('popstate', () => applyGraphChanges(true));
document.addEventListener('click', () => {
    setTimeout(() => applyGraphChanges(true), 100);
});