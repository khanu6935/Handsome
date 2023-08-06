export default function MainHeading({ textColor }) {
  return (
    <>
      <div className="w-[75%] mx-auto text-left">
        <h1 className="text-[6.25vw] font-bold uppercase">
          <span className={`${textColor} mr-6`}>Le carte</span>
          <span className="fadeIn">
            <span className="word-swap">
              <span className={`${textColor} word`}>Connectee</span>
              <span className={`${textColor} word`}>inclusive</span>
            </span>
          </span>
        </h1>
      </div>
    </>
  );
}
