import React from 'react';

export const EquipmentView: React.FC = () => {
  return (
    <article className="max-w-3xl mx-auto space-y-8 text-gray-900">
      <header className="pb-1">
        <h1 className="text-3xl sm:text-4xl font-serif font-normal text-black tracking-tight">
          Equipment
        </h1>
      </header>

      <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-800">
        <p>
          For the planned hike, you should have the following equipment:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-800">
          <li>
            <strong>Hiking shoes or boots</strong> with a good, non-slip sole, preferably waterproof. Please avoid ordinary trainers.
          </li>
          <li>
            <strong>A daypack</strong> in which you can comfortably carry everything you need.
          </li>
          <li>
            <strong>A water bottle</strong> with enough water for several hours of hiking.
          </li>
          <li>
            <strong>Comfortable hiking clothes</strong>, ideally made of breathable, quick-drying technical materials. We suggest following the so-called onion principle and bringing several layers of clothing so that you can adjust to changes in temperature.
          </li>
          <li>
            <strong>A waterproof and windproof jacket</strong>, even if the weather forecast looks good. Conditions in the mountains can change quickly.
          </li>
          <li>
            <strong>Sunglasses, sunscreen, and a sun hat.</strong>
          </li>
          <li>
            <strong>A spare T-shirt, underwear, and socks</strong>, particularly useful if you get wet or sweaty.
          </li>
        </ul>
      </div>
    </article>
  );
};
