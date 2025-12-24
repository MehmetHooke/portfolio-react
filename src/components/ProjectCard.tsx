export type Project = {
    id: string;
    name: string;
    description: string;
    tech: string[];
    repoUrl?: string;
};

export default function ProjectCard(props: Project) {


    return (
        <main className=" mt-5">

            <div className="">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 ">
                    <div className="flex items-center gap-3">
                        <h3 className="font-semibold">{props.name}</h3>
                    </div>
                    <p className="mt-2 text-sm text-neutral-300">
                        {props.description}
                    </p>
                    <p className="mt-3 text-xs text-neutral-400">
                        {props.tech}
                    </p>
                    <div className="mt-4 flex gap-3">
                        <a className="text-sm underline underline-offset-4" target="_blank" href={props.repoUrl}>GitHub Link</a>
                    </div>
                </div>
            </div>
        </main>
    )
}
