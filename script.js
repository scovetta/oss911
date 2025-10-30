// OSS Security Navigator - Interactive Functionality

// DOM Elements
const scenarioCards = document.querySelectorAll('.scenario-card');
const modal = document.getElementById('scenario-modal');
const modalTitle = document.getElementById('modal-title');
const modalUrgency = document.getElementById('modal-urgency');
const modalDescription = document.getElementById('modal-description');
const modalResources = document.getElementById('modal-resources');
const modalActions = document.getElementById('modal-actions');
const modalClose = document.querySelector('.modal-close');
const contactForm = document.getElementById('contact-form');
const filterButtons = document.querySelectorAll('.filter-btn');
const resourceCards = document.querySelectorAll('.resource-card');

// Scenario data with detailed information
const scenarioData = {
    vulnerability: {
        title: "New/Serious Vulnerability Found",
        urgency: "🚨 HIGH URGENCY - TIME SENSITIVE",
        urgencyClass: "urgency-high",
        description: `
            <div class="alert alert-danger">
                <strong>⚠️ STOP! Do not disclose publicly yet.</strong>
            </div>
            <p>You've discovered or been informed of a serious security vulnerability. This requires immediate, coordinated response to protect users while ensuring responsible disclosure.</p>
            <h4>Immediate Next Steps:</h4>
            <ol>
                <li><strong>Do NOT</strong> post about this vulnerability publicly (GitHub issues, social media, etc.)</li>
                <li>Assess the severity and potential impact</li>
                <li>Contact the appropriate security response team immediately</li>
                <li>Begin coordinated disclosure process</li>
            </ol>
        `,
        resources: [
            {
                title: "OpenSSF Security Incident Response Team (SIRT)",
                description: "Confidential, expert guidance for coordinated vulnerability disclosure",
                action: "Contact SIRT",
                link: "mailto:security-help@example.org?subject=URGENT: Vulnerability in [Project Name]",
                urgent: true
            },
            {
                title: "CVE Numbering Authority (CNA)",
                description: "Request a CVE number for tracking this vulnerability",
                action: "Request CVE",
                link: "https://cve.mitre.org/cve/request_id.html",
                urgent: false
            },
            {
                title: "Coordinated Disclosure Guidelines",
                description: "Best practices for responsible vulnerability disclosure",
                action: "Read Guidelines",
                link: "#",
                urgent: false
            }
        ]
    },
    tools: {
        title: "Need Help Configuring Security Tools",
        urgency: "⚠️ MEDIUM PRIORITY",
        urgencyClass: "urgency-medium",
        description: `
            <p>Setting up security tools like SAST, DAST, or SCA can be complex. Get expert guidance to ensure proper configuration and maximize protection for your project.</p>
            <h4>Available Help:</h4>
            <ul>
                <li>Tool selection guidance based on your tech stack</li>
                <li>Step-by-step configuration assistance</li>
                <li>Best practices for CI/CD integration</li>
                <li>Free tool programs for OSS projects</li>
            </ul>
        `,
        resources: [
            {
                title: "GitHub Security Features Setup",
                description: "Free Dependabot, CodeQL, and secret scanning for OSS projects",
                action: "Enable GitHub Security",
                link: "https://github.com/features/security",
                urgent: false
            },
            {
                title: "OpenSSF Tooling Working Group",
                description: "Community support for security tool selection and configuration",
                action: "Join Community",
                link: "#",
                urgent: false
            },
            {
                title: "Security Tool Configuration Help",
                description: "Request personalized assistance with tool setup",
                action: "Request Help",
                link: "mailto:security-help@example.org?subject=Tool Configuration Help for [Project Name]",
                urgent: false
            }
        ]
    },
    fix: {
        title: "Need Help with a Security Fix",
        urgency: "⚠️ MEDIUM PRIORITY",
        urgencyClass: "urgency-medium",
        description: `
            <p>Whether you need code review, patch assistance, or technical guidance for implementing a security fix, expert help is available.</p>
            <h4>Types of Help Available:</h4>
            <ul>
                <li>Security-focused code review</li>
                <li>Patch development assistance</li>
                <li>Architecture guidance for security improvements</li>
                <li>Testing strategies for security fixes</li>
            </ul>
        `,
        resources: [
            {
                title: "Security Code Review Program",
                description: "Pro-bono security code review from vetted experts",
                action: "Request Review",
                link: "mailto:security-help@example.org?subject=Code Review Request for [Project Name]",
                urgent: false
            },
            {
                title: "OpenSSF Security Expert Network",
                description: "Connect with security professionals who volunteer for OSS projects",
                action: "Find Expert",
                link: "#",
                urgent: false
            },
            {
                title: "Secure Coding Guidelines",
                description: "Best practices and patterns for common security fixes",
                action: "View Guidelines",
                link: "#",
                urgent: false
            }
        ]
    },
    cve: {
        title: "Reporting a New CVE",
        urgency: "🔴 MEDIUM-HIGH PRIORITY",
        urgencyClass: "urgency-medium-high",
        description: `
            <p>The CVE reporting process requires careful coordination and proper documentation. Get guidance on the process to ensure accurate reporting and proper disclosure timeline management.</p>
            <h4>CVE Process Steps:</h4>
            <ol>
                <li>Gather detailed vulnerability information</li>
                <li>Assess impact and scope</li>
                <li>Request CVE number from appropriate CNA</li>
                <li>Coordinate disclosure timeline</li>
                <li>Publish advisory and patches</li>
            </ol>
        `,
        resources: [
            {
                title: "MITRE CVE Request Portal",
                description: "Official portal for requesting CVE numbers",
                action: "Request CVE",
                link: "https://cve.mitre.org/cve/request_id.html",
                urgent: true
            },
            {
                title: "CVE Process Guidance",
                description: "Step-by-step guide for CVE reporting and coordinated disclosure",
                action: "Read Process Guide",
                link: "#",
                urgent: false
            },
            {
                title: "CVE Reporting Help",
                description: "Get assistance with CVE documentation and process",
                action: "Get Help",
                link: "mailto:security-help@example.org?subject=CVE Reporting Help for [Project Name]",
                urgent: false
            }
        ]
    },
    burnout: {
        title: "Burning Out & Need Help",
        urgency: "💚 SUPPORT & SUSTAINABILITY",
        urgencyClass: "urgency-low",
        description: `
            <p>Maintainer burnout is real and affects security. Whether you need funding, want to delegate security responsibilities, or need mental health support, resources are available.</p>
            <h4>Support Available:</h4>
            <ul>
                <li>Funding opportunities for maintainer support</li>
                <li>Guidance on security delegation and "bus factor" planning</li>
                <li>Mental health and well-being resources</li>
                <li>Community support and mentorship</li>
            </ul>
        `,
        resources: [
            {
                title: "GitHub Sponsors",
                description: "Direct funding for open source maintainers and security work",
                action: "Apply for Funding",
                link: "https://github.com/sponsors",
                urgent: false
            },
            {
                title: "OpenSSF Alpha-Omega Program",
                description: "Grants focused on improving security of critical OSS projects",
                action: "Learn About Grants",
                link: "#",
                urgent: false
            },
            {
                title: "Maintainer Well-being Resources",
                description: "Mental health support and burnout prevention for OSS maintainers",
                action: "Find Support",
                link: "#",
                urgent: false
            },
            {
                title: "Security Delegation Guide",
                description: "Best practices for onboarding security-focused contributors",
                action: "Read Guide",
                link: "#",
                urgent: false
            }
        ]
    },
    general: {
        title: "General Security Question",
        urgency: "❓ GENERAL INQUIRY",
        urgencyClass: "urgency-low",
        description: `
            <p>Not sure which category your security need fits into? Have a general question about open source security? Our team is here to help route you to the right resources.</p>
            <h4>How We Can Help:</h4>
            <ul>
                <li>Assess your specific security needs</li>
                <li>Route you to appropriate resources</li>
                <li>Provide general security guidance</li>
                <li>Connect you with relevant experts</li>
            </ul>
        `,
        resources: [
            {
                title: "General Security Help",
                description: "Contact our team for any security-related questions",
                action: "Contact Team",
                link: "mailto:security-help@example.org?subject=General Security Question",
                urgent: false
            },
            {
                title: "OpenSSF Best Practices",
                description: "Comprehensive security guidelines for open source projects",
                action: "Browse Practices",
                link: "#",
                urgent: false
            },
            {
                title: "Security Assessment Checklist",
                description: "Evaluate your project's current security posture",
                action: "Use Checklist",
                link: "#",
                urgent: false
            }
        ]
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeScenarioCards();
    initializeResourceFilters();
    initializeContactForm();
    initializeSmoothScrolling();
    initializeModal();
});

