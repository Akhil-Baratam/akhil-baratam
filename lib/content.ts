/**
 * SINGLE SOURCE OF CONTENT
 *
 * Everything the page says lives here. Swap the values below and the layout
 * adapts. Nothing else needs editing for a content change.
 *
 * Items marked CHECK still need your input.
 */

export const person = {
  name: "Akhil Baratam",
  role: "DevOps engineer",
  /**
   * Hero headline, set as exactly two lines. `accent` closes the second line
   * in heavy weight and the accent colour. Keep the whole thing under 6 words
   * or it will run to a third line.
   */
  headline: { lineOne: "I keep", lineTwo: "production", accent: "boring." },
  /** Max 20 words. This is the whole pitch. */
  intro:
    "I build and run the AWS platform behind an IoT product with more than 100,000 connected devices.",
  email: "akhilbaratam.dev@gmail.com",
  phone: "+91 6281213336",
  available: true,
  availability: "Open to DevOps and platform roles",
  socials: [
    { label: "GitHub", href: "https://github.com/Akhil-Baratam" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/akhil-baratam/" },
    // `download` marks this as an action rather than a destination, and gives
    // the saved file a sensible name instead of the repo path.
    {
      label: "Resume",
      href: "/Akhil-Baratam-DevOps-CV.pdf",
      download: "Akhil-Baratam-DevOps-CV.pdf",
    },
  ],
  education: "Computer Science, Lovely Professional University, 2025",
};

/** CHECK: put a real photo at /public/portrait.jpg and change `src` to "/portrait.jpg". */
export const portrait = {
  src: "https://picsum.photos/seed/akhil-baratam-portrait/900/1200",
  alt: "Akhil Baratam",
  width: 900,
  height: 1200,
};

const si = (slug: string) => `https://cdn.simpleicons.org/${slug}`;
const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`;

/**
 * Toolchain marks. Rendered as CSS masks, so any single- or multi-colour SVG
 * in a square viewBox works and follows the palette automatically.
 *
 * Simple Icons has no AWS mark (Amazon asked to be removed), so that one comes
 * from devicon. Loki and Karpenter are in neither set, so they are named in the
 * capability clusters instead of shown here.
 */
type Mark = {
  label: string;
  src: string;
  /** Multiplier on the shared mark size, for artwork that needs more room. */
  scale?: number;
};

export const toolchain: Mark[] = [
  {
    label: "Amazon Web Services",
    src: devicon("amazonwebservices/amazonwebservices-plain-wordmark"),
    // A wordmark inside a square canvas, so it needs a bigger box to read at
    // the same optical size as the glyph marks beside it.
    scale: 1.6,
  },
  { label: "Google Cloud", src: si("googlecloud") },
  { label: "Terraform", src: si("terraform") },
  { label: "Kubernetes", src: si("kubernetes") },
  { label: "Docker", src: si("docker") },
  { label: "Helm", src: si("helm") },
  { label: "Argo CD", src: si("argo") },
  { label: "GitHub Actions", src: si("githubactions") },
  { label: "Jenkins", src: si("jenkins") },
  { label: "Prometheus", src: si("prometheus") },
  { label: "Grafana", src: si("grafana") },
  { label: "Datadog", src: si("datadog") },
  { label: "Python", src: si("python") },
  { label: "Linux", src: si("linux") },
  { label: "Nginx", src: si("nginx") },
  { label: "PostgreSQL", src: si("postgresql") },
  { label: "MySQL", src: si("mysql") },
  { label: "Git", src: si("git") },
];

/**
 * Selected work. The first entry renders as the large cell, the rest as the
 * stacked pair beside it. Three entries fills the grid exactly.
 */
export const work = [
  {
    title: "A fresh environment on every pull request",
    summary:
      "Open a PR and it gets its own namespace in ten minutes: IRSA roles, service dependencies, seeded test databases, and AWS emulators. Karpenter scales the nodes underneath, and teardown runs itself.",
    stack: ["EKS", "Karpenter", "Argo Workflows", "IRSA"],
    href: null, // internal platform work, nothing public to link to
    image: "https://picsum.photos/seed/ephemeral-environments-infra/1400/1000",
  },
  {
    title: "Self-hosted Kubernetes on GCP",
    summary:
      "A private GKE cluster from modular Terraform, deployed through Workload Identity Federation so there are no long-lived credentials to store in GitHub.",
    stack: ["GKE", "Terraform", "Argo CD", "Gateway API"],
    href: "https://github.com/Akhil-Baratam/GCP-tf-infra",
    image: "https://picsum.photos/seed/gke-platform-network/900/700",
  },
  {
    title: "Eight EKS clusters, four environments",
    summary:
      "Dev through production on Terraform, with Argo CD and Jenkins driving releases and Datadog watching what lands.",
    stack: ["Terraform", "Argo CD", "Jenkins", "Datadog"],
    href: null,
    image: null, // this cell uses the ruled accent field instead of a photo
  },
];

/** Grouped so the reader scans three clusters, not a twelve-row list. */
export const capabilities = [
  {
    group: "Build and ship",
    items: [
      "GitOps delivery with Argo CD",
      "GitHub Actions and Jenkins pipelines",
      "Helm packaging and releases",
      "Argo Workflows orchestration",
    ],
  },
  {
    group: "Run and observe",
    items: [
      "Kubernetes and EKS operations",
      "Datadog monitors and dashboards",
      "Prometheus, Grafana, and Loki",
      "Incident detection and response",
    ],
  },
  {
    group: "Provision and scale",
    items: [
      "Terraform across environments",
      "AWS and GCP infrastructure",
      "Karpenter and node autoscaling",
      "Python and shell automation",
    ],
  },
];

/** A real sequence, so it earns a timeline. */
export const experience = [
  {
    period: "Jul 2025 to now",
    role: "DevOps engineer",
    org: "Datavedam, for Digi International",
    note: "Terraform and GitOps across four environments and eight EKS clusters, with Datadog monitors for incident detection. Led the EKS upgrades behind production.",
  },
  {
    period: "Apr to Jun 2025",
    role: "Software developer intern",
    org: "Vizualytic Data Solutions",
    note: "Built multi-stage GitHub Actions pipelines and pulled application and infrastructure logs into one Grafana view.",
  },
];

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Experience", href: "#experience" },
];

/** One label per intent, used identically in the nav, hero, and footer. */
export const cta = {
  contact: "Email me",
  work: "See the work",
};
