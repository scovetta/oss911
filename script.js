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

// Ecosystem security contacts data with categories
const ecosystemContacts = {
    "eclipse": {
        name: "Eclipse Foundation",
        description: "Eclipse Foundation projects and infrastructure",
        contactEmail: "security@eclipse-foundation.org",
        websiteUrl: "https://www.eclipse.org/security/team/",
        reportingProcess: "Email security team for vulnerabilities in Eclipse projects",
        scope: "All Eclipse Foundation projects, plugins, and infrastructure",
        category: "ecosystem"
    },
    "apache": {
        name: "Apache Software Foundation",
        description: "Apache projects including Tomcat, Kafka, Maven, and hundreds of other projects",
        contactEmail: "security@apache.org",
        websiteUrl: "https://www.apache.org/security/",
        reportingProcess: "Private email to security team, see project-specific contacts for individual projects",
        scope: "All Apache Software Foundation projects and infrastructure",
        category: "ecosystem"
    },
    "rust": {
        name: "Rust Programming Language",
        description: "Rust compiler, standard library, Cargo, and official tooling",
        contactEmail: "security@rust-lang.org",
        websiteUrl: "https://www.rust-lang.org/policies/security",
        reportingProcess: "Email security team with vulnerability details, 24-48 hour response time",
        scope: "Rust language, compiler, Cargo, crates.io, and official Rust tools",
        category: "ecosystem"
    },
    "nodejs": {
        name: "Node.js",
        description: "Node.js runtime and core modules",
        contactEmail: "Via HackerOne platform",
        websiteUrl: "https://nodejs.org/en/security",
        reportingProcess: "Report via HackerOne bug bounty program or escalate to security@lists.openjsf.org",
        scope: "Node.js runtime, core modules, and official Node.js tools",
        category: "ecosystem"
    },
    "python": {
        name: "Python Software Foundation",
        description: "CPython interpreter, PyPI, and Python infrastructure",
        contactEmail: "security@python.org",
        websiteUrl: "https://www.python.org/dev/security/",
        reportingProcess: "Email Python Security Response Team for interpreter and infrastructure vulnerabilities",
        scope: "CPython, PyPI, Python.org infrastructure, and official Python tools",
        category: "ecosystem"
    },
    "kubernetes": {
        name: "Kubernetes & CNCF",
        description: "Kubernetes orchestration platform and Cloud Native Computing Foundation projects",
        contactEmail: "security@kubernetes.io",
        websiteUrl: "https://kubernetes.io/docs/reference/issues-security/security/",
        reportingProcess: "Report via HackerOne bug bounty program or email security team",
        scope: "Kubernetes core, CNCF graduated projects, and cloud native ecosystem",
        category: "ecosystem"
    },
    "openssf": {
        name: "OpenSSF (Open Source Security Foundation)",
        description: "Cross-ecosystem security initiatives and tools",
        contactEmail: "openssf-technical-advisory-council@lists.openssf.org",
        websiteUrl: "https://openssf.org/",
        reportingProcess: "Contact via mailing list or specific project security contacts",
        scope: "OpenSSF projects including Sigstore, SLSA, Scorecard, and security tooling",
        category: "ecosystem"
    },
    "cncf": {
        name: "Cloud Native Computing Foundation",
        description: "Cloud native technologies and container orchestration",
        contactEmail: "Via individual project contacts",
        websiteUrl: "https://www.cncf.io/",
        reportingProcess: "Contact specific project security teams - each CNCF project has own process",
        scope: "CNCF projects including containerd, Prometheus, Envoy, Helm, and more",
        category: "ecosystem"
    },
    "github": {
        name: "GitHub Security",
        description: "GitHub platform, GitHub Actions, and security features",
        contactEmail: "Via GitHub Security Bug Bounty",
        websiteUrl: "https://github.com/security",
        reportingProcess: "Report via HackerOne bug bounty program",
        scope: "GitHub.com platform, GitHub Actions, Codespaces, and GitHub security features",
        category: "ecosystem"
    },
    "npm": {
        name: "npm Registry",
        description: "npm package registry and CLI tool",
        contactEmail: "security@npmjs.com",
        websiteUrl: "https://www.npmjs.com/policies/security",
        reportingProcess: "Email security team for npm registry and package vulnerabilities",
        scope: "npm registry, npm CLI, and npmjs.com infrastructure",
        category: "ecosystem"
    },
    "pypi": {
        name: "Python Package Index (PyPI)",
        description: "Python package repository and distribution",
        contactEmail: "admin@pypi.org",
        websiteUrl: "https://pypi.org/security/",
        reportingProcess: "Email for PyPI platform vulnerabilities, use project contacts for package issues",
        scope: "PyPI platform, package distribution, and pypi.org infrastructure",
        category: "ecosystem"
    },
    "rubygems": {
        name: "RubyGems",
        description: "Ruby package manager and gem repository",
        contactEmail: "security@rubygems.org",
        websiteUrl: "https://rubygems.org/security",
        reportingProcess: "Email security team for RubyGems platform vulnerabilities",
        scope: "RubyGems platform, gem distribution, and rubygems.org infrastructure",
        category: "ecosystem"
    },
    "maven": {
        name: "Maven Central",
        description: "Maven package repository for Java ecosystem",
        contactEmail: "Via Sonatype security",
        websiteUrl: "https://central.sonatype.org/security/",
        reportingProcess: "Contact Sonatype security team for Maven Central vulnerabilities",
        scope: "Maven Central repository and associated tooling",
        category: "ecosystem"
    },
    "linuxfoundation": {
        name: "Linux Foundation",
        description: "Linux kernel and Linux Foundation projects",
        contactEmail: "security@kernel.org",
        websiteUrl: "https://www.kernel.org/category/contact-us.html",
        reportingProcess: "Email security team for Linux kernel vulnerabilities",
        scope: "Linux kernel, Linux Foundation projects, and related infrastructure",
        category: "ecosystem"
    },

    // CSIRTs and National Cybersecurity Organizations
    "cert-cc": {
        name: "CERT/CC (Carnegie Mellon)",
        description: "CERT Coordination Center - original CSIRT and vulnerability coordination",
        contactEmail: "cert@cert.org",
        websiteUrl: "https://www.sei.cmu.edu/about/divisions/cert/",
        reportingProcess: "Use vulnerability reporting form or email for coordination center services",
        scope: "Vulnerability coordination, incident response guidance, and cybersecurity research",
        category: "csirt"
    },
    "cisa": {
        name: "CISA (US Cybersecurity & Infrastructure Security Agency)",
        description: "US national cybersecurity agency and critical infrastructure protection",
        contactEmail: "contact@cisa.dhs.gov",
        websiteUrl: "https://www.cisa.gov/",
        reportingProcess: "Report via website, phone 1-844-SAY-CISA, or email for US infrastructure threats",
        scope: "US critical infrastructure, government systems, and national cybersecurity coordination",
        category: "national"
    },
    "ncsc-uk": {
        name: "NCSC UK (National Cyber Security Centre)",
        description: "UK's national cybersecurity authority",
        contactEmail: "Via NCSC website reporting",
        websiteUrl: "https://www.ncsc.gov.uk/",
        reportingProcess: "Use online reporting system for UK cybersecurity incidents",
        scope: "UK national cybersecurity, government and critical infrastructure protection",
        category: "national"
    },
    "cert-eu": {
        name: "CERT-EU",
        description: "Computer Emergency Response Team for EU institutions, agencies and bodies",
        contactEmail: "cert-eu@ec.europa.eu",
        websiteUrl: "https://cert.europa.eu/",
        reportingProcess: "Email CERT-EU for European Union institution cybersecurity incidents",
        scope: "EU institutions, agencies, and bodies cybersecurity",
        category: "csirt"
    },
    "enisa": {
        name: "ENISA (European Union Agency for Cybersecurity)",
        description: "EU cybersecurity agency providing guidance and coordination",
        contactEmail: "Via ENISA contact form",
        websiteUrl: "https://www.enisa.europa.eu/",
        reportingProcess: "Use contact form for EU cybersecurity policy and guidance matters",
        scope: "EU cybersecurity strategy, policy development, and member state coordination",
        category: "national"
    },
    "first": {
        name: "FIRST (Forum of Incident Response and Security Teams)",
        description: "Global organization of CSIRTs and incident response teams",
        contactEmail: "Via member team contacts",
        websiteUrl: "https://www.first.org/",
        reportingProcess: "Contact appropriate FIRST member team based on constituency",
        scope: "Global CSIRT coordination, incident response best practices, and member support",
        category: "csirt"
    },
    "cert-in": {
        name: "CERT-In (Indian Computer Emergency Response Team)",
        description: "India's national cybersecurity agency",
        contactEmail: "cert-in@cert-in.org.in",
        websiteUrl: "https://www.cert-in.org.in/",
        reportingProcess: "Report cybersecurity incidents affecting Indian cyberspace",
        scope: "Indian cyberspace protection and critical information infrastructure",
        category: "national"
    },
    "jpcert": {
        name: "JPCERT/CC (Japan Computer Emergency Response Team)",
        description: "Japan's national cybersecurity coordination center",
        contactEmail: "info@jpcert.or.jp",
        websiteUrl: "https://www.jpcert.or.jp/english/",
        reportingProcess: "Email for cybersecurity incidents affecting Japan",
        scope: "Japanese cybersecurity coordination and Asia-Pacific region cooperation",
        category: "national"
    },
    "kr-cert": {
        name: "KrCERT/CC (Korea Computer Emergency Response Team)",
        description: "South Korea's national cybersecurity response team",
        contactEmail: "cert@cert.or.kr",
        websiteUrl: "https://www.krcert.or.kr/",
        reportingProcess: "Report cybersecurity incidents affecting Korean cyberspace",
        scope: "South Korean cybersecurity protection and coordination",
        category: "national"
    },
    "cncert": {
        name: "CNCERT/CC (China Computer Emergency Response Team)",
        description: "China's national computer network emergency response coordination center",
        contactEmail: "cert@cert.org.cn",
        websiteUrl: "https://www.cert.org.cn/",
        reportingProcess: "Report network security incidents affecting Chinese networks",
        scope: "Chinese network security and critical information infrastructure protection",
        category: "national"
    },
    "auscert": {
        name: "AusCERT (Australian Computer Emergency Response Team)",
        description: "Australia's national computer emergency response team",
        contactEmail: "alert@auscert.org.au",
        websiteUrl: "https://www.auscert.org.au/",
        reportingProcess: "Email for Australian cybersecurity incidents and threats",
        scope: "Australian cybersecurity coordination and incident response",
        category: "national"
    },
    "cert-br": {
        name: "CERT.br (Brazilian Computer Emergency Response Team)",
        description: "Brazil's national computer emergency response team",
        contactEmail: "cert@cert.br",
        websiteUrl: "https://www.cert.br/",
        reportingProcess: "Report cybersecurity incidents affecting Brazilian networks",
        scope: "Brazilian Internet security and incident coordination",
        category: "national"
    },
    "cccs-canada": {
        name: "CCCS (Canadian Centre for Cyber Security)",
        description: "Canada's national cybersecurity authority",
        contactEmail: "contact@cyber.gc.ca",
        websiteUrl: "https://www.cyber.gc.ca/",
        reportingProcess: "Report cybersecurity incidents via online portal or email",
        scope: "Canadian cybersecurity protection and critical infrastructure defense",
        category: "national"
    },
    "ncsc-nl": {
        name: "NCSC Netherlands",
        description: "Dutch National Cyber Security Centre",
        contactEmail: "info@ncsc.nl",
        websiteUrl: "https://www.ncsc.nl/",
        reportingProcess: "Report cybersecurity incidents affecting Dutch critical infrastructure",
        scope: "Netherlands cybersecurity and critical infrastructure protection",
        category: "national"
    },
    "cert-fr": {
        name: "CERT-FR",
        description: "French national computer security incident response team",
        contactEmail: "cert-fr.contact@ssi.gouv.fr",
        websiteUrl: "https://www.cert.ssi.gouv.fr/",
        reportingProcess: "Email for cybersecurity incidents affecting French government and infrastructure",
        scope: "French government cybersecurity and critical infrastructure protection",
        category: "national"
    },
    "cert-bund": {
        name: "CERT-Bund (German Federal CERT)",
        description: "Germany's federal computer emergency response team",
        contactEmail: "certbund@bsi.bund.de",
        websiteUrl: "https://www.bsi.bund.de/",
        reportingProcess: "Report cybersecurity incidents affecting German federal government",
        scope: "German federal government cybersecurity and critical infrastructure",
        category: "national"
    },
    "cert-se": {
        name: "CERT-SE (Swedish Computer Emergency Response Team)",
        description: "Sweden's national computer emergency response team",
        contactEmail: "cert-se@cert.se",
        websiteUrl: "https://www.cert.se/",
        reportingProcess: "Report cybersecurity incidents affecting Swedish networks",
        scope: "Swedish cybersecurity coordination and incident response",
        category: "national"
    },
    "cert-ee": {
        name: "CERT-EE (Estonian Computer Emergency Response Team)",
        description: "Estonia's national computer emergency response team",
        contactEmail: "cert@cert.ee",
        websiteUrl: "https://www.cert.ee/",
        reportingProcess: "Report cybersecurity incidents affecting Estonian networks",
        scope: "Estonian cybersecurity and digital infrastructure protection",
        category: "national"
    }
};

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
                <li><strong>AI-Powered Assistance:</strong> GitHub Copilot Autofix, Snyk DeepCode, and other AI tools can suggest fixes for common vulnerabilities</li>
            </ul>
            <div class="alert alert-info">
                <strong>⚠️ AI Safety Note:</strong> Always review and thoroughly test AI-generated security fixes before deploying. AI can help identify patterns but may miss context-specific security requirements.
            </div>
        `,
        resources: [
            {
                title: "GitHub Copilot Autofix",
                description: "AI-powered automatic vulnerability fixes for CodeQL security alerts",
                action: "Learn More",
                link: "https://github.blog/2024-03-20-found-means-fixed-introducing-autofix-for-codeql-code-scanning/",
                urgent: false
            },
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
                </div>
            </ol>
        `,
        resources: [
            {
                title: "Ecosystem-Specific Security Contacts",
                description: "Direct contacts for specific programming languages and ecosystems",
                action: "Browse Contacts",
                link: "#",
                urgent: false,
                callback: "showEcosystemContacts"
            },
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
    initializeEcosystemContacts();
    initializeNavigation(); // Add navigation initialization
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
        const linkTarget = resource.callback ? '#' : resource.link;
        const linkClick = resource.callback ? `onclick="${resource.callback}(); return false;"` : 'target="_blank"';
        resourcesHTML += `
            <div class="resource-link ${urgentClass}">
                <h5>${resource.title}</h5>
                <p>${resource.description}</p>
                <a href="${linkTarget}" class="btn btn-primary" ${linkClick}>${resource.action}</a>
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

// Show ecosystem contacts modal
function showEcosystemContacts() {
    modalTitle.textContent = "Ecosystem-Specific Security Contacts";
    modalUrgency.innerHTML = '<div class="urgency-badge urgency-low">📍 ECOSYSTEM CONTACTS</div>';

    modalDescription.innerHTML = `
        <p>Find security contacts for specific programming languages, package managers, and technology ecosystems:</p>
        <div class="ecosystem-search">
            <input type="text" id="ecosystem-search-input" placeholder="Search ecosystems..." onkeyup="filterEcosystems()">
        </div>
    `;

    // Build ecosystem contacts
    let contactsHTML = '<div class="ecosystem-contacts-grid">';
    Object.entries(ecosystemContacts).forEach(([key, contact]) => {
        contactsHTML += `
            <div class="ecosystem-contact-card" data-ecosystem="${key}">
                <h5>${contact.name}</h5>
                <p class="ecosystem-description">${contact.description}</p>
                <div class="contact-info">
                    <div class="contact-detail">
                        <strong>Contact:</strong>
                        ${contact.contactEmail.includes('mailto:') || contact.contactEmail.includes('Via ') ?
                            contact.contactEmail :
                            `<a href="mailto:${contact.contactEmail}">${contact.contactEmail}</a>`
                        }
                    </div>
                    <div class="contact-detail">
                        <strong>Process:</strong> ${contact.reportingProcess}
                    </div>
                    <div class="contact-detail">
                        <strong>Scope:</strong> ${contact.scope}
                    </div>
                </div>
                <div class="contact-actions">
                    <a href="${contact.websiteUrl}" class="btn btn-outline" target="_blank">Visit Security Page</a>
                </div>
            </div>
        `;
    });
    contactsHTML += '</div>';

    modalResources.innerHTML = contactsHTML;

    modalActions.innerHTML = `
        <a href="#contact" class="btn btn-secondary" onclick="closeModal()">Need General Help?</a>
        <button class="btn btn-outline" onclick="closeModal()">Close</button>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    modalTitle.focus();
}