// Scenario card click handlers
function initializeScenarioCards() {
    scenarioCards.forEach(card => {
        card.addEventListener('click', function() {
            const scenario = this.dataset.scenario;
            openScenarioModal(scenario);
        });

        // Add keyboard support
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const scenario = this.dataset.scenario;
                openScenarioModal(scenario);
            }
        });

        // Make cards focusable
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', 'Learn more about this security scenario');
    });
}

// Open scenario modal with detailed information
function openScenarioModal(scenarioKey) {
    const scenario = scenarioData[scenarioKey];
    if (!scenario) return;

    modalTitle.textContent = scenario.title;

    modalUrgency.innerHTML = `<div class="urgency-badge ${scenario.urgencyClass}">${scenario.urgency}</div>`;

    modalDescription.innerHTML = scenario.description;

    // Build resources section
    let resourcesHTML = '<h4>Available Resources & Next Steps:</h4>';
    scenario.resources.forEach(resource => {
        const urgentClass = resource.urgent ? 'urgent-resource' : '';
        resourcesHTML += `
            <div class="resource-link ${urgentClass}">
                <h5>${resource.title}</h5>
                <p>${resource.description}</p>
                <a href="${resource.link}" class="btn btn-primary" target="_blank">${resource.action}</a>
            </div>
        `;
    });
    modalResources.innerHTML = resourcesHTML;

    // Add action buttons
    modalActions.innerHTML = `
        <a href="#contact" class="btn btn-secondary" onclick="closeModal()">Need Different Help?</a>
        <button class="btn btn-outline" onclick="closeModal()">Close</button>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Focus management for accessibility
    modalTitle.focus();
}

// Modal functionality
function initializeModal() {
    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Resource filtering functionality
function initializeResourceFilters() {
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter resources
            filterResources(filter);
        });
    });
}

function filterResources(filter) {
    resourceCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease-out';
        } else {
            card.style.display = 'none';
        }
    });
}

// Contact form handling
function initializeContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactSubmission();
        });
    }
}

function handleContactSubmission() {
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const project = formData.get('project');
    const message = formData.get('message');

    // Construct email
    const subject = `Security Help Request${project ? ` for ${project}` : ''}`;
    const body = `Name: ${name}\nEmail: ${email}\n${project ? `Project: ${project}\n` : ''}\nMessage:\n${message}`;
    const mailtoLink = `mailto:security-help@example.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show confirmation
    showFormConfirmation();
}

