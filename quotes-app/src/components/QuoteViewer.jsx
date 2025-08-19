import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiShare1 } from "react-icons/ci";
import { GrFormNext } from "react-icons/gr";

function QuoteViewer() {
  const { category } = useParams();
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
       setLoading(true);
    try {
      const res = await fetch(`https://quotes-app-hjzy.onrender.com/api/quotes/${category}`);
      const data = await res.json();

      if (Array.isArray(data)) {
        const random = data[Math.floor(Math.random() * data.length)];
        setQuote(random);
        setError(null);
      } else {
        setError(data.message);
        setQuote(null);
      }
    } catch (err) {
      setError("Could not fetch quotes. Please try again.");
      setQuote(null);
    }
    finally{
      setLoading(false);
    }
  };

  const handleShare = async () => {
    if (!quote) return;

    const shareText = `"${quote.quote}" – ${quote.author}`;
    const shareUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${category.toUpperCase()} Quote`,
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        console.log("Share cancelled or failed:", err);
      }
    } else {
      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}&quote=${encodeURIComponent(shareText)}`;
      window.open(facebookUrl, "_blank");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, [category]);

  return (
    <div className="mt-8 bg-white rounded-lg shadow-xl p-6 text-gray-800 max-w-xl w-full mx-auto min-h-[300px] flex flex-col justify-between">
      <h2 className="text-2xl font-semibold mb-4 text-center uppercase text-slate-700">
        {category} Quote
      </h2>

      {error && <p className="text-red-600 text-center">{error}</p>}
      
     <div className="text-center mb-4">
      {loading ? (
        <p className="text-gray-600">Loading...please wait</p>
      ) : (
        quote && (
          <>
            <p className="text-lg italic mb-2 leading-relaxed">"{quote.quote}"</p>
            <p className="text-sm text-gray-600 textFont">– {quote.author}</p>
          </>
        )
      )}
    </div>


      <div className="flex justify-center gap-3 mt-4 flex-wrap">
        <button onClick={fetchQuote} className="btn btn-dark d-flex align-items-center gap-1">
          Show Another <GrFormNext />
        </button>
        <button
          onClick={handleShare}
          disabled={!quote}
          className="btn btn-primary d-flex align-items-center gap-1"
        >
          Share <CiShare1 />
        </button>
      </div>
    </div>
  );
}

export default QuoteViewer;
