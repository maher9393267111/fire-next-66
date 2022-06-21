import Link from "next/link";

const Villacardhome = ({ villa }) => {
  return (
    <div>
       
      <div>
        <div className=" w-[770px] my-12 min-h-[300px] mx-auto  shadow-2xl ">
          <div className=" flex gap-4 h-full">
            {/* -image- */}

            <div className=" h-[300px] w-1/2">
              <Link  href={`/${villa.id}`}>
              <img
                className=" w-full h-full object-cover"
                src={villa?.images[0]}
                alt=""
              />
              </Link>
            </div>
            {/* -info-- */}

            <div>
              <div className=" font-semibold">
                <div className=" mt-16 ml-12 mr-12">
                  <h1 className=" text-2xl">{villa?.name}</h1>
                  <h1>
                    <p className=" text-2xl mt-4">
                      <span className="mr-2"> price/night:</span>
                      {villa?.price}$
                    </p>

                    <div>
                      <h1 className=" mt-4 text-[17px]">
                        near Sapanca 2km from center
                      </h1>
                    </div>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    </div>
  );
};

export default Villacardhome;