function showFormConfirmation() {
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = '✓ Email Client Opened';
    submitBtn.disabled = true;

    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        contactForm.reset();
    }, 3000);
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navigation highlighting based on scroll position
function initializeNavigationHighlighting() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNavigation() {
        let current = '';
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); // Initial call
}

// Initialize navigation highlighting
document.addEventListener('DOMContentLoaded', initializeNavigationHighlighting);

// Utility functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;

    // Add to page
    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Emergency contact highlight
function highlightEmergencyContact() {
    const emergencyContacts = document.querySelectorAll('[href*="security-help@example.org"]');
    emergencyContacts.forEach(contact => {
        contact.style.fontWeight = '600';
        contact.style.color = '#dc2626';
    });
}

// Call emergency contact highlighting on load
document.addEventListener('DOMContentLoaded', highlightEmergencyContact);

// Analytics placeholder (replace with actual analytics if needed)
function trackScenarioClick(scenario) {
    // Placeholder for analytics tracking
    console.log(`Scenario clicked: ${scenario}`);
}

// Add tracking to scenario cards
scenarioCards.forEach(card => {
    card.addEventListener('click', function() {
        trackScenarioClick(this.dataset.scenario);
    });
});

// Accessibility improvements
function initializeAccessibility() {
    // Add skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Announce page changes for screen readers
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.id = 'announcer';
    document.body.appendChild(announcer);
}

document.addEventListener('DOMContentLoaded', initializeAccessibility);

// Export functions for external use if needed
window.OSSSecurityNavigator = {
    openScenarioModal,
    closeModal,
    filterResources,
    showNotification
};