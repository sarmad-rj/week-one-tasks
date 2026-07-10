import React from "react";
import { useState } from "react";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentProgress, setCurrentProgress] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [interests, setInterests] = useState([]);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [interestsError, setInterestsError] = useState(false);

  const interestsList = ["Sports", "Music", "Coding", "Reading"];

  const validateStep = () => {
    if (currentStep === 1) {
      if (!name.trim()) {
        setNameError(true);
        return false;
      }
      if (!email.trim()) {
        setEmailError(true);
        return false;
      }
      setNameError(false);
      setEmailError(false);
      return true;
    }

    if (currentStep === 2) {
      if (!country) {
        setCountryError(true);
        return false;
      }
      if (interests.length === 0) {
        setInterestsError(true);
        isValid = false;
      } else {
        setInterestsError(false);
      }

      setCountryError(false);
      return true;
    }

    return true;
  };

  const incStep = () => {
    if (currentStep < 3 && validateStep()) {
      setCurrentStep(currentStep + 1);
      setCurrentProgress(currentProgress + 50);
    }
  };

  const decStep = () => {
    setCurrentStep(currentStep - 1);
    setCurrentProgress(currentProgress - 50);
  };

  const resetForm = () => {
    setCurrentStep(1);
    setCurrentProgress(0);

    setName("");
    setEmail("");
    setCountry("");
    setInterests([]);

    setNameError(false);
    setEmailError(false);
    setCountryError(false);
    setInterestsError(false);
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <div className="text-center mb-2">
        <progress
          className="appearance-none w-full h-4"
          value={currentProgress}
          max={100}
        />
        <span className="text-sm font-medium text-gray-500">
          Step {currentStep} of 3
        </span>
      </div>

      <form className="space-y-4">
        {currentStep === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Personal Info</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError(false);
                }}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              />
              {nameError == true && (
                <p className="text-red-500 text-xs mt-1">
                  Please Enter Your Name
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              />
              {emailError == true && (
                <p className="text-red-500 text-xs mt-1">
                  Please Enter Correct Email
                </p>
              )}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Preferences</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Country
              </label>

              <select
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                  setCountryError(false);
                }}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none bg-white transition-all"
              >
                <option value="">Select a country</option>
                <option value="Pakistan">Pakistan</option>
                <option value="KSA">KSA</option>
                <option value="USA">USA</option>
              </select>
              {countryError && (
                <p className="text-red-500 text-xs mt-1">
                  Please select a country
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Interests
              </label>
              <div className="space-y-2">
                {interestsList.map((interest) => (
                  <label key={interest} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={interest}
                      checked={interests.includes(interest)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setInterests([...interests, interest]);
                        } else {
                          setInterests(
                            interests.filter((item) => item !== interest),
                          );
                        }

                        setInterestsError(false);
                      }}
                    />
                    {interest}
                  </label>
                ))}
              </div>
              {interestsError && (
                <p className="text-red-500 text-xs mt-1">
                  Please pick at least one interest
                </p>
              )}
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800">
              Review & Confirm
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-2 text-sm text-gray-700">
              <p className="border-b border-gray-200 pb-1">
                <strong>Name:</strong> {name}
              </p>
              <p className="border-b border-gray-200 pb-1">
                <strong>Email:</strong> {email}
              </p>
              <p className="border-b border-gray-200 pb-1">
                <strong>Country:</strong> {country}
              </p>
              <p>
                <strong>Interests:</strong>
                {interests.join(", ")}
              </p>
            </div>
            <div className="text-center">
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
              >
                Reset Form
              </button>
            </div>
          </div>
        )}

        {currentStep < 3 && (
          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={decStep}
              disabled={currentStep === 1}
              className={`px-4 py-2 text-sm rounded-md font-medium border transition-colors ${
                currentStep === 1
                  ? "text-gray-300 border-gray-200 cursor-not-allowed"
                  : "text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              Back
            </button>

            <button
              type="button"
              onClick={incStep}
              className="px-4 py-2 text-sm bg-indigo-500 text-white rounded-md font-medium hover:bg-indigo-600 transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;
