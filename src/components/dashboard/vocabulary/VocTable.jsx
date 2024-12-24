import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { VocabularyTableRow } from "./TableRow";

export const VocTable = ({ vocabularies, onUpdate, onDelete }) => {
  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Word</TableHead>
            <TableHead className="text-center">Meaning</TableHead>
            <TableHead className="text-center">Pronunciation</TableHead>
            <TableHead className="text-center">When to Say</TableHead>
            <TableHead className="text-center">Lesson No</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vocabularies?.map((vocabulary) => (
            <VocabularyTableRow
              key={vocabulary._id}
              vocabulary={vocabulary}
              onDelete={onDelete}
              onEdit={onUpdate}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
/* <TableRow key={vocabulary.id}>
              <TableCell className="font-medium">{vocabulary.word}</TableCell>
              <TableCell>{vocabulary.meaning}</TableCell>
              <TableCell>{vocabulary.pronunciation}</TableCell>
              <TableCell>{vocabulary.whenToSay}</TableCell>
              <TableCell>{vocabulary.lessonNo}</TableCell>
              <TableCell className="text-right space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => onUpdate(vocabulary)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => onDelete(vocabulary.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow> */
