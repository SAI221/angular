import { Label } from './label';
import { Collaborator } from './collaborator';

export interface Note {
    userId: number;
    noteId: number;
    title: string;
    description: string;
    archive: boolean;
    pinned: boolean;
    inTrash: boolean;
    color: string;
    labels: Label[];
    remainder: string;
    collaborators: Collaborator[];
}
