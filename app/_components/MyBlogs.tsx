import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';
import { MY_BLOGS } from '@/lib/data';

const MyBlogs = () => {
    return (
        <section
            className="pb-section mt-16 md:mt-24"
            id="my-blogs"
        >
            <div className="container">
                <SectionTitle title="MY BLOGS" className='pt-10' />

                <div className="grid gap-6 md:grid-cols-3">
                    {MY_BLOGS.map((blog) => (
                        <Link
                            key={blog.slug}
                            href={blog.link}
                            target="_blank"
                            rel="noreferrer"
                            className="group flex h-full flex-col rounded-2xl border border-white/10 bg-background-active/60 p-6 opacity-80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-[#111111]"
                        >
                            <p className="text-sm uppercase tracking-[0.3em] text-primary/80">
                                {blog.category}
                            </p>

                            <h3 className="mt-4 text-xl font-semibold text-foreground">
                                {blog.title}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-foreground/70">
                                {blog.excerpt}
                            </p>

                            <span className="mt-6 text-sm font-medium text-primary transition-colors group-hover:text-primary-hover">
                                Read article →
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default MyBlogs;