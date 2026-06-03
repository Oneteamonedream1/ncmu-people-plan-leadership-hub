/**
 * The 2026 NCMU People Plan Leadership Hub - Web Component
 * SharePoint-compatible web component for leadership hub functionality
 */

class NCMULeadershipHubComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    --primary-color: #0078d4;
                    --secondary-color: #107c10;
                    --text-color: #333;
                    --border-color: #e1e1e1;
                    --background-light: #f5f5f5;
                }

                .hub-container {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
                    color: var(--text-color);
                    padding: 20px;
                    background-color: #fff;
                }

                .hub-header {
                    border-bottom: 3px solid var(--primary-color);
                    padding-bottom: 20px;
                    margin-bottom: 30px;
                }

                .hub-title {
                    font-size: 32px;
                    font-weight: 600;
                    margin: 0;
                    color: var(--primary-color);
                }

                .hub-subtitle {
                    font-size: 14px;
                    color: #666;
                    margin: 10px 0 0 0;
                }

                .hub-content {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 20px;
                }

                .card {
                    background-color: var(--background-light);
                    border: 1px solid var(--border-color);
                    border-radius: 4px;
                    padding: 20px;
                    transition: box-shadow 0.2s ease;
                    cursor: pointer;
                }

                .card:hover {
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
                }

                .card-icon {
                    font-size: 32px;
                    margin-bottom: 12px;
                }

                .card-title {
                    font-size: 16px;
                    font-weight: 600;
                    margin: 0 0 10px 0;
                    color: var(--primary-color);
                }

                .card-description {
                    font-size: 14px;
                    color: #666;
                    margin: 0;
                }

                .button-group {
                    margin-top: 20px;
                    display: flex;
                    gap: 10px;
                }

                .btn {
                    padding: 10px 20px;
                    border: none;
                    border-radius: 2px;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .btn-primary {
                    background-color: var(--primary-color);
                    color: white;
                }

                .btn-primary:hover {
                    background-color: #005a9e;
                }

                .btn-secondary {
                    background-color: transparent;
                    color: var(--primary-color);
                    border: 1px solid var(--primary-color);
                }

                .btn-secondary:hover {
                    background-color: var(--background-light);
                }
            </style>

            <div class="hub-container">
                <div class="hub-header">
                    <h1 class="hub-title">The 2026 NCMU People Plan Leadership Hub</h1>
                    <p class="hub-subtitle">Empowering leadership excellence across NCMU</p>
                </div>

                <div class="hub-content">
                    <div class="card">
                        <div class="card-icon">👥</div>
                        <h3 class="card-title">Leadership Team</h3>
                        <p class="card-description">Connect with and learn from our executive leadership team committed to organizational excellence.</p>
                    </div>

                    <div class="card">
                        <div class="card-icon">📊</div>
                        <h3 class="card-title">Strategic Initiatives</h3>
                        <p class="card-description">Explore key strategic priorities and goals shaping our organization's future direction.</p>
                    </div>

                    <div class="card">
                        <div class="card-icon">📚</div>
                        <h3 class="card-title">Resources & Training</h3>
                        <p class="card-description">Access professional development materials and training programs for leadership growth.</p>
                    </div>

                    <div class="card">
                        <div class="card-icon">🤝</div>
                        <h3 class="card-title">Engagement & Culture</h3>
                        <p class="card-description">Foster a positive workplace culture through collaboration, recognition, and employee engagement.</p>
                    </div>

                    <div class="card">
                        <div class="card-icon">📈</div>
                        <h3 class="card-title">Performance Metrics</h3>
                        <p class="card-description">Review key performance indicators and progress toward organizational objectives.</p>
                    </div>

                    <div class="card">
                        <div class="card-icon">📞</div>
                        <h3 class="card-title">Contact & Support</h3>
                        <p class="card-description">Get in touch with the leadership team or find support for organizational initiatives.</p>
                    </div>
                </div>

                <div class="button-group">
                    <button class="btn btn-primary">Learn More</button>
                    <button class="btn btn-secondary">Get Involved</button>
                </div>
            </div>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // Add event listeners
        this.setupEventListeners();
    }

    setupEventListeners() {
        const buttons = this.shadowRoot.querySelectorAll('button');
        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                this.handleButtonClick(index, button.textContent);
            });
        });

        const cards = this.shadowRoot.querySelectorAll('.card');
        cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                this.handleCardClick(index, card);
            });
        });
    }

    handleButtonClick(index, text) {
        this.dispatchEvent(new CustomEvent('button-clicked', {
            detail: { buttonIndex: index, buttonText: text }
        }));
    }

    handleCardClick(index, card) {
        const title = card.querySelector('.card-title').textContent;
        this.dispatchEvent(new CustomEvent('card-clicked', {
            detail: { cardIndex: index, cardTitle: title }
        }));
    }
}

// Register the web component
if (!customElements.get('ncmu-leadership-hub')) {
    customElements.define('ncmu-leadership-hub', NCMULeadershipHubComponent);
}

// Export static render method for non-Shadow DOM usage
window.NCMULeadershipHub = {
    render: function() {
        return `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; color: #333; padding: 20px; background-color: #fff;">
                <div style="border-bottom: 3px solid #0078d4; padding-bottom: 20px; margin-bottom: 30px;">
                    <h1 style="font-size: 32px; font-weight: 600; margin: 0; color: #0078d4;">The 2026 NCMU People Plan Leadership Hub</h1>
                    <p style="font-size: 14px; color: #666; margin: 10px 0 0 0;">Empowering leadership excellence across NCMU</p>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
                    <div style="background-color: #f5f5f5; border: 1px solid #e1e1e1; border-radius: 4px; padding: 20px;">
                        <div style="font-size: 32px; margin-bottom: 12px;">👥</div>
                        <h3 style="font-size: 16px; font-weight: 600; margin: 0 0 10px 0; color: #0078d4;">Leadership Team</h3>
                        <p style="font-size: 14px; color: #666; margin: 0;">Connect with and learn from our executive leadership team committed to organizational excellence.</p>
                    </div>
                    <div style="background-color: #f5f5f5; border: 1px solid #e1e1e1; border-radius: 4px; padding: 20px;">
                        <div style="font-size: 32px; margin-bottom: 12px;">📊</div>
                        <h3 style="font-size: 16px; font-weight: 600; margin: 0 0 10px 0; color: #0078d4;">Strategic Initiatives</h3>
                        <p style="font-size: 14px; color: #666; margin: 0;">Explore key strategic priorities and goals shaping our organization's future direction.</p>
                    </div>
                    <div style="background-color: #f5f5f5; border: 1px solid #e1e1e1; border-radius: 4px; padding: 20px;">
                        <div style="font-size: 32px; margin-bottom: 12px;">📚</div>
                        <h3 style="font-size: 16px; font-weight: 600; margin: 0 0 10px 0; color: #0078d4;">Resources & Training</h3>
                        <p style="font-size: 14px; color: #666; margin: 0;">Access professional development materials and training programs for leadership growth.</p>
                    </div>
                </div>
            </div>
        `;
    }
};
