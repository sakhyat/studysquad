import { currencyFormatter } from "@/utils/currencyFormatter";
import Image from "next/image";
import Link from "next/link";

const CourseItem = ({ course }) => {
	return (
		<div className="flex flex-col justify-center shadow-lg gap-5">
			<Image
				src={course.cover}
				alt={course.title}
				width={400}
				height={400}
				priority
				className="w-full object-cover h-64"
			/>
			<div className="bg-slate-950 text-white flex flex-col gap-2 py-3 px-4">
				<h2>{course.title}</h2>
				<div className="flex items-center justify-between">
					<span>{course.instructor}</span>
					<span>Duration: <span className="font-bold">{course.duration}</span> hours</span>
				</div>
				<span>Enrolled Students: <span className="font-bold">{course.student}</span></span>
				<span>Rating: <span className="font-bold">{course.rating}</span></span>
				<p className="text-gray-400">{course.description.substring(0,100)}...</p>
				<span className="font-bold">{currencyFormatter(course.price)}</span>
				<Link href={`${course.id}`} className="bg-white text-black py-2 px-4">
					View Details
				</Link>
			</div>
		</div>
	);
};

export default CourseItem;