// Initialize ecosystem contacts section
function initializeEcosystemContacts() {
    const ecosystemGrid = document.getElementById('ecosystem-grid');
    if (!ecosystemGrid) return;

    let contactsHTML = '';
    Object.entries(ecosystemContacts).forEach(([key, contact]) => {
        const categoryLabel = {
            'ecosystem': 'Programming Ecosystem',
            'csirt': 'CSIRT',
            'national': 'National Cybersecurity'
        }[contact.category] || 'Other';

        contactsHTML += `
            <div class="ecosystem-card" data-ecosystem="${key}">
                <div class="ecosystem-header">
                    <h4>${contact.name}</h4>
                    <span class="category-badge category-${contact.category}">${categoryLabel}</span>
                </div>
                <div class="ecosystem-body">
                    <p class="ecosystem-description">${contact.description}</p>
                    <div class="ecosystem-details">
                        <div class="contact-item">
                            <strong>Contact:</strong>
                            <span class="contact-value">
                                ${contact.contactEmail.includes('mailto:') || contact.contactEmail.includes('Via ') ?
                                    contact.contactEmail :
                                    `<a href="mailto:${contact.contactEmail}">${contact.contactEmail}</a>`
                                }
                            </span>
                        </div>
                        <div class="contact-item">
                            <strong>Scope:</strong>
                            <span class="contact-value">${contact.scope}</span>
                        </div>
                    </div>
                </div>
                <div class="ecosystem-footer">
                    <a href="${contact.websiteUrl}" class="btn btn-outline" target="_blank">Security Info</a>
                    <button class="btn btn-secondary" onclick="showEcosystemDetails('${key}')">More Details</button>
                </div>
            </div>
        `;
    });

    ecosystemGrid.innerHTML = contactsHTML;

    // Initialize ecosystem filter
    const filterInput = document.getElementById('ecosystem-filter-input');
    if (filterInput) {
        filterInput.addEventListener('keyup', filterEcosystemCards);
    }

    // Initialize category filter
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterEcosystemCards);
    }
}

