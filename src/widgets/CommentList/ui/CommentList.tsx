import React, { useState, useCallback } from "react";

interface Comment {
  id: number;
  text: string;
}

interface CommentListProps {
  comments: Comment[];
}

export const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  const toggleComment = useCallback((id: number) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }, []);

  return (
    <ul>
      {comments.map(({ id, text }) => {
        const isExpanded = expandedIds.has(id);
        return (
          <li key={id}>
            <div
              onClick={() => toggleComment(id)}
              style={{ cursor: "pointer" }}
            >
              {isExpanded
                ? text
                : text.slice(0, 50) + (text.length > 50 ? "..." : "")}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
