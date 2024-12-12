import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Edit, Trash2 } from "lucide-react";

export const VocabularyTableRow = ({ vocabulary, onEdit, onDelete }) => {
  return (
    <TableRow>
      <TableCell className="font-medium text-center">
        {vocabulary.word}
      </TableCell>
      <TableCell className="text-center">{vocabulary.meaning}</TableCell>
      <TableCell className="text-center">{vocabulary.pronunciation}</TableCell>
      <TableCell className="text-center">{vocabulary.whenToSay}</TableCell>
      <TableCell className="text-center">{vocabulary.lessonNo}</TableCell>
      <TableCell className="flex gap-2 justify-center items-center">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onEdit(vocabulary)}
          className="flex items-center gap-1"
        >
          <Edit className="h-4 w-4" />
          Edit
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => onDelete(vocabulary.id)}
          className="flex items-center gap-1"
        >
          <Trash2 className="h-4 w-4" />
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};
