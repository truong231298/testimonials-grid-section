import Data from "./components/Data.json";

export default function App() {
  // create small div
  const makeBoxs = (ids) => {
    return ids.map((id) => (
      <div key={id} className={`flex flex-col gap-4 p-4 bg-${Data[id].background} border-2 rounded-lg`}
        style={{
          backgroundImage: `url(${Data[id].images})`,
          backgroundPosition: 'right top',
          backgroundSize: '',
          backgroundRepeat: 'no-repeat'
        }}>
        <div className="flex flex-row gap-2 items-center">
          <img src={Data[id].avatar} alt="" className="p-1 bg-White rounded-full" />
          <span className="flex flex-col">
            <h1 className={`text-${Data[id].color1} font-semibold opacity-100`}>{Data[id].name}</h1>
            <p className={`text-${Data[id].color1} opacity-50`}>Verified Graduate</p>
          </span>
        </div>
        <p className={`text-${Data[id].color1} font-semibold opacity-100`}>{Data[id].content1}</p>
        <p className={`text-${Data[id].color1} opacity-70`}>{Data[id].content2}</p>
      </div>
    ));
  };

  return (
    <main className="min-h-screen p-16 bg-Lightgrayishblue">
      <section className="grid sm:grid-cols-4 gap-4">
        {/* big part */}
        <div className="col-span-3">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              {makeBoxs([0])}
            </div>
            <div>
              {makeBoxs([1])}
            </div>
            <div>
              {makeBoxs([2])}
            </div>
            <div className="sm:col-span-2">
              {makeBoxs([3])}
            </div>
          </div>

        </div>
        {/* smaller */}
        <div className="">
          {makeBoxs([4])}
        </div>
      </section>
    </main>
  );
}
