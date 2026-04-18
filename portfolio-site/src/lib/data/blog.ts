import { BlogPost } from '@/types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'from-learner-to-leader-hackathon-journey',
    title: 'From Learner to Leader, My Journey Through Hackathons',
    excerpt: 'How I grew from participant to team lead across hackathons, and the practical leadership lessons that helped us ship fast and place 2nd at AASTU TechFest 2025.',
    coverImage: '/images/blog/hackathon-journey.jpg',
    date: '2025-05-07',
    readTime: '9 min read',
    tags: ['Leadership', 'Hackathon', 'Team Management', 'Execution', 'Personal Growth'],
    author: 'Wendmagegn Tajura',
    category: 'Career',
    content: `My first hackathon mindset was simple: learn as much as possible and survive the deadline. I used to believe strong coding alone was enough. Over time, I learned that hackathons reward a different skill set: clear communication, prioritization under pressure, and team alignment when everything is moving fast.

In my early events, I made the same mistakes many developers make. I tried to do too much alone, I started building before validating the problem, and I underestimated demo storytelling. We could write code, but we did not always deliver a product that judges could understand in two minutes.

The turning point came when I started treating hackathons like compressed product sprints. Before touching code, I asked three questions: What problem are we solving? Who is the user? What is the smallest version of this idea that still feels valuable? That shift helped me move from being only an implementer to becoming a team coordinator and decision-maker.

During the 2025 AASTU TechFest Hackathon, I led our team with a simple structure. One person owned backend and APIs, one handled frontend and UX flow, one focused on data and integration, and I coordinated architecture, blockers, and presentation flow. Instead of micromanaging, I focused on keeping everyone unblocked and synchronized.

We worked in short cycles. Every 60 to 90 minutes, we regrouped and checked three things: what shipped, what is blocked, and what is next. This rhythm prevented silent failures and helped us pivot early when an approach was not working.

One of the biggest leadership lessons was saying no. In hackathons, feature ideas never stop. But saying yes to every idea guarantees an unfinished product. We prioritized the core user journey first, then added only what improved the final demo. Cutting scope early is not weakness; it is strategic discipline.

Another key lesson was building confidence in others. Leadership is not about having every answer. It is about creating clarity so each teammate can execute at their best. When someone got stuck, we solved the problem together quickly and moved forward without blame.

Our 2nd place finish was exciting, but the deeper win was the system we built as a team. We improved how we think, how we communicate, and how we ship under pressure. That process now helps me in class projects, client work, and real-world software development.

If you are starting your own hackathon journey, here is my practical advice. Start with the user problem, not the stack. Define a small, clear MVP and protect it from scope creep. Keep your team communication frequent and honest. Build with demo day in mind from hour one. And most importantly, use each event as a feedback loop, not just a competition.

Going from learner to leader did not happen in one weekend. It happened through repeated execution, reflection, and improvement. Hackathons gave me more than awards. They gave me a framework for shipping impact with a team.`
  },
  {
    id: '2',
    slug: 'building-scalable-apis-developers-perspective',
    title: "Building Scalable APIs and Web app Journey from A Developer's Perspective",
    excerpt: 'A practical comparison of Node.js, Spring Boot, and Django REST Framework for scalable APIs, plus how backend choices impact mobile clients and ML-enabled products.',
    coverImage: '/images/blog/programming.jpg',
    date: '2025-01-20',
    readTime: '11 min read',
    tags: ['Node.js', 'Spring Boot', 'Django REST Framework', 'Scalability', 'Mobile', 'ML Systems'],
    author: 'Wendmagegn Tajura',
    category: 'Backend',
    content: `When developers discuss scalable APIs, the conversation often becomes a framework debate. In practice, scalability is not created by a framework alone. It comes from architecture, data modeling, observability, and disciplined engineering decisions. I have built APIs across Node.js, Spring Boot, and Django REST Framework, and each stack can scale when used with the right patterns.

Node.js shines when you need high-concurrency I/O and fast iteration. The event-driven model works well for chat systems, notification pipelines, and real-time features where many requests are lightweight but frequent. With a clear project structure, background queues, and proper caching, Node.js can handle serious traffic. The main risk is codebase entropy if standards are not enforced early.

Spring Boot is excellent for large systems that need strong contracts, modularity, and long-term maintainability. Java's type system, mature ecosystem, and enterprise tooling make it a strong choice for teams with strict requirements around reliability and governance. It can feel heavier at the beginning, but it pays off when services become complex and multiple teams collaborate.

Django REST Framework offers strong productivity and clean batteries-included development. You can move quickly from data model to secure API while keeping code readable. For startups, student products, and internal platforms, DRF gives a powerful balance between speed and structure. With careful query optimization, caching, and async workloads, it scales far beyond what many people assume.

From my perspective, the most important question is not Which framework is best? The real question is Which trade-offs match your team and product stage? If your team ships rapidly and values JavaScript end-to-end, Node.js may be ideal. If your environment is enterprise-heavy with strict governance, Spring Boot is often safer. If you need high output speed with clear conventions, DRF is hard to beat.

Now add mobile into the equation. Mobile apps are highly sensitive to API latency, payload size, and reliability over unstable networks. Good backend design for mobile means pagination by default, compressed responses, backward-compatible versioning, and defensive error contracts. Clean APIs reduce mobile complexity and improve perceived app performance more than UI tweaks alone.

For ML-enabled products, APIs have additional responsibilities. You need model-version-aware endpoints, asynchronous inference for heavier tasks, and strong tracing from request to prediction. It is also critical to separate online inference paths from training pipelines. Your API should remain fast and predictable even when model workflows evolve.

In one pattern I use, the core API handles validation, authentication, and orchestration, while dedicated workers process heavier ML tasks. The client receives immediate acknowledgment and polls or subscribes for completion. This approach keeps user-facing latency low while allowing ML workloads to scale independently.

Across all three stacks, the same scaling fundamentals keep repeating. Cache aggressively where reads dominate. Use database indexes intentionally. Measure before optimizing. Add structured logs and request tracing early. Protect APIs with rate limiting and circuit breakers. Most performance problems are discovered late because observability was postponed.

If I had to summarize this as a developer's perspective, it would be this: choose the stack your team can operate confidently, then design for evolution. Scalable APIs are not a one-time build. They are a system of technical decisions that must keep working as product, traffic, and user expectations grow.

The best backend is the one that helps your team ship value consistently for web, mobile, and ML-driven experiences. Frameworks matter, but engineering discipline matters more.`
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return BLOG_POSTS.find(post => post.slug === slug);
};

export const getRecentPosts = (count: number = 3): BlogPost[] => {
  return [...BLOG_POSTS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};
