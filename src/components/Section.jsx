const Section = ({name,children}) =>{
  return (
    <div className="">
                <div className="flex flex-col justify-center items-center ">
                    <h1 className="text-4xl font-semibold mt-3">{name}</h1>
                    </div>
                    <div>{children}</div>
            </div>
  );
}

export default Section