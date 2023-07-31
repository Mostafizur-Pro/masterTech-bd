import Link from "next/link";

function CategoryComponent({ category }) {
  console.log("Hellog", category);
  return (
    <div>
      {" "}
     
        <th className="text-lg">{category.id}</th>

        <th className="flex items-center gap-2">
          <p className="text-5xl">{category.logo}</p>
          <p className="text-lg">{category.name}</p>
        </th>
        <th>
          <Link href={`/builder/${category?.name}`}>
            <button className="btn btn-success text-white">Select</button>
          </Link>
        </th>
     
    </div>
  );
}

export default CategoryComponent;