// Filter ecosystem cards in the main section
function filterEcosystemCards() {
    const searchTerm = document.getElementById('ecosystem-filter-input').value.toLowerCase();
    const categoryFilter = document.getElementById('category-filter')?.value || 'all';
    const cards = document.querySelectorAll('.ecosystem-card');

    cards.forEach(card => {
        const ecosystem = card.dataset.ecosystem;
        const contact = ecosystemContacts[ecosystem];
        const searchText = `${contact.name} ${contact.description} ${contact.scope}`.toLowerCase();

        // Check category filter
        const categoryMatch = categoryFilter === 'all' || contact.category === categoryFilter;

        // Check search term
        const searchMatch = !searchTerm || searchText.includes(searchTerm);

        if (categoryMatch && searchMatch) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.3s ease-out';
        } else {
            card.style.display = 'none';
        }
    });
}

// Show detailed information about a specific ecosystem
function showEcosystemDetails(ecosystemKey) {
    const contact = ecosystemContacts[ecosystemKey];
    if (!contact) return;

    modalTitle.textContent = `${contact.name} Security Contact`;
    modalUrgency.innerHTML = '<div class="urgency-badge urgency-low">📍 ECOSYSTEM CONTACT</div>';

    modalDescription.innerHTML = `
        <p><strong>Description:</strong> ${contact.description}</p>
        <p><strong>Reporting Process:</strong> ${contact.reportingProcess}</p>
        <p><strong>Scope:</strong> ${contact.scope}</p>
    `;

    modalResources.innerHTML = `
        <h4>Contact Information:</h4>
        <div class="resource-link">
            <h5>Security Contact</h5>
            <p>Primary contact for security vulnerabilities</p>
            <div class="contact-detail">
                <strong>Email:</strong>
                ${contact.contactEmail.includes('mailto:') || contact.contactEmail.includes('Via ') ?
                    contact.contactEmail :
                    `<a href="mailto:${contact.contactEmail}">${contact.contactEmail}</a>`
                }
            </div>
        </div>
        <div class="resource-link">
            <h5>Security Information Page</h5>
            <p>Official security documentation and guidelines</p>
            <a href="${contact.websiteUrl}" class="btn btn-primary" target="_blank">Visit Security Page</a>
        </div>
    `;

    modalActions.innerHTML = `
        <a href="#ecosystem-contacts" class="btn btn-secondary" onclick="closeModal()">Back to Contacts</a>
        <button class="btn btn-outline" onclick="closeModal()">Close</button>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    modalTitle.focus();
}

// Filter ecosystem contacts based on search and category
function filterEcosystems() {
    const searchTerm = document.getElementById('ecosystem-filter-input').value.toLowerCase();
    const categoryFilter = document.getElementById('category-filter')?.value || 'all';
    const cards = document.querySelectorAll('.ecosystem-contact-card');

    cards.forEach(card => {
        const ecosystem = card.dataset.ecosystem;
        const contact = ecosystemContacts[ecosystem];
        const searchText = `${contact.name} ${contact.description} ${contact.scope}`.toLowerCase();

        // Check category filter
        const categoryMatch = categoryFilter === 'all' || contact.category === categoryFilter;

        // Check search term
        const searchMatch = !searchTerm || searchText.includes(searchTerm);

        if (categoryMatch && searchMatch) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.3s ease-out';
        } else {
            card.style.display = 'none';
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

// Navigation and section management
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        if (section.id === 'home') {
            section.style.display = sectionId === 'home' ? 'block' : 'none';
        } else {
            section.style.display = section.id === sectionId ? 'block' : 'none';
        }
    });

    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${sectionId}`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Initialize navigation
function initializeNavigation() {
    // Handle navigation clicks
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);

            // Show the target section
            if (targetId) {
                showSection(targetId);

                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });

                // Update URL hash
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });

    // Handle browser back/forward
    window.addEventListener('popstate', () => {
        const hash = window.location.hash.substring(1);
        showSection(hash || 'home');
    });

    // Show initial section based on URL hash
    const initialHash = window.location.hash.substring(1);
    showSection(initialHash || 'home');
}