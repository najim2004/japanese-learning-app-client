import { Button } from "@/components/ui/button";
import { VocabularyCard } from "@/components/vocabulary/VocabularyCard";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";

export const Vocabulary = () => {
  const vocabularies = [
    {
      word: "こんにちは",
      pronunciation: "Konnichiwa",
      meaning: "Hello (daytime greeting)",
      whenToSay: "Used as a standard greeting during the day",
    },
  ];

  return (
    <div className="w-full p-10">
      {vocabularies.map((vocab, index) => (
        <VocabularyCard
          key={index}
          word={vocab.word}
          pronunciation={vocab.pronunciation}
          meaning={vocab.meaning}
          whenToSay={vocab.whenToSay}
          audioSrc={vocab.audioSrc}
        />
      ))}
      <div className="flex justify-center gap-6 mt-20">
        <Button
          variant="destructive"
          size="lg"
          className="w-full max-w-[150px] flex justify-center items-center"
        >
          <ChevronLeftIcon className="h-4 w-4 mr-2" />
          Previous
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="bg-green-500 hover:bg-green-500/90 text-white w-full max-w-[150px] flex justify-center items-center"
        >
          Next
          <ChevronRightIcon className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};
