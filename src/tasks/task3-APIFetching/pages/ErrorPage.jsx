import React from "react";
import { GoAlertFill } from "react-icons/go";
import { IoMdRepeat } from "react-icons/io";

const ErrorPage = ({ error, fetchPokemonData }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center max-w-sm w-full shadow-sm">
      <div className="text-3xl mb-2 flex items-center justify-center text-red-600">
        <GoAlertFill />
      </div>
      <h3 className="text-lg font-bold text-red-900 mb-1">Data Fetch Failed</h3>
      <p className="text-sm text-red-700 mb-4">{error}</p>

      <button
        onClick={fetchPokemonData}
        className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider py-2.5 px-5 rounded-xl shadow transition duration-150 inline-flex items-center justify-center gap-2"
      >
        <IoMdRepeat className="text-sm" />
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
