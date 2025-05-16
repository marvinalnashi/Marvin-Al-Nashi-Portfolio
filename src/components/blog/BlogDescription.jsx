import { blogSocials, tags } from "@/src/staticData/blog/blog";
import Image from "next/image";

const BlogDescription = ({ blog }) => {
    const { descriptionTitle, content, projectImage } =
    blog?.projectMetadata?.projectDescription || {};

    return (
        <div>
            <div>
                {descriptionTitle && (
                    <h3 className="mb-3 text-lg font-medium text-black dark:text-white xl:text-2xl">
                        {descriptionTitle}
                    </h3>
                )}

                {Array.isArray(content) &&
                    content.map((block, i) => {
                        if (block.type === "paragraph") {
                            return (
                                <p key={i} className="text-regular leading-[2] mb-4">
                                    {block.text}
                                </p>
                            );
                        }

                        if (block.type === "list") {
                            return (
                                <div key={i} className="mb-6">
                                    {block.title && (
                                        <h3 className="mb-3 text-lg font-medium text-black dark:text-white xl:text-2xl">
                                            {block.title}
                                        </h3>
                                    )}
                                    <ul className="list-disc ml-5 space-y-2 text-regular leading-[2]">
                                        {block.items?.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        }

                        return null;
                    })}

                {Array.isArray(projectImage) && (
                    <div className="grid gap-5 my-8 sm:grid-cols-2 md:gap-8">
                        {projectImage.map((item, i) => (
                            <div
                                key={i}
                                className="overflow-hidden rounded-xl xl:rounded-2xl"
                            >
                                <Image
                                    width={300}
                                    height={300}
                                    unoptimized={true}
                                    src={item}
                                    className="w-full"
                                    alt="Blog Inner Column Image"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="items-start justify-between gap-8 pt-5 my-10 border-t border-dashed blog-footer max-sm:space-y-4 sm:flex border-greyBlack">
                <div className="flex flex-1 gap-3">
                    <p className="text-black dark:text-white">Share:</p>
                    <ul className="flex items-center space-x-4">
                        {blogSocials?.map((item, i) => (
                            <li key={i}>
                                <a href={item?.link}>{item?.Icon}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-1 gap-3">
                    <p className="text-black dark:text-white">Tags:</p>
                    <div className="flex flex-wrap items-center gap-2.5">
                        {tags?.map((tag, i) => (
                            <a
                                key={i}
                                href={tag?.link}
                                className="inline-block border border-dashed border-greyBlack rounded-md text-sm py-1.5 px-2 transition-all hover:text-theme dark:hover:text-white"
                            >
                                {tag?.title}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDescription;
