import { VocTable } from "@/components/dashboard/VocTable";
import React from "react";

export const DVocabulary = () => {
  return (
    <div>
      <VocTable vocabularies={dummyData} />
    </div>
  );
};
const dummyData = [
  {
    id: 1,
    word: "こんにちは",
    meaning: "Hello/Good afternoon",
    pronunciation: "Konnichiwa",
    whenToSay: "Afternoon greeting",
    lessonNo: 1,
  },
  {
    id: 2,
    word: "おはよう",
    meaning: "Good morning",
    pronunciation: "Ohayou",
    whenToSay: "Morning greeting",
    lessonNo: 1,
  },
  {
    id: 3,
    word: "さようなら",
    meaning: "Goodbye",
    pronunciation: "Sayounara",
    whenToSay: "When parting ways",
    lessonNo: 2,
  },
];
