import React from 'react';
import { HiKantText } from '../components/HiKantTypography';

export const CostsView: React.FC = () => {
  return (
    <article className="max-w-3xl mx-auto space-y-8 text-gray-900">
      <header className="pb-1">
        <h1 className="text-3xl sm:text-4xl font-serif font-normal text-black tracking-tight">
          Costs
        </h1>
      </header>

      <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-800">
        <p>
          The cost of participating in <HiKantText /> is deliberately kept as low as possible. Participants should expect the following expenses:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-800">
          <li>€15 membership fee for the association Luoghi di Passaggio.</li>
          <li>€15 per night for accommodation at Padre Sergio’s former Monastery. For three nights, this amounts to €45.</li>
          <li>A contribution to the shared travel costs from Turin to Marmora. Transport to Marmora will be organized collectively from Turin.</li>
          <li>A contribution to food expenses, since meals will be bought and prepared together by the group.</li>
        </ul>

        <p className="pt-2">
          Participants are responsible for arranging and covering for their journey to Turin.
        </p>

        <p>
          More precise information about the meeting point in Turin, transport arrangements, and the estimated food contribution will be provided once the group of participants has been finalized.
        </p>
      </div>
    </article>
  );
};
