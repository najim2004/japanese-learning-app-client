import React, { useState } from "react";
import { Volume2, Headphones, BookOpen, Info, Speaker } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Mock audio hook (replace with actual audio implementation)
const useAudio = (audioSrc) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    // In a real implementation, you'd use actual audio playback
    console.log("Playing audio:", audioSrc);
    setIsPlaying(true);
    // Simulated audio playing
    setTimeout(() => setIsPlaying(false), 2000);
  };

  return { play, isPlaying };
};

export const VocabularyCard = ({
  word,
  pronunciation,
  meaning,
  whenToSay,
  audioSrc,
}) => {
  const { play: playPronunciation, isPlaying } = useAudio(audioSrc);

  return (
    <Card className="w-full max-w-[1000px] mx-auto transform transition-all">
      <CardHeader className="pb-2">
        <h1 className="text-sm font-medium">Lesson No. 1</h1>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h2 className="text-3xl font-bold text-primary">{word}</h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={playPronunciation}
                    disabled={isPlaying}
                  >
                    {isPlaying ? (
                      <Headphones className="h-5 w-5 text-primary animate-pulse" />
                    ) : (
                      <Volume2 className="h-5 w-5" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Listen to Pronunciation</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Badge variant="secondary" className="mb-2">
              <Speaker className="mr-2 h-4 w-4" /> Pronunciation
            </Badge>
            <p className="text-lg font-medium text-muted-foreground">
              {pronunciation}
            </p>
          </div>

          <div>
            <Badge variant="secondary" className="mb-2">
              <BookOpen className="mr-2 h-4 w-4" /> Meaning
            </Badge>
            <p className="text-lg font-medium text-muted-foreground">
              {meaning}
            </p>
          </div>
        </div>

        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="w-full">
                <div className="flex items-center gap-6 bg-secondary p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Info className="h-5 w-5 text-primary" />
                    <span className="font-medium">When to Say</span>
                  </div>
                  <span className="text-muted-foreground">{whenToSay}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Context and usage of the vocabulary word</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <h1 className="font-medium text-gray-700">
            Admin Email: najim@gmail.com
          </h1>
          <Button variant="secondary" size="sm" className="">
            Click If Complete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Example usage component
const VocabularyNavigation = () => {
  const vocabularies = [
    {
      word: "こんにちは",
      pronunciation: "Konnichiwa",
      meaning: "Hello (daytime greeting)",
      whenToSay: "Used as a standard greeting during the day",
      audioSrc: "/path/to/audio/konnichiwa.mp3",
    },
    {
      word: "ありがとう",
      pronunciation: "Arigatou",
      meaning: "Thank you",
      whenToSay: "Expressing gratitude in various situations",
      audioSrc: "/path/to/audio/arigatou.mp3",
    },
    {
      word: "さようなら",
      pronunciation: "Sayounara",
      meaning: "Goodbye",
      whenToSay: "Formal farewell, used when parting for a long time",
      audioSrc: "/path/to/audio/sayounara.mp3",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
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
    </div>
  );
};

export default VocabularyNavigation;
