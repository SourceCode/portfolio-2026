import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const EventSourcing: React.FC = () => {
    return (
        <>
            <SEO
                title="Event Sourcing | Ryan Rentfro"
                description="Storing the immutable history of changes (events) as the source of truth, enabling replayability and audit trails."
                canonical="https://rentfro.net/expertise/event-sourcing"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-mint rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">Event Sourcing</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        Don't just store the current state. Store the story of how you got there.
                    </p>
                </section>

                {/* Core Philosophy */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-brand-mint">The Source of Truth</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            In a traditional CRUD database, when you update a user's address, the old address is lost forever. You only know the now.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            With Event Sourcing, we persist every state change as an immutable event (e.g., `UserMovedAddress`, `OrderPlaced`, `ItemRemovedFromCart`). The current state is simply a derived view of all past events.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-teal">
                        <h3 className="text-xl font-bold text-white mb-4">Why It Matters</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">●</span>
                                <div className="text-white/80"><strong>Auditability:</strong> Perfect for finance and long term records. You can prove exactly who did what and when.</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">●</span>
                                <div className="text-white/80"><strong>Time Based:</strong> "What did the cart look like last Tuesday at 2 PM?" Just replay events up to that timestamp.</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">●</span>
                                <div className="text-white/80"><strong>Debugging:</strong> Copy the production event stream to a local environment and replay it step-by-step to reproduce a bug.</div>
                            </li>
                        </ul>
                    </GlassCard>
                </section>

                {/* CQRS Integration */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">CQRS & Event Sourcing</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-mint mb-3">The Write Side</h3>
                            <p className="text-sm text-white/70">Optimized for high-throughput writes. Validates commands and appends them to the Event Store.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-mint mb-3">The Projector</h3>
                            <p className="text-sm text-white/70">An async worker that listens to new events and updates specialized Read Models (SQL table, Redis cache).</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-mint mb-3">The Read Side</h3>
                            <p className="text-sm text-white/70">Optimized for query speed. Can be denormalized and tailored to specific views.</p>
                        </GlassCard>
                    </div>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Architecture', 'Backend', 'Data', 'System']} />

                {/* Back Link */}
                <div className="pt-8 border-t border-white/10">
                    <Link to="/expertise/data-engineering" className="inline-flex items-center text-brand-mint hover:text-white transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        Back to Data Engineering
                    </Link>
                </div>

            </article>
        </>
    );
};

export default EventSourcing;
